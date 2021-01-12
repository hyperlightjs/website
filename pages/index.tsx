import { jsx } from '@hyperlight/jsx'
import { Nav } from '../components/Nav'
import '../styles/main.css'

const Feature = (
  props: {
    logo: string
    title: string
  },
  children
) => (
  <figure>
    <div>
      <img src={`/${props.logo}.svg`} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
    {...children}
  </figure>
)

export default () => (
  <main>
    <Nav />
    <header>
      <div>
        <img src="/logo.svg" id="logo" />

        <div>
          <h1>Hyperlight</h1>
          <span>
            Next-gen <strong>Hyperapp</strong> framework.
          </span>
        </div>
      </div>
      <div>
        <a id="get_started" href="/get_started">
          Get Started
        </a>
        <a href="/docs">Docs</a>
      </div>
    </header>
    <h2 id="why_hl">Why Hyperlight?</h2>
    <div id="features_grid">
      <Feature logo="flexible" title="Flexible.">
        Exports pages with server functions (SSR) or statically (SSG).
      </Feature>
      <Feature logo="light" title="Fast.">
        Uses esbuild for bundling and Hyperapp (1KB) as view layer.
      </Feature>
      <Feature logo="next-gen" title="Modern.">
        ESM everywhere, including server code. Targeting ES2019 for minimal output.
      </Feature>
      <Feature logo="dev" title="Developer-friendly">
        Dev server with persisting state, JSX support and types out of the box.
      </Feature>
    </div>
    <div id="try">
      <a href="https://cdsbx.io" target="_blank" rel="noopener norefferer">
        Try Hyperlight online {'->'}
      </a>
    </div>
  </main>
)
