import './Footer/Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <p className="footer__text">© 2026 DXDXFFG. All rights reserved.</p>

        <ul className="footer__social" aria-label="Social links">
          <li>
            <a href="https://github.com/dxdxffgg99" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.657 0 8.166c0 3.612 2.292 6.678 5.47 7.758.4.073.546-.176.546-.392 0-.193-.007-.704-.01-1.381-2.226.497-2.695-1.09-2.695-1.09-.364-.945-.89-1.197-.89-1.197-.727-.504.055-.494.055-.494.804.058 1.227.843 1.227.843.715 1.25 1.876.889 2.334.68.073-.53.279-.89.508-1.095-1.777-.206-3.644-.917-3.644-4.079 0-.902.313-1.639.825-2.217-.083-.206-.357-1.035.078-2.157 0 0 .672-.218 2.2.84A7.36 7.36 0 0 1 8 3.59c.68.003 1.364.093 2.002.273 1.525-1.058 2.196-.84 2.196-.84.437 1.122.163 1.95.08 2.157.513.578.824 1.315.824 2.217 0 3.172-1.87 3.869-3.652 4.072.287.256.543.762.543 1.537 0 1.111-.01 2.005-.01 2.279 0 .218.144.47.55.39C13.71 14.84 16 11.777 16 8.166 16 3.657 12.42 0 8 0z" fill="currentColor"/>
              </svg>
            </a>
          </li>

          <li>
            <a href="mailto:hello@dxdxffg.dev" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 6.75A2.75 2.75 0 016.75 4h10.5A2.75 2.75 0 0120 6.75v10.5A2.75 2.75 0 0117.25 20H6.75A2.75 2.75 0 014 17.25V6.75z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 6l-9 7L3 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </li>
        </ul>

        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#Privacy">Privacy</a>
          <a href="#Terms">Terms</a>
        </nav>
      </div>
    </footer>
  )
}