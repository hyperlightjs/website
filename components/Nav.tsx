import { jsx } from '@hyperlight/jsx'
import '../styles/nav.css'

const items: { icon: string; name: string }[] = [
  { icon: 'gh', name: 'GitHub' },
  {
    icon: 'tg',
    name: 'Telegram'
  }
]

export const Nav = () => (
  <nav class="nav">
    {items.map((item) => (
      <img src={`/${item.icon}.svg`} alt={item.name} />
    ))}
  </nav>
)
