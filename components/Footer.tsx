import { jsx } from '@hyperlight/jsx'
import '../styles/footer.css'

export const Footer = () => (
  <footer>
    <p>
      <a href="https://github.com/BRA1L0R/hyperlight-website">Website source</a>
      {' | '}
      <a href="https://github.com/hyperlightjs/hyperlight-website/blob/master/LICENSE">License</a>
    </p>
    <p>
      Built with Hyperlight & <a href="https://github.com/talentlessguy/hypermdx">HyperMDX</a>
    </p>
  </footer>
)
