import React from 'react'
import { skills } from '../../assets/data'
import './Skills.scss'

export default function Skills() {

  return (
	<section className = "skills" id = 'skills'>
		<div className = "container">
			<div className = "row items_center">
				<div className = "column-xlg-6 column-lg-6 column-sm-12">
					<div className = "skills__content">
						<h2 className = "skills__content__heading">
							I have following skills in development
						</h2>
					</div>
				</div>
				
						<div className = "column-xlg-6 column-lg-6 column-sm-12">
						<div className="heading">My skills</div>
						{
							skills.map(item => (
							<div className = "skills__block" key = {item.id}>
								<span className = "skills__block__exp">{item.exp}</span>
								<span className = "skills__block__list">{item.name}</span>
							</div>
							))
						}
						</div>
				
				


			</div>
		</div>
	</section>
  )
}
