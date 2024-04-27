import React from "react";
import Styles from "./css/Header.module.css";

const Header = () => {
  const scrollToSection = () => {
    
    
    const section = document.getElementById('projects');
   

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }else{
      window.location.href = '/';
    }
  };

  return (
    <nav className={Styles.nav}>
      <ul className={Styles.ul}>
        <li className={Styles.li}>
          <a className={Styles.a} href="/">
            OmPharate
          </a>
        </li>
        <div className={Styles.leftHeader}>
          <li className={Styles.li}>
            <a onClick={scrollToSection} style={{cursor:"pointer"}} className={Styles.a}>
              Project
            </a>
          </li>
          <li className={Styles.li}>
            <a className={Styles.a} href="/contact">
              Contact
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Header;
