# ZapPages - Web Builder

## Dev's Guide

[Add components](./docs/components/README.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d8205a4f-f3fb-48c2-bd03-7027add96c7c/deploy-status)](https://app.netlify.com/sites/voltk-page/deploys)
---

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


### Arquitetura
Princípais estrutura de pastas e suas resposabilidades.

| pasta      | Sobre                                                                                    |
|------------|------------------------------------------------------------------------------------------|
| api        | Para construí os endpoints, DTOs Response e Request, e desenvolver as Chamadas para APIs |
| src/pages  | São módulos de páginas                                                                   |
| src/router | são modulos de roteamento                                                                |
| src/stores | são modulos de gerenciamento do estado global da aplicação                               |


#### Para desenvolver uma novo Endpoint

Ao querer acessar um recurso do back-end devemos criar um novo acesso por Endpoints, isto é feito na pasta de Api onde no arquivo
`apiConsumer.ts` é definido a configuração de endpoint e em `apiConsumer.interface.ts` o que deve ter de endpoint.
