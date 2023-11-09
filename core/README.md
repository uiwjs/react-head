react-head
===

[![CI](https://github.com/uiwjs/react-head/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-head/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@uiw/react-head.svg)](https://www.npmjs.com/package/@uiw/react-head)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-head.svg?style=flat&label=)](https://www.npmjs.com/package/@uiw/react-head)
[![Coverage Status](https://uiwjs.github.io/react-head/badges.svg)](https://uiwjs.github.io/react-head/lcov-report/)

React components will manage your changes to the document head, like [`react-helmet`](https://www.npmjs.com/package/react-helmet)

## Quick Start

```bash
npm install @uiw/react-head
```

### Using

```jsx mdx:preview
import React, { useState } from "react";
import Head from '@uiw/react-head';

export default function App() {
  const [count, setCount] = useState(1);
  const click = () => setCount(count + 1)
  return (
    <div className="container">
      <Head>
        <Head.Meta charSet="utf-8" />
        <Head.Title>{count} React Head</Head.Title>
        <Head.Link rel="canonical" href="https://uiwjs.github.io" />
      </Head>
      <button onClick={click}>
        Switch Title - "{count}"
      </button>
    </div>
  );
}
```

### Style

```jsx mdx:preview
import React, { useState } from "react";
import Head from '@uiw/react-head';

const css = `.box-test { color: red; }`

export default function App() {
  return (
    <div>
      <Head.Style>{css}</Head.Style>
      <Head>
        <Head.Style>{css}</Head.Style>
      </Head>
      <div className="box-test">Text Color</div>
    </div>
  );
}
```

outputs:

```html
<head>
  <style>.box-test { color: red; }</style>
  <style>.box-test { color: red; }</style>
</head>
<!-- .... -->
```

### Meta

```jsx mdx:preview
import React, { useState } from "react";
import Head from '@uiw/react-head';

export default function App() {
  const [count, setCount] = useState(1);
  const click = () => setCount(count + 1)
  return (
    <div>
      <Head.Meta name="keywords" content="react-head,uiw,uiwjs" />
      <Head.Meta charSet="utf-8" />
      <Head.Meta name="description" content={`${count} React components will manage your changes to the document head.`} />
      <button onClick={click}>
        Modify Meta name=description - "{count}"
      </button>
    </div>
  );
}
```

Outputs:

```html
<head>
  <meta name="keywords" content="react-head,uiw,uiwjs">
  <meta name="description" content="1 React components will manage your changes to the document head.">
</head>
```

### Modify Favicon

```jsx
<Head.Link rel="icon" href="/favicon.ico" />
<Head.Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

```jsx mdx:preview
import React, { useState } from "react";
import Head from '@uiw/react-head';

const favicon = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦖</text></svg>`
const favicon2 = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤡</text></svg>`

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Head.Link rel="icon" type="image/svg+xml" href={show ? favicon : favicon2} />
      <button onClick={() => setShow(!show)}>
        Change Favicon {show ? "🦖" : "🤡"} {String(show)}
      </button>
    </div>
  );
}
```

Outputs:

```html
<head>
  <link data-head="true" rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤡</text></svg>" />
</head>
```


## All Sub Components

Elements that can be used inside the `<head>`:

- [`<title>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title) -> `<Head.Title>`
- [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) -> `<Head.Base>`
- [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) -> `<Head.Link>`
- [`<style>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) -> `<Head.Style>`
- [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) -> `<Head.Meta>`


## Development

1. Dependencies in the installation package and example

```bash
npm install
```

2. To develop, run the self-reloading build:

```bash
npm run build  # Compile packages      📦 @uiw/react-head
npm run watch  # Real-time compilation 📦 @uiw/react-head
```

3. Run Document Website Environment:

```bash
npm run start
```

4. To contribute, please fork repos, add your patch and tests for it (in the `test/` folder) and submit a pull request.

```bash
npm run test
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-head/graphs/contributors">
  <img src="https://uiwjs.github.io/react-head/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.