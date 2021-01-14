# Routing

Hyperlight has a file-system based routing system.

When a file is added to the `pages/` folder it gets bundled and ready to be served.

File names can be used to define the most common patterns

## Index routes

The router will automatically map files named `index` to the root of the directory:

- `pages/index.tsx` → `/`
- `pages/subdirectory/index.tsx` → `/subdirectory/`

## Nested routes

The router supports nested files and folders. If you create a nested folder structure it will be automatically routed to the respected subroute:

- `pages/subdirectory/file.tsx` → `/subdirectory/file`

## Dynamic route segments (slugs)

Dynamic route segments or "slugs" for short allow you to match certain segment of the route:

- `pages/slug/[parameter].tsx` → `/blog/slug/*`
- `pages/[slugdir]/commonRoute.tsx` → `/*/commonRoute`
- `pages/spreadslug/[...all].tsx` → `/**/*`
