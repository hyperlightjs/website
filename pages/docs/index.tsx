import { jsx } from '@hyperlight/jsx'
import { readFileSync } from 'fs'
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
  const md = (await import('hypermdx').then((m) => m.hypermdx))()

  const { url } = import.meta

  const root = url.slice(url.indexOf('///') + 2, url.indexOf('/.cache'))

  const file = readFileSync(`${root}/docs/getting-started.md`).toString()

  return {
    state: {
      Page: md`${file}`
    }
  }
}
