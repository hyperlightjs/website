import { jsx } from '@hyperlight/jsx'
import '../styles/nav.css'

type link = { name: string; href: string }

const right: ({ icon: string } & link)[] = [
  { icon: 'gh', name: 'GitHub', href: 'https://github.com/hyperlightjs/hyperlight' },
  {
    icon: 'tg',
    name: 'Telegram',
    href: 'https://t.me/hyperlight'
  }
]

const center: link[] = [
  {
    href: '/docs',
    name: 'Docs'
  },
  {
    href: 'https://github.com/hyperlightjs/hyperlight/tree/master/examples',
    name: 'Examples'
  },
  {
    href: '/plugins',
    name: 'Plugins'
  }
]

export const Nav = () => (
  <nav class="nav">
    <a href="/">
      <img src="/logo.svg" alt="logo" />
    </a>
    <div class="center">
      {center.map(({ href, name }) => (
        <a href={href}>{name}</a>
      ))}
    </div>
    <div class="right">
      {right.map((item) => (
        <a href={item.href}>
          <img src={`/${item.icon}.svg`} alt={item.name} />
        </a>
      ))}
    </div>
  </nav>
)
