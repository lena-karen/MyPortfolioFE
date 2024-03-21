import React from 'react'
import './About.scss'
import { aboutMeText } from '../../assets/data'

export default function About() {
  return (
	<section className = 'about' id = 'about'>
		<div className = "container">
			<div className = "row items_center">
				<div className="column-xlg-6 column-lg-6 column-sm-12">
					<div className = "about__image">
						<img src = "myPhoto2.jpg" alt = "large img" />
						<div className = "about__image__small">
							<img src = "myPhoto1.jpg" alt = "small img" />
						</div>
					</div>
				</div>
				<div className = "column-xlg-6 column-lg-6 column-sm-12">
					<h2 className = "heading">Who I am?</h2>
					<div className = "about__info">
						<p className = "about__info__message">
							{aboutMeText}
						</p>
						<div className = "about__info__block">
							<span className = "about__info__block__name">Name: </span>
							<span className = "about__info__block__value">Olena Sherman</span>
						</div>

						<div className = "about__info__block">
							<span className = "about__info__block__name">Date of birth: </span>
							<span className = "about__info__block__value">11 October 1983</span>
						</div>

						<div className = "about__info__block">
							<span className="about__info__block__name">Email: </span>
							<a href = 'mailto:sherman.olena@gmail.com' className = "lowercase about__info__block__value ">sherman.olena@gmail.com</a>
						</div>
						<div className = "about__info__socials">
							<a 
								href = "https://www.linkedin.com/in/olena-elena-sherman/" 
								className = "about__info__socials__a"
								target = '_blank'
							>
								<i className = "bi bi-linkedin"></i>
							</a>
							<a 
								href = "https://t.me/sherman_elena" 
								className = "about__info__socials__a"
								target = '_blank'
							>
								<i className = "bi bi-telegram"></i>
							</a>
							<a 
								href = "https://github.com/lena-karen" 
								className = "about__info__socials__a"
								target = '_blank'
							>
								<i className = "bi bi-github"></i>
							</a>
							<a 
								href = "https://wa.me/491747333383" 
								className = "about__info__socials__a"
								target = '_blank'
							>
								<i className = "bi bi-whatsapp"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}
