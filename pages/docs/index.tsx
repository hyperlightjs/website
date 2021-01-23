import { jsx } from '@hyperlight/jsx'
import { Nav } from '../../components/Nav'
import '../../styles/main.css'
import '../../styles/docs.css'

export default ({ Page }) => {
  return {
    ...Page,
    children: [<Nav />, <main>{...Page.children}</main>]
  }
}

export const getServerSideState = async () => {
  const { Module } = await import('module')

  const require = Module.createRequire(import.meta.url)

  const { hypermdx } = await require('hypermdx')
  const { readFileSync } = require('fs')

  const md = hypermdx()

  const { url } = import.meta

  const root = url.slice(url.indexOf('///') + 2, url.indexOf('/.cache'))

  const file = readFileSync(`${root}/docs/getting-started.md`).toString()

  return {
    state: {
      Page: md`${file}`
    }
  }
}
