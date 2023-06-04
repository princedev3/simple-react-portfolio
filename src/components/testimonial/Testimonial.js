import React from 'react'
import { Testimonials } from '../data/Data'
import "./testimonial.css"
import 'swiper/css';
import {  Pagination,Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';



const Testimonial = () => {
  return (
    <section id='testimonial'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className='container testimonials__container'
            modules={[ Pagination,Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
        {Testimonials.map(({id,image,title,link})=>(
                    <SwiperSlide className='testimonial' key={id}>
                    <div className='client__avatar'>
                        <img src={image}  alt="image"/>
                     </div>
                        <h5 className='client__name'>{title}</h5>
                        <small className='client__review'>{link}</small>
                   
                </SwiperSlide>
        ))}
                
        </Swiper>
    </section >
  )
}
//{}[]

export default Testimonial