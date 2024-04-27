import React, { useState } from 'react'
import Styles from "./contact.module.css"
const Contact  = () => {

  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const onSubmit = () => {
    setEmail("");
    setMessage(""); 
  }

  return (
    <div className={Styles.main}>
      <div className={Styles.inputBox}>
        <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
        <input type="email" placeholder='Message'  onChange={(e)=>setMessage(e.target.value)} value={message} required/>
      </div>
      <button onClick={onSubmit}>Send</button>
    </div>
  )
}

export default Contact