import React from 'react'
import './Menu.css'
import { FcHome,FcAbout,FcContacts,FcSupport,FcApproval,FcKindle} from "react-icons/fc";
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
function Menu(props) {
  return (
    <>
     <Zoom>
     { props.toggle && <div className="navbar-profile-pic">
   
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0p5B4YD_6JNRc6HMKlF8fexHCI0M5gS-cJS1xsOaFiw&s" alt="Profile pic" />
</div>}
     </Zoom>
  
    <div className="nav_items">
    <div className="nav_item">
        <div className="nav-link">
          <Link to='home' spy={true} smooth={true} offset={50} duration={500}><FcHome title='Home'/> Home</Link>
           </div>
      </div>  
      <div className="nav_item">
        <div className="nav-link">
        <Link to='about'spy={true} smooth={true} offset={50} duration={500} ><FcAbout title='About'></FcAbout>About</Link>
        </div>
      </div>
      <div className="nav_item">
        <div className="nav-link">
        <Link to='education'spy={true} smooth={true} offset={50} duration={500} ><FcKindle title='Education'></FcKindle>Education</Link>
          </div>
      </div>
      <div className="nav_item">
        <div className="nav-link">
        <Link to='skills'spy={true} smooth={true} offset={50} duration={500} ><FcSupport title='Technology'></FcSupport>Skills</Link>
          </div>
      </div>
      
     
      <div className="nav_item">
        <div className="nav-link">
        <Link to='project'spy={true} smooth={true} offset={50} duration={500} ><FcApproval title='Project'></FcApproval>Projects</Link>
          </div>
      </div>
      <div className="nav_item">
        <div className="nav-link">
        <Link to='contact' spy={true} smooth={true} offset={50} duration={500}><FcContacts title='Contact'></FcContacts> Contact</Link>
          </div>
      </div>

    </div>
    </>
  )
}

export default Menu
