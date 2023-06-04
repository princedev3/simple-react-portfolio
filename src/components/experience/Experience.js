import React from 'react'
import {BsPatchCheckFill} from "react-icons/bs"
import "./experience.css"

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className='container experience__container'>
            <div className='experience__frontend'>
                <h3>Frontend Development</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                            <BsPatchCheckFill className="experience_details_icon"/>
                            <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                    </article>
                    <article className='experience__details'>
                            <BsPatchCheckFill className="experience_details_icon"/>
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>INTERMEDIATE</small>
                            </div>
                    </article>
                    <article className='experience__details'>
                            <BsPatchCheckFill className="experience_details_icon"/>
                            <div>
                            <h4>JAVASCRIPT</h4>
                            <small className='text-light'>INTERMEDIATE</small>
                            </div>
                    </article>
                    <article className='experience__details'>
                            <BsPatchCheckFill className="experience_details_icon"/>
                            <div>

                            <h4>REACT</h4>
                            <small className='text-light'>INTERMEDIATE</small>
                            </div>
                    </article>
                    <article className='experience__details'>
                            <BsPatchCheckFill className="experience_details_icon"/>
                            <div>

                            <h4>TAILWING</h4>
                            <small className='text-light'>INTERMEDIATE</small>
                            </div>
                    </article>
                </div>

            </div>

            
            <div className='experience__backend'>
            <div className='experience__frontend'>
                <h3>Backend Development</h3>
                <div className='experience__content'>
                    <article className='experience__details'>
                            <BsPatchCheckFill className="experience_details_icon"/>
                            <div>
                            <h4>NODE JS</h4>
                            <small className='text-light'>Beginner</small>
                            </div>
                    </article>
                    <article className='experience__details'>
                            <BsPatchCheckFill className="experience_details_icon"/>
                            <div>

                            <h4>EXPRESS</h4>
                            <small className='text-light'>Beginner</small>
                            </div>
                    </article>
                    <article className='experience__details'>
                            <BsPatchCheckFill className="experience_details_icon"/>
                            <div>
                            <h4>MONGO-DB</h4>
                            <small className='text-light'>Beginner</small>
                            </div>
                    </article>
                    
                </div>

            </div>
            </div>
        </div>
    </section >
  )
}
//{}[]
export default Experience