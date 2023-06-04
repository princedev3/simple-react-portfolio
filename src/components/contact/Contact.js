import React from 'react'
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import "./Contact.css"
//{}[]
const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>marvinprince232@gmail.com</h5>
               <a href='mailto:marvinprince232@gmail.com' target='_blank'>Send a Message</a>

            </article>
            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>marvinprince232@gmail.com</h5>
               <a href='https://facebook.com' target='_blank'>Send a Message</a>

            </article>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+358453157776</h5>
               <a href='https://api.whatsapp.com/send?phone=+358453157776' target='_blank'>Send a Message</a>
            </article>
          </div>
          <form action='https://getform.io/f/4da00901-2709-47ae-806b-7e4c662d960f' method='POST'>
            <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
            <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact