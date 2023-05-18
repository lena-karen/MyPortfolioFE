import React, {useState} from 'react'
import { useEffect } from 'react'
import './Header.scss'

export default function Header({isModalOpened, setIsModalOpened}) {
	const [textName, setTextName] = useState('')

	const myName = 'Olena Sherman'
	useEffect(() => {
		const timeout = setTimeout(() => {
			setTextName(myName.slice(0, textName.length + 1))
		}, 200)
		return () => clearTimeout(timeout)
	}, [textName])

  return (
	<header className = 'header'>
		<div className="container">
			<div className="row">
				<div className="column-xlg-6 column-lg-6 column-md-12">
					<div className="header__data">
						<div className="header__data__content">
							<h5 className="header__data__content__top">My name is</h5>
							{
								textName 
								? <h1 className="header__data__content__heading">{textName}</h1>
								: <h1 className="header__data__content__heading">{myName}</h1>
							}

							<h4 className="header__data__content__bottom">Frontend Developer</h4>
							<div className="header__data__content__links">
								<a 
									href = "https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFidJAUJQc&#x2F;view?utm_content=DAFidJAUJQc&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" 
									//href = 'Elena(Olena)Sherman.pdf'
									target = '_blank' 
									className="btn btn-default"
									download
								>Download my CV</a>
								<button 
									className="btn btn-dark"
									onClick = {() => setIsModalOpened(true)}
								>Hire me</button>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</header>
  )
}
