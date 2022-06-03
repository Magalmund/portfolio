import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Experience2 from "./components/experience2/Experience2"
import Portfolio2 from "./components/portfolio2/Portfolio2"

const App = () => {
	return (
		<div>
			<Header/>
			<Nav/>
			<About/>
			<Experience/>
			<Experience2/>
			<Services/>
			<Portfolio/>
			<Portfolio2/>
			<Testimonials/>
			<Contact/>
			<Footer/>
		</div>
	)
}

export default App