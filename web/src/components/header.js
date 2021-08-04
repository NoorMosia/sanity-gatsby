import { Link } from "gatsby";
import React from "react";

import * as styles from "./header.module.css";

const Header = () => (
  <div className={styles.center}>
    <div className={styles.leftStrip}></div>
    <div className={styles.logoContainer}>
      <Link to="/">
        <img
          className={styles.imageLogo}
          src="https://res.cloudinary.com/ddqp6ml5t/image/upload/v1628120332/footy_logo_kgtn4t.png"
          alt="logo"
        />
      </Link>
    </div>
    <div className={styles.strip}></div>
  </div>
);

export default Header;
