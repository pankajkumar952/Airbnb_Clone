import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__cols">
          <div>
            <h3>Support</h3>
            <ul>
              <li>Help Centre</li>
              <li>AirCover</li>
              <li>Cancellation options</li>
            </ul>
          </div>
          <div>
            <h3>Hosting</h3>
            <ul>
              <li>Host your home</li>
              <li>Responsible hosting</li>
              <li>Explore hosting resources</li>
            </ul>
          </div>
          <div>
            <h3>Stayfolio</h3>
            <ul>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Investors</li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© 2026 Stayfolio, Inc. · Practice project — not affiliated with Airbnb, Inc.</p>
          <p className="site-footer__watermark">
            Designed &amp; built by <strong>Er. Pankaj Kumar</strong> — UI fidelity case study
          </p>
        </div>
      </div>
    </footer>
  );
}
