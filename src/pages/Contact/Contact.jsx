import React from 'react'
import './Contact.css'
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div className="container contact" id='contact'>
      <div className="card cd">
        <div className="img">
        <img className="cardimg" src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?size=626&ext=jpg" alt="Contact us Image.."/>
        </div>
        <div className="card-body text">
            <h5 className="card-title">Contact us with <BsLinkedin color='blue' size={36} className='icons' ><a href="https://www.linkedin.com/in/yatin-rana-176717254/"></a></BsLinkedin> 
            <FaFacebookSquare color='blue' size={36} className='icons'> <a href="https://www.facebook.com/yatinrana.ranasaab/"></a></FaFacebookSquare> 
            <FaGithubSquare color='black' size={36} className='icons' > <a href="https://github.com/Yatin18/"></a></FaGithubSquare>
            </h5>
         
            <hr />

            <p className="card-text">
                <div className="mb">
                <input type="text" id='Name' placeholder='Enter Name ' />
                </div>

                <div className="mb">
                <input type="text" id='email' placeholder='Enter your Email '/>
                </div>

                <div className="mb">
                    
                    <textarea name="textarea" id="area" cols="70" rows="5"></textarea>
                </div>
                

            </p>
            <a href="#" className="btn btn-primary">Submit</a>
        </div>
        </div>
      </div>
    </>
  )
}

export default Contact
