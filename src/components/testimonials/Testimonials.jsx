import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
	return (
		<section id="testimonials">
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper className="container testimonials_container"
			// install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
			>
				<SwiperSlide className="testimonial">
					<div className="client_avatar">
						<img src={avatar1} alt="avatar1" />
					</div>
					<h5 className='client_name'>Ernest Achiever</h5>
					<small className="client_review">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit repellendus dolorum esse delectus quisquam reprehenderit. Natus neque esse, aliquam aliquid ea reiciendis, sapiente voluptatem blanditiis possimus ut illum sequi perferendis.
					</small>
				</SwiperSlide>
				<SwiperSlide className="testimonial">
					<div className="client_avatar">
						<img src={avatar2} alt="avatar2" />
					</div>
					<h5 className='client_name'>Ernest Achiever</h5>
					<small className="client_review">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit repellendus dolorum esse delectus quisquam reprehenderit. Natus neque esse, aliquam aliquid ea reiciendis, sapiente voluptatem blanditiis possimus ut illum sequi perferendis.
					</small>
				</SwiperSlide>
				<SwiperSlide className="testimonial">
					<div className="client_avatar">
						<img src={avatar3} alt="avatar3" />
					</div>
					<h5 className='client_name'>Ernest Achiever</h5>
					<small className="client_review">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit repellendus dolorum esse delectus quisquam reprehenderit. Natus neque esse, aliquam aliquid ea reiciendis, sapiente voluptatem blanditiis possimus ut illum sequi perferendis.
					</small>
				</SwiperSlide>
				<SwiperSlide className="testimonial">
					<div className="client_avatar">
						<img src={avatar4} alt="avatar4" />
					</div>
					<h5 className='client_name'>Ernest Achiever</h5>
					<small className="client_review">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit repellendus dolorum esse delectus quisquam reprehenderit. Natus neque esse, aliquam aliquid ea reiciendis, sapiente voluptatem blanditiis possimus ut illum sequi perferendis.
					</small>
				</SwiperSlide>
			</Swiper>
		</section>
	)
}

export default Testimonials