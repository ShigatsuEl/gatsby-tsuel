import * as React from 'react';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/blog" style={{ color: `white` }}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
