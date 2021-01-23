import { jsx } from '@hyperlight/jsx'
import { Nav } from '../../components/Nav'
import type { Response } from '@tinyhttp/app'

export default ({ Page }) => {
  return {
    ...Page,
    children: [<Nav />, <main>{...Page.children}</main>]
  }
}

export const getServerSideState = async ({ params, res }: { params: Record<string, any>; res: Response }) => {
  const pages = ['routing']

  if (pages.includes(params.slug)) {
    const { Module } = await import('module')

    const require = Module.createRequire(import.meta.url)

    const { hypermdx } = await require('hypermdx')
    const { readFileSync } = require('fs')
    const md = hypermdx()

    const { url } = import.meta

    const root = url.slice(url.indexOf('///') + 2, url.indexOf('/.cache'))

    const file = readFileSync(`${root}/docs/${params.slug}.md`).toString()

    return {
      state: {
        Page: md`${file}`
      }
    }
  } else {
    res.status(404)
  }
}
