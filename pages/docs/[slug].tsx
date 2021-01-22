import { jsx } from '@hyperlight/jsx'

export default ({ Page }) => Page

export const getServerSideState = async () => {
  const { Module } = await import('module')

  const require = Module.createRequire(import.meta.url)

  const { hypermdx } = await require('hypermdx')
  const { readFileSync } = require('fs')

  const md = hypermdx()

  const { url } = import.meta

  const root = url.slice(url.indexOf('///') + 2, url.indexOf('/.cache'))

  const file = readFileSync(`${root}/docs/Home.md`).toString()

  return {
    state: {
      Page: md`${file}`
    }
  }
}
