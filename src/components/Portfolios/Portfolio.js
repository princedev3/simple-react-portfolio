import React from 'react'
import "./portfolio.css"
import  {Data}  from '../data/Data'

const Portfolio = () => {
  return (
    <section  id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
          {Data.map(({id,image,title,link})=>(
                      <article className='porfolio__item' key={id}>
                      <div className='porfolio__item-image'>
                                  <img src={image} alt="image"/>
                                </div>
                                <h3>{title}</h3>
                                <div className='porfolio__item-cta'>
                                   <a href={link} className='btn' target='_blank'>Github</a>
                                   </div>
                              </article>
          ) 
          )}
        
        
      </div>
    </section >
  )
}
//{}[]

export default Portfolio