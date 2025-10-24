<img alt="Searchcraft" src="./header.png">
<h1 align="center">vite-react-searchcraft-template</h1>
<p align="center">
A minimal React + TypeScript template powered by <a href="https://searchcraft.io">Searchcraft</a> – the developer-first vertical search engine.
</p>

<p align="center">
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-6.4.1-646CFF.svg?logo=vite&style=flat" alt="Vite">
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-19.1.0-61DAFB.svg?logo=react&style=flat" alt="React">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.8-blue.svg?logo=typescript&style=flat" alt="TypeScript">
  </a>
  <a href="https://www.npmjs.com/package/@searchcraft/react-sdk">
    <img src="https://img.shields.io/badge/Searchcraft_SDK-0.12.0-2B2B2B.svg" alt="Searchcraft SDK">
  </a>
  <a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/ESLint-9.25.0-4B32C3.svg?logo=eslint&style=flat" alt="ESLint">
  </a>
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js&style=flat" alt="Node.js">
  </a>
</p>

## Table of Contents
- [Purpose](#purpose)
- [Features](#features)
  - [🧰 Template Features](#-template-features)
  - [🔍 Searchcraft SDK Features](#-searchcraft-sdk-features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Requirements](#requirements)
- [Resources](#resources)
- [License](#license)

## Purpose

Modern apps need fast, relevant, typo-tolerant search — but building it from scratch or with legacy tools is expensive, complex, and backend-heavy. That’s where **[Searchcraft](https://searchcraft.io)** comes in: a zero-config, front-end focused vertical search engine built to drop into your product in minutes.

This template exists to make that even easier. It provides:

- A minimal but complete **Vite + React + TypeScript** frontend, bootstrapped with `npm create vite@latest`
- Out-of-the-box **Searchcraft SDK integration**
- Clean environment variable config and instant dev startup

Whether you're building search for a publisher, SaaS app, ecommerce experience, or anything content-heavy — this gets you from zero to search fast.

## Features

### 🧰 Template Features

- ⚛️ **React 19 + TypeScript** – The latest versions for modern development
- ⚡ **Vite 6** – Lightning-fast builds, HMR, and DX
- 🧪 **Minimal boilerplate** – Just enough structure to get started
- 🔐 **Environment-based configuration** – No hardcoded secrets
- ✅ **ESLint 9** – Preconfigured for code quality

### 🔍 Searchcraft SDK Features

- 🔍 **Typo-tolerant, relevance-tuned search** with zero backend setup
- 🧩 **Built-in UI components** for search inputs, result lists, and pagination
- 🧠 **Smart ranking** with support for field weighting, stopwords, and synonyms
- 📊 **Analytics-ready** with built-in hooks for usage insights via [Vektron](https://vektron.searchcraft.io)
- 🛰️ **Fully managed** – No need to stand up infrastructure

## Getting Started

You can either click "[Use this template](https://github.com/searchcraft-inc/vite-react-searchcraft-template/generate)" on GitHub, or use `degit` from the command line:

```
npx degit searchcraft-inc/vite-react-searchcraft-template <app_name>
```

Install dependencies:
```
yarn
```

Then, add a `.env` file in the root of your project with your Searchcraft credentials, which can be found in your [Searchcraft Vektron Dashboard](https://vektron.searchcraft.io):
```
VITE_ENDPOINT_URL=
VITE_INDEX_NAME=
VITE_READ_KEY=
```

Run the app in development mode:
```
yarn dev
```

## Available Scripts

This project includes a few helpful npm/yarn scripts to streamline development:

| Command         | Description                                                  |
|-----------------|--------------------------------------------------------------|
| `yarn dev`      | Starts the Vite development server with hot module reload.    |
| `yarn build`    | Builds the project using TypeScript and Vite for production.  |
| `yarn preview`  | Serves the production build locally.                          |
| `yarn lint`     | Runs ESLint across the codebase to catch errors and bad patterns. |

## Requirements

- [Node.js](https://nodejs.org/) v18+
- [Yarn](https://yarnpkg.com/) (or npm)
- A [Searchcraft](https://searchcraft.io) account with a configured index

## Resources

- 📘 [Searchcraft Docs](https://docs.searchcraft.io)
- 🛰️ [Vektron Dashboard](https://vektron.searchcraft.io)
- 💬 [Searchcraft Discord](https://discord.gg/RQnGD63qWw)
- 🧠 [Searchcraft Reddit](https://www.reddit.com/r/searchcraft/)
- 🧪 [Searchcraft SDK on npm](https://www.npmjs.com/package/@searchcraft/react-sdk)

## License

Licensed under the [Apache 2.0 License](LICENSE).

<p align="center">
Built with 🛰️ by the <a href="https://searchcraft.io">Searchcraft</a> team
</p>
