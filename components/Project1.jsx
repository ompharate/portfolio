import React from "react";
import Styles from "./css/Project.module.css";

const Project1 = () => {
  return (
    <div id="projects" style={{backgroundColor:"#C9D7DD"}} className={Styles.div}>

      <div className={Styles.project1}>
        <div className={Styles.row1}>
          <img className={Styles.img} src="/projects/project1/l1.png" />
          <img className={Styles.img} src="/projects/project1/l2.png" />
          <img className={Styles.img} src="/projects/project1/l3.png" />
        </div>
        <div className={Styles.row2}>
          <img className={Styles.Mimg} src="/projects/project1/1.png" />
          <img className={Styles.Mimg} src="/projects/project1/2.png" />
          <div className={Styles.action}>
            <div>
              <h1>Student Management</h1>
            </div>
            <div className={Styles.btnGroup}>
              <button
                onClick={() =>
                  window.open("https://opmanagment.vercel.app/", "_blank")
                }
                className={Styles.button}
              >
                <svg
                  viewBox="0 0 16 16"
                  className="bi bi-lightning-charge-fill"
                  fill="currentColor"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
                </svg>
                Live
              </button>
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
          <img className={Styles.Mimg} src="/projects/project1/4.png" />
          <img className={Styles.Mimg} src="/projects/project1/3.png" />
        </div>
      </div>
    </div>
  );
};

export default Project1;
