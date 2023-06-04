import React, { useEffect, useState } from 'react'
import {AiOutlineArrowUp} from "react-icons/ai"


const ButtonToTop = () => {
    const [backtotop,setBacktotop]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >200){
                setBacktotop(true)
            }else{
                setBacktotop(false)
            }
        })
    },[])
    const scrollup =()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div  className={backtotop ?'backtotop':""}>
        {backtotop&& <button
        
         onClick={scrollup}><AiOutlineArrowUp/></button>}
    </div>
  )
}

export default ButtonToTop