import React from 'react'
import { projects } from '../../assets/data'
import './Projects.scss'

export default function Projects() {

  return (
	<section className = 'projects' id = 'projects'>
		<div className = "container">
			<h2 className = "heading">Projects where I participated</h2>
			<div className = "row">
				{
					projects.map(item => (
						<div className = "column-xlg-3 column-lg-3 column-md-4 column-sm-6 column-xsm-12" key = {item.title}>
							<div className = "projects__card">
								<div className = "projects__card__img">
									<img src = {item.img} alt = "project img" />
								</div>
								<div className = "projects__card__layer">
									<div className = "projects__card__layer__content">
										<h3 className = 'projects__card__layer__content__title'>
											{item.title}
										</h3>
										<span className = "projects__card__layer__content__tools">
											{item.tools}
										</span>
									</div>
									<div className="projects__card__layer__link">
										<a href = {item.link}>{item.link}</a>
										{
											item.github && 	<a href = {item.github}>
											<i className="bi bi-github"></i>
										</a>
										}
									</div>
								</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	</section>
  )
}
