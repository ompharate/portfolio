import React from 'react'
import MainBox from '../components/MainBox'
import Skills from '../components/Skills'
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'

const Home = () => {
  return (
    <div>
      <MainBox/>
      <Skills/>
      <h1 style={{ color: "#007aff", padding: 30 }}>Projects</h1>
      <Project2/>
      <Project1/>
    </div>
  )
}

export default Home