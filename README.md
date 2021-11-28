# vite-plugin-linked-dependencies

<p align="center">
  <a href="https://www.npmjs.com/package/@mgcrea/vite-plugin-linked-dependencies">
    <img src="https://img.shields.io/npm/v/@mgcrea/vite-plugin-linked-dependencies.svg?style=for-the-badge" alt="npm version" />
  </a>
  <!-- <a href="https://www.npmjs.com/package/@mgcrea/vite-plugin-linked-dependencies">
    <img src="https://img.shields.io/npm/dt/@mgcrea/vite-plugin-linked-dependencies.svg?style=for-the-badge" alt="npm total downloads" />
  </a> -->
  <a href="https://www.npmjs.com/package/@mgcrea/vite-plugin-linked-dependencies">
    <img src="https://img.shields.io/npm/dm/@mgcrea/vite-plugin-linked-dependencies.svg?style=for-the-badge" alt="npm monthly downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/vite-plugin-linked-dependencies">
    <img src="https://img.shields.io/npm/l/@mgcrea/vite-plugin-linked-dependencies.svg?style=for-the-badge" alt="npm license" />
  </a>
  <a href="https://github.com/mgcrea/vite-plugin-linked-dependencies/actions/workflows/main.yml">
    <img src="https://img.shields.io/github/workflow/status/mgcrea/vite-plugin-linked-dependencies/main?style=for-the-badge" alt="github main workflow" />
  </a>
</p>

## Features

- Automatically hoist your linked dependencies' peer dependencies as local aliases inside your local `node_modules`
  folder.

## Install

```sh
npm install @mgcrea/vite-plugin-linked-dependencies
```

## Quickstart

```tsx
// vite.config.ts
import linkedDependenciesPlugin from '@mgcrea/vite-plugin-linked-dependencies';

export default defineConfig({
  plugins: [linkedDependenciesPlugin()],
});
```
