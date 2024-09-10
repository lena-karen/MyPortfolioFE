import React, {useState} from 'react'
import './Nav.scss'
export default function Nav() {

	const [isActive, setIsActive] = useState(false)


	const select = (e) => {
		const links = document.querySelectorAll('.nav__wrapper__ul__li__a')
		for (let i = 0; i < links.length; i++) {
			links[i].classList.remove("selected");
			}
		
		 e.target.classList.add('selected')
	}

  return (
	<nav className = 'nav'>
		<div className = 'nav__wrapper container'>
			<div className = 'nav__wrapper__logo' onClick = {() => setIsActive(false)}>
				<a href = "#" className = 'nav__wrapper__logo__brand'>Olena Sherman</a>
			</div>
			<ul 
				className = {
					['nav__wrapper__ul', 
					isActive 
					? 'nav__wrapper__ul__isActive' 
					: ''].join(' ')
				}
				onClick = {() => setIsActive(false)}
			>
				<li className = 'nav__wrapper__ul__li' >
					<a href = "#" className="nav__wrapper__ul__li__a selected" onClick={(e) => select(e)}>Home</a>
				</li>
				<li className = 'nav__wrapper__ul__li'>
					<a href = "#about" className="nav__wrapper__ul__li__a" onClick={(e) => select(e)}>About me</a>
				</li>
				<li className = 'nav__wrapper__ul__li'>
					<a href = "#education" className="nav__wrapper__ul__li__a" onClick={(e) => select(e)}>Experience</a>
				</li>
				<li className = 'nav__wrapper__ul__li'>
					<a href = "#projects" className="nav__wrapper__ul__li__a" onClick={(e) => select(e)}>My projects</a>
				</li>
				<li className = 'nav__wrapper__ul__li'>
					<a href = "#skills" className="nav__wrapper__ul__li__a" onClick={(e) => select(e)}>My skills</a>
				</li>
				<li className = 'nav__wrapper__ul__li'>
					<a href = "#contacts" className="nav__wrapper__ul__li__a" onClick={(e) => select(e)}>Contacts</a>
				</li>
			</ul>
			<div className = 'nav__wrapper__toggle' onClick = {() => setIsActive(!isActive)}>
				<i className = "bi bi-justify-right"></i>
			</div>
		</div>
	</nav>
  )
}
