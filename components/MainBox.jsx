import React from "react";
import Styles from "./css/MainBox.module.css";
const MainBox = () => {
  return (
    <div className={Styles.div}>
      <div className={Styles.left}>
        <div className={Styles.locationParent}>
        <img width={25} height={25} src="/icons/location-pin.png"></img>
          <p className={Styles.location}>Pune. India.</p>
        </div>
        <div>
          <h1 className={Styles.name}>Om Pharate.</h1>
        </div>
        <div>
          <h3 className={Styles.domain}>Full Stack Developer.</h3>
        </div>
        <div>
          <p className={Styles.socialLine}>Connect with me.</p>
          <div className={Styles.iconContainer}>
            <img className={Styles.icon} src="/icons/instagram.png" />
            <img className={Styles.icon} src="/icons/linkedin.png" />
            <img className={Styles.icon} src="/icons/github.png" />
            <img className={Styles.icon} src="/icons/leetcode.svg" />
            <img className={Styles.icon}  src="/icons/cn.png" />
          </div>
        </div>
      </div>
      <div className={Styles.right}>
        <img className={Styles.img} src="/Image.png" />
      </div>
    </div>
  );
};

export default MainBox;
