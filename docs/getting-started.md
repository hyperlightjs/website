# Getting started

## About Hyperlight

Hyperlight is a lightweight framework based on [Hyperapp](https://github.com/jorgebucaran/hyperapp) and [tinyhttp](https://github.com/talentlessguy/tinyhttp).

By targeting only ESM Hyperlight avoids module resolution problems and dirty hacks and instead, follows the standards. It also builds blazingly fast thanks to [esbuild](https://github.com/evanw/esbuild/).

Hyperlight supports JavaScript and [TypeScript](https://www.typescriptlang.org/) out of the box.

Hyperscript (`h()` calls) notation is supported and JSX can be enabled using a special package.

The framework supports CSS imports. Although, you can easily connect preprocessors with the help of [esbuild plugins](https://esbuild.github.io/plugins/#finding-plugins).

## Project setup

### Automated installation using `create-hyperlight-app`

> This is still work in progress, checkout [#4](../../issues/4) for progress status

### Manual Installation

For basic framework functioning you'll need the `hyperlight` and the `hyperapp` package:

```sh
# npm
$ npm i hyperlight hyperapp

# yarn
$ yarn add hyperlight hyperapp

# pnpm
$ pnpm i hyperlight hyperapp
```

#### JSX

To enable JSX support install the `@hyperlight/jsx` package:

```
$ npm install @hyperlight/jsx
```

And import `jsx` function on top of page file:

```jsx
import { jsx } from '@hyperlight/jsx'

export default () => <h1>Hello World</h1>
```

## CLI

The Hyperlight CLI provides a set of commands for developing, building and running the app.

### Development

#### `hyperlight dev --host [host] --port [port] --directory [directory]`

Start the development server with live reload and no caching / static generation, the arguments are:

- **--host**: IP or FQDN the http server will listen on.
- **--port**: HTTP server port
- **--directory**: project directory

### Production

#### `hyperlight build [directory]`

Build the current directory, or a given `[directory]` if specified, making it ready for production via `hyperlight serve`.

The build result will be located in the `.cache` folder.

### `hyperlight serve --host [host] --port [port] --directory [directory] --disable-cache`

Starts the production-ready web server (built with [tinyhttp](https://github.com/talentlessguy/tinyhttp/)), the arguments are:

- **--host**: Same as [development](#development)
- **--port**: Same as [development](#development)
- **--directory**: Same as [development](#development)
- **--disable-cache**: Disable cache headers. This is useful when reverse proxy already sets it's own cache headers

### `hyperlight export --directory [directory] --output [directory]]`

Export the project into a ready-to-serve directory. Currently doesn't support slugs, check [#24](../../issues/24) for status, the arguments are:

- **--directory**: Same as [development](#development)
- **--output**: Output directory, default is `dist/`

## Creating pages

In Hyperlight, "page" stands for exported Hyperapp view. Each page has a special filename and a route attached to it.

```tsx
// pages/index.tsx
import { jsx } from '@hyperlight/jsx'

export default () => <h1>Hello World</h1>
```

### Dynamic routes

You can set URL parameters to pages that can be accessed from [`getServerSideState`](#getserversidestate).

```tsx
// pages/[id].tsx
import { jsx } from '@hyperlight/jsx'

export default (params: { id: any }) => <h1>Hello World: ${params.id}</h1>

export const getServerSideState = ({ params }) => params
```

## Data fetching

There are two ways to fetch initial data in Hyperlight:

- **`getInitialState`** - set initial state to client (similar to `app({ init: { ... } })`
- **`getServerSideState`** - append additional state with access to server context

### `getInitialState`

```tsx
export const getInitialState = () => ({
  state1: 'state text',
  state2: {
    key1: 'Hello',
    key2: 'World'
  }
})
```

**getInitialState** is an exported function that must return an object representing the initial state of the page.

Runs once in production and each time the page is requested during development.

More about `getInitialState` [here](insertlink) (not yet written)

### `getServerSideState`

```tsx
export const getServerSideState = ({ params, req }: Context) => ({
  state: {
    state1: 'Hello World',
    id: params.id,
    httpVersion: req.httpVersion
  }
})
```

**getServerSideState** is another exported function that must return a [ServerSideState](insertlink) (not yet written)

It get called with a [Context](insertlink) (not yet written) parameter, an object that contains a [Request](https://tinyhttp.v1rtl.site/docs#request) and a [Response](https://tinyhttp.v1rtl.site/docs#response).

It gets runt every time the page is requested, both in production and development.

More about `getServerSideState` [here](insertlink) (not yet written)
