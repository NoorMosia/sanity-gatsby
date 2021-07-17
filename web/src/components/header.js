import { Link } from "gatsby";
import React from "react";

import * as styles from "./header.module.css";

const Header = () => (
  <div className={styles.center}>
    <div className={styles.logoContainer}>
      <Link to="/">
        <img
          className={styles.imageLogo}
          src="https://pbs.twimg.com/profile_images/1413509493187563526/TQFn-RjL_400x400.jpg"
          alt="logo"
        />
      </Link>
    </div>
    <div className={styles.strip}></div>
  </div>
);

export default Header;
