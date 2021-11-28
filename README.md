# vite-plugin-linked-packages

<p align="center">
  <a href="https://www.npmjs.com/package/@mgcrea/vite-plugin-linked-packages">
    <img src="https://img.shields.io/npm/v/@mgcrea/vite-plugin-linked-packages.svg?style=for-the-badge" alt="npm version" />
  </a>
  <!-- <a href="https://www.npmjs.com/package/@mgcrea/vite-plugin-linked-packages">
    <img src="https://img.shields.io/npm/dt/@mgcrea/vite-plugin-linked-packages.svg?style=for-the-badge" alt="npm total downloads" />
  </a> -->
  <a href="https://www.npmjs.com/package/@mgcrea/vite-plugin-linked-packages">
    <img src="https://img.shields.io/npm/dm/@mgcrea/vite-plugin-linked-packages.svg?style=for-the-badge" alt="npm monthly downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/vite-plugin-linked-packages">
    <img src="https://img.shields.io/npm/l/@mgcrea/vite-plugin-linked-packages.svg?style=for-the-badge" alt="npm license" />
  </a>
  <a href="https://github.com/mgcrea/vite-plugin-linked-dependencies/actions/workflows/main.yml">
    <img src="https://img.shields.io/github/workflow/status/mgcrea/vite-plugin-linked-dependencies/main?style=for-the-badge" alt="github main workflow" />
  </a>
</p>

## Features

- Automatically hoist your linked packages peer dependencies as local aliases inside your local `node_modules` folder.

## Install

```sh
npm install --save-dev @mgcrea/vite-plugin-linked-packages
```

## Quickstart

```tsx
// vite.config.ts
import linkedPackagesPlugin from '@mgcrea/vite-plugin-linked-packages';

export default defineConfig({
  plugins: [linkedPackagesPlugin()],
});
```
