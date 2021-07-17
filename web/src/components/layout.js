import React from "react";
import Header from "./header";

import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    {/* <div className={styles.Banner}>
      <img
        src="https://resources.premierleague.com/photos/2021/05/26/6a03872c-3fc6-4524-8f48-7eb2f72c6101/GettyImages-1292265660.jpg?width=1350&height=759"
        alt="banner"
      />
    </div> */}
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
