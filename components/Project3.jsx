import React from "react";
import Styles from "./css/Project.module.css";

const Project3 = () => {
  return (
    <div
      id="projects"
      style={{ backgroundColor: "#00224D" }}
      className={Styles.div}
    >
      <div className={Styles.project1}>
        <div className={Styles.row1}>
          <img className={Styles.Mimg} src="/projects/project3/1.png" />
          <img className={Styles.Mimg} src="/projects/project3/2.png" />
          <div className={Styles.action}>
            <div>
              <h1 style={{color:"white"}}>Instagram Clone</h1>
            </div>
            <div className={Styles.btnGroup}>
           
              <button
                onClick={() =>
                  window.open(
                    "https://expo.dev//accounts/ompharate/projects/studentManagment/builds/197f227e-427f-407d-b197-392a9b8ae26f",
                    "_blank"
                  )
                }
                className={Styles.button}
              >
                Download
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/ompharate/dsa-project",
                    "_blank"
                  )
                }
                className={Styles.button}
              >
                Github
              </button>
            </div>
          </div>
          <img className={Styles.Mimg} src="/projects/project3/3.png" />
          <img className={Styles.Mimg} src="/projects/project3/4.png" />
        </div>
      </div>
    </div>
  );
};

export default Project3;
