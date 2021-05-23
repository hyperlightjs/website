import { jsx } from '@hyperlight/jsx'
import { Nav } from '../../components/Nav'
import type { Response } from '@tinyhttp/app'
import { readdir, readFile } from 'fs/promises'
import { hypermdx } from 'hypermdx'

import '../../styles/main.css'
import '../../styles/docs.css'

export default ({ Page }) => {
  return {
    ...Page,
    children: [<Nav />, <main>{...Page.children}</main>]
  }
}

export const getServerSideState = async ({ params, res }: { params: Record<string, any>; res: Response }) => {
  const { url } = import.meta

  const root = url.slice(url.indexOf('///') + 2, url.indexOf('/.cache'))

  const pages = (await readdir(`${root}/docs`)).map((x) => x.slice(0, x.indexOf('.md')))

  if (pages.includes(params.slug)) {
    const md = hypermdx()

    let file: string

    try {
      file = (await readFile(`${root}/docs/${params.slug}.md`)).toString()
    } catch (e) {
      res.status(500).send(e.message)
    }

    return {
      state: {
        Page: md`${file}`
      }
    }
  } else {
    res.status(404)
  }
}
