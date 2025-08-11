import React from 'react'
import {TiSocialInstagram,TiSocialGithub, TiSocialLinkedin} from "react-icons/ti";
import {MdEmail} from "react-icons/md";
import Style from './contactSection.module.css';


const ContactSection = () => {
  return (
    <div id="contact" className={Style.contactSection}>
      <div className={Style.contactContent}>
        <div className={Style.contactHeader}>
          <h3>Next steps?</h3>
          <h1>Still a Stranger ?</h1>
        </div>
        <div className={Style.contactBody}>
          <p>
            Feel free to drop me an email if you believe we'd make a great team and would like to collaborate. Let's make our work together not only productive but also enjoyable!
          </p>
        </div>
        
        <div className={Style.contactButton}>
          <button>Start a Conversation</button>
        </div>
      </div>
      
      <div className={Style.contactSocials}>
        <a 
          href="https://www.instagram.com/sarvjeet0805" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={Style.contactSocials_icons}
          aria-label="Instagram Profile"
        >
          <TiSocialInstagram/>
        </a>
        <a 
          href="https://github.com/Noobie0805" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={Style.contactSocials_icons}
          aria-label="GitHub Profile"
        >
          <TiSocialGithub/>
        </a>
        <a 
          href="https://www.linkedin.com/in/sarvjeet-kumar-505999262/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={Style.contactSocials_icons}
          aria-label="LinkedIn Profile"
        >
          <TiSocialLinkedin/>
        </a>
        <a 
          href="mailto:sarvjeet852003@gmail.com" 
          className={Style.contactSocials_icons}
          aria-label="Send Email"
        >
          <MdEmail/>
        </a>
      </div>
    </div>
  )
}

export default ContactSection