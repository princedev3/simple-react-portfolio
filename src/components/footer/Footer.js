import React from 'react'
import {FaFacebook,FaTwitter} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>PRINCE</a>


        <ul className='permalinks'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experince'>Experince</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#testimonials'>Testimonial</a></li>
            <li><a href='#content'>Content</a></li>
        </ul>

        <div className='footer__socials'>
            <a href='https://facebook.com'><FaFacebook/></a>
            <a href='https://instagram.com'><FiInstagram/></a>
            <a href='https://twitter.com'> <FaTwitter/></a>
        </div>

        <div className='footer__copyright'>
            <small >&copy; PRINCE HECTOR. </small>
        </div>
    </footer>
  )
}
//{}[]
export default Footer