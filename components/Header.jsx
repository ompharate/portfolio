import React from "react";
import Styles from "./css/Header.module.css";
const Header = () => {
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.ul}>
        <li className={Styles.li}>
          <a className={Styles.a} href="/">OmPharate</a>
        </li>
        <div className={Styles.leftHeader}>
          <li className={Styles.li}>
            <a  className={Styles.a} href="/about">Project</a>
          </li>
          <li className={Styles.li}>
            <a  className={Styles.a} href="/contact">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
