import React from 'react'
import './Modal.scss'
export default function Modal({isModalOpened, setIsModalOpened}) {

  return (
	<section className = {['modal', isModalOpened ? 'isOpened' : ''].join(' ')}>
		<div className = "modal__wrapper">
			<i 
				className = "bi bi-x modal__wrapper__close"
				onClick = {() => setIsModalOpened(false)}
			></i>
			<div className = "modal__wrapper__image">
				<img src = "myPhoto1.jpg" alt = "my photo" className = 'modal__wrapper__image__img'/>
			</div>
			<div className = "modal__wrapper__content">
				<h1 className = "heading">Why should you hire me?</h1>
				<p className = "modal__wrapper__content__p">
					Result- and detail- oriented frontend developer, 
					I'm eager to implement my knowledge to create helpful 
					userfriendly interfaces for you.
				</p>
				<div className = "modal__wrapper__content__block">
					<span className = "modal__wrapper__content__block__name">Email: </span>
					<a href = 'mailto:sherman.olena@gmail.com' className="modal__wrapper__content__block__value">sherman.olena@gmail.com</a>
				</div>
				<div className = "modal__wrapper__content__block">
					<span className = "modal__wrapper__content__block__name">Mobile: </span>
					<a href = 'tel:+491747333383' className="modal__wrapper__content__block__value">+49 174 733 33 83</a>
				</div>
			</div>
		</div>
	</section>
  )
}
