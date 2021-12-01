import { Dirent, PathLike } from 'fs';
import { readdir, readFile } from 'fs/promises';
import { resolve } from 'path';

type ListSymlinksOptions = {
  depth?: number;
  filter?: (item: Dirent) => boolean;
};

const listSymlinks = async (directory: PathLike, { depth = 0, filter }: ListSymlinksOptions) => {
  const list = await readdir(directory, { withFileTypes: true });
  const symlinks = list.filter((item) => item.isSymbolicLink()).map((item) => item.name);
  if (depth <= 0) {
    return symlinks;
  }
  const subFolders = list.filter((item) => item.isDirectory() && (filter ? filter(item) : true));
  for (const folder of subFolders) {
    const folderSymlinks = await listSymlinks(`${directory}/${folder.name}`, { depth: depth - 1 });
    symlinks.push(...folderSymlinks.map((item) => `${folder.name}/${item}`));
  }
  return symlinks;
};

export default function linkedPackagesPlugin(root = process.cwd()) {
  const modulesDirectory = resolve(root, 'node_modules');

  return {
    name: 'linked-packages',
    async config(config: PartialViteConfig) {
      const linkedDependencies = await listSymlinks(modulesDirectory, {
        depth: 1,
        filter: (item) => item.name.startsWith('@'),
      });
      const linkedPeerDependencies: string[] = [];
      for (const linkedDependency of linkedDependencies) {
        const packageContents = await readFile(resolve(modulesDirectory, linkedDependency, 'package.json'), 'utf-8');
        const packageJson = JSON.parse(packageContents);
        if (packageJson.peerDependencies) {
          Object.keys(packageJson.peerDependencies).forEach((name) => {
            if (!linkedPeerDependencies.includes(name)) {
              linkedPeerDependencies.push(name);
            }
          });
        }
      }
      config.resolve.alias.push(
        ...linkedPeerDependencies.map((pkgName) => ({
          find: pkgName,
          replacement: resolve(modulesDirectory, pkgName),
        }))
      );
    },
  };
}

type PartialViteConfig = {
  resolve: {
    alias: { find: string; replacement: string }[];
  };
};
