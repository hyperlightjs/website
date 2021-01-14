# Pages

In Hyperlight, a page is a [view](https://github.com/jorgebucaran/hyperapp/blob/main/docs/reference.md#view-prop) exported from a `.jsx`, `.jsx`, `.ts` or `.tsx` file in the `pages/` directory in the root of your project.

Here's an example:

```tsx
// pages/index.tsx
export default () => <p>Default export</p>;
```

## Two forms of pre-rendering

Hyperlight has two ways a page can be pre-rendered: Server-side Rendering and Static Generation.

The difference between the two is when the HTML of a page is generated.

This is not a setting that can be switched on and off but it **depends on each page**. This means you can have some page that are statically generated one time and pages that generate their HTML on each request.

- **Static Generation**: The HTML is built once and gets reused on each request
- **Server-side Rendering**: The HTML is re-generated each request.
