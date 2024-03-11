import React from 'react'
import './Home.css'

import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Resume 20BCS9648 (new).pdf'
function Home() {

  return (
   <>
   <div className="container-fluid home-container " id='home'>
    <div className='theme-btn'></div>
    <div className="container home-content">
      <h1>Hy😎 I'm </h1>
      <h2>
      <Typewriter
  options={{
    strings: ['Full stack Web Developer!!', 'Reactjs Developer!!','Software Engineer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h2>
      <div className="home-button">
        <button className='btn btn-hire bt'>Hire me!</button>
        <a className='btn btn-2 bt'href={Resume} download="Resume.pdf">Resume</a>
      </div>
    </div>
   </div>
   </>
  )
}

export default Home
