import React, { useState } from 'react'
import "./Nav.css"
import { FaHome,FaUser,FaBuromobelexperte,FaServer,FaContao } from 'react-icons/fa'


const Nav = () => {

     const [activeNav,setActiveNav] = useState("#")
  return (
   <nav>
    <a href='#' className={activeNav==="#"?"active":""}><FaHome/></a>
    <a href='#about' onClick={()=>setActiveNav("#about")} className={activeNav ==="#about"?"active":""}><FaUser/></a>
    <a href='#experience' onClick={()=>setActiveNav("#experience")} className={activeNav ==="#experience"?"active":""}><FaBuromobelexperte/></a>
    <a href='#services' onClick={()=>setActiveNav("#services")} className={activeNav ==="#services"?"active":""}><FaServer/></a>
    <a href='#contact' onClick={()=>setActiveNav("#contact")} className={activeNav ==="#contact"?"active":""}><FaContao/></a>
   </nav>
  )
}
//{}[]
export default Nav