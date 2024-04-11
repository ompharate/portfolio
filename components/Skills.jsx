import React from 'react'
import Styles from "./css/SkillBox.module.css";
const Skills = () => {
  return (
    <div  className={Styles.div}>
        <div>
            <h2 style={{color:"#007aff"}}>Core Competencies</h2>
        </div>
        <div className={Styles.techStack}>
            <img className={Styles.tech} src='/public/icons/nodejs.png'/>
            <img className={Styles.tech} src='/public/icons/expressjs.png'/>
            <img className={Styles.tech} src='/public/icons/reactjs.png'/>
            <img className={Styles.tech} src='/public/icons/mongodb.png'/>
            <img className={Styles.tech} src='/public/icons/rn.png'/>
            <img className={Styles.tech} src='/public/icons/typescript.png'/>
            <img className={Styles.tech} src='/public/icons/firebase.png'/>
            <img className={Styles.tech} src='/public/icons/docker.png'/>
            <img className={Styles.tech} src='/public/icons/java.png'/>
            <img className={Styles.tech} src='/public/icons/cpp.png'/>
            <img className={Styles.tech} src='/public/icons/tailwindcss.png'/>
        </div>
    </div>
  )
}

export default Skills