import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {BsTelegram} from "react-icons/bs"
import emailjs from 'emailjs-com'

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8neqqwc', 'template_797zpqk', form.current, 'Y8niJymjFSzqgFQTr')
      e.target.reset()
  };

	return (
		<section id="contact">
			<h5>Get in touch</h5>
			<h2>Contact me</h2>
			<div className="container contact_container">
				<div className="contact_options">
					<article className="contact_option">
						<MdOutlineEmail className='contact_option-icon'/>
						<h4>Email</h4>
						<h5>nikitaandrjeev@gmail.com</h5>
						<a href="mailto:nikitaandrjeev@gmail.com" target="_blank">Send a message</a>
					</article>
					<article className="contact_option">
						<BsTelegram className='contact_option-icon'/>
						<h4>Telegram</h4>
						<h5>+37254502056</h5>
						<a href="https://api.telegram.com/send?phone=+37254502056" target="_blank">Send a message</a>
					</article>

				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name='name' placeholder='Name' required/>
					<input type="email" name='email' placeholder='Your email' required />
					<textarea name="messege" placeholder="Messege" rows="7" required></textarea>
					<button type='submit' className='btn btn-primary'>Send</button>
				</form>
			</div>
		</section>
	)
}

export default Contact