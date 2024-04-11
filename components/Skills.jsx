import React from 'react'
import Styles from "./css/SkillBox.module.css";
const Skills = () => {
  return (
    <div  className={Styles.div}>
        <div>
            <h2 style={{color:"#007aff"}}>Core Competencies</h2>
        </div>
        <div className={Styles.techStack}>
            <img className={Styles.tech} src='/icons/nodejs.png'/>
            <img className={Styles.tech} src='/icons/expressjs.png'/>
            <img className={Styles.tech} src='/icons/reactjs.png'/>
            <img className={Styles.tech} src='/icons/mongodb.png'/>
            <img className={Styles.tech} src='/icons/rn.png'/>
            <img className={Styles.tech} src='/icons/typescript.png'/>
            <img className={Styles.tech} src='/icons/firebase.png'/>
            <img className={Styles.tech} src='/icons/docker.png'/>
            <img className={Styles.tech} src='/icons/java.png'/>
            <img className={Styles.tech} src='/icons/cpp.png'/>
            <img className={Styles.tech} src='/icons/tailwindcss.png'/>
        </div>
    </div>
  )
}

export default Skills