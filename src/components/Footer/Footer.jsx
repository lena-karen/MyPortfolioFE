import React from 'react'
import Form from '../Form/Form'

import './Footer.scss'

export default function Footer() {

return (
	<section className = 'footer' id = 'contacts'>
		<div className = "container">
			<div className = "row items_center">
				<div className = "column-xlg-5 column-lg-5 column-md-12">
					<div className = "footer__image">
						<img src = "myPhoto1.jpg" alt = "footer img" />
						<label className = 'footer__image__label'>Open to work</label>
					</div>
					
				</div>
				<div className = "column-xlg-7 column-lg-7 column-md-12">
					<Form />
				</div>
				<p className="footer__copyright">
						Copyright &copy; 
						<span className = 'year'> {new Date().getFullYear()} </span>
						by
						<span className = 'footer__copyright--name'> Olena Sherman</span>
						, All rights reserved
					</p>
			</div>
		</div>
	</section>
  )
}
