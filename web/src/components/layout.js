import React from "react";
import Header from "./header";

import "../styles/layout.css";
import * as styles from "./layout.module.css";

import favicon from "../images/icon.png";
import Helmet from "react-helmet";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />

    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built by{" "}
          <a href="https://www.sanity.io">Mosia Noor</a>{" "}
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
