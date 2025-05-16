import React from 'react'
import { educationItems, experienceItems } from '../../assets/data'
import './Education.scss'

export default function Education() {

  return (
	<section className = "education" id = 'education'>
		<div className = "container">
			<div className = "row">
				<div className = "column-xlg-6 column-lg-12">
					<h2 className = "heading">Education</h2>
					<div className = "row education--row1">
						{
							educationItems.map((item, i) => (
								<div 
									className = "column-xlg-6 column-lg-4 column-md-6 column-sm-12" 
									key = {i}
								>
									<div className = "education__card" >
										<h3 className = "education__card__title">
											{item.title}
										</h3>
										<div className = "education__card__block">
											<span className = "education__card__block__name education__card__block__name--house">
												<i className = "bi bi-house-fill"></i>
											</span>
											<span className = "education__card__block__value">
												{item.name}
											</span>
										</div>
										<div className = "education__card__block">
											<span className = "education__card__block__name education__card__block__name--calendar">
												<i className = "bi bi-calendar-fill"></i>
											</span>
											<span className = "education__card__block__value">
												{item.period}
											</span>
										</div>
									</div>
								</div>
								))
						}
					</div>
				</div>
				<div className = "column-xlg-6 column-lg-12">
					<h2 className = "heading">Experience</h2>
					<div className = "row education--row2">
						{
							experienceItems.map((item, i) => (
								<div 
									className = "column-xlg-6 column-lg-4 column-md-6 column-sm-12" 
									key = {i}
								>
									<div className = "education__card" >
										<h3 className = "education__card__title">
											{item.title}
										</h3>
										<div className = "education__card__block">
											<span className = "education__card__block__name education__card__block__name--house">
												<i className = "bi bi-house-fill"></i>
											</span>
											<span className = "education__card__block__value">
												{item.name}
											</span>
										</div>
										<div className = "education__card__block">
											<span className = "education__card__block__name education__card__block__name--calendar">
												<i className = "bi bi-calendar-fill"></i>
											</span>
											<span className = "education__card__block__value">
												{item.period}
											</span>
										</div>
									</div>
								</div>
								))
						}
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}
