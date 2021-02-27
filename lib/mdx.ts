export const mdx = async () => {
  const hypermdx = await import('hypermdx').then((mod) => mod.hypermdx)

  const remarkPrism = await import('remark-highlight.js')

  const md = hypermdx({
    remarkPlugins: [remarkPrism]
  })

  return md
}
