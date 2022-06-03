import React, {useState} from 'react'
import './experience2.css'
import {BiCodeCurly} from "react-icons/bi"
import {FaAngleDown} from "react-icons/fa"
import {HiColorSwatch} from "react-icons/hi"


function Experience2() {

// 	const skillsContent = document.getElementsByClassName('skills_content'),
// 	skillsHeader = document.querySelectorAll('.skills_header')

// 	function toggleSkills() {
// 		let itemClass = this.parentNode.className

// 		for(let i = 0; i < skillsContent.length; i++){
// 			skillsContent[i].className = 'skills_content skills_close'
// 		}
// 		if(itemClass === 'skills_content skills_close'){
// 			this.parentNode.className = 'skills_content skills_open'
// 		}
// 	}
// 	skillsHeader.forEach((el) => {
// 		el.addEventListener('click', toggleSkills)
// 	})

const [state, setState] = useState(false);
const [designState, setDesignState] = useState(false);

const toggle=()=>{
	setState(!state);
}

const designToggle=()=>{
	setDesignState(!designState);
}

	return (
		<section id="experience-2" className='skills section'>
			<h5>My technical level</h5>
			<h2>Skills</h2>

			<div className="skills_container container grid">

				<div onClick={toggle} className={`skills_content ${state ? "skills_close" : "skills_open"}`}>
						<div className="skills_header">
							<BiCodeCurly className='skills_icon'/>
							<div>
								<h1 className="skills_titles">Frontend developer</h1>
								<span className="skills_subtitle">more than 4 years</span>
							</div>
							<FaAngleDown className='skills_arrow'/>
						</div>
						<div className="skills_list grid">

							<div className="skills_data">
								<div className="skills_titles">
									<h3 className="skills_name">HTML</h3>
									<span className="skills_number">90%</span>
								</div>
								<div className="skills_bar">
									<span className="skills_percentage skills_html"></span>
								</div>
							</div>

							<div className="skills_data">
								<div className="skills_titles">
									<h3 className="skills_name">CSS</h3>
									<span className="skills_number">80%</span>
								</div>
								<div className="skills_bar">
									<span className="skills_percentage skills_css"></span>
								</div>
							</div>

							<div className="skills_data">
								<div className="skills_titles">
									<h3 className="skills_name">JavaScript</h3>
									<span className="skills_number">60%</span>
								</div>
								<div className="skills_bar">
									<span className="skills_percentage skills_js"></span>
								</div>
							</div>

							<div className="skills_data">
								<div className="skills_titles">
									<h3 className="skills_name">React</h3>
									<span className="skills_number">85%</span>
								</div>
								<div className="skills_bar">
									<span className="skills_percentage skills_react"></span>
								</div>
							</div>

						</div>
				</div>
				<div onClick={designToggle} className={`skills_content ${designState ? "skills_open" : "skills_close"}`}>
						<div className="skills_header">
							<HiColorSwatch className='skills_icon'/>
							<div>
								<h1 className="skills_titles">Designer</h1>
								<span className="skills_subtitle">More than 3 years</span>
							</div>
							<FaAngleDown className='skills_arrow'/>
						</div>
						<div className="skills_list grid">

							<div className="skills_data">
								<div className="skills_titles">
									<h3 className="skills_name">Figma</h3>
									<span className="skills_number">90%</span>
								</div>
								<div className="skills_bar">
									<span className="skills_percentage skills_figma"></span>
								</div>
							</div>

							<div className="skills_data">
								<div className="skills_titles">
									<h3 className="skills_name">Sketch</h3>
									<span className="skills_number">85%</span>
								</div>
								<div className="skills_bar">
									<span className="skills_percentage skills_sketch"></span>
								</div>
							</div>

							<div className="skills_data">
								<div className="skills_titles">
									<h3 className="skills_name">Photoshop</h3>
									<span className="skills_number">90%</span>
								</div>
								<div className="skills_bar">
									<span className="skills_percentage skills_photoshop"></span>
								</div>
							</div>

						</div>
				</div>

			</div>
		</section>
	)
}

export default Experience2