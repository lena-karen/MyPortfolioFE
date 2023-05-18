import React, {useRef} from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

import './Form.scss'

export default function Form() {
	const {register, handleSubmit, formState: { errors }, reset} = useForm()
	const submit = (data) => {
		emailjs.sendForm('Contact_Service', 'template_id', formRef.current, publicKey)
		.then(function(response) {
		   console.log('SUCCESS!', response.status, response.text);
		}, function(error) {
		   console.log('FAILED...', error);
		});
		reset()
	}

	const formRef = useRef()
	const publicKey = 'KkS_f53yvbUBQgJgD'

	const namePlaceholder = errors.nameRegister ? errors.nameRegister?.message : 'Name...'
	const emailPlaceholder = errors.emailRegister ? errors.nameRegister?.message : 'Email...'
	const subjectPlaceholder = errors.subjectRegister ? errors.nameRegister?.message : 'Subject...'
	const messagePlaceholder = errors.messageRegister ? errors.nameRegister?.message : 'Message...'
	


	return (
	<form onSubmit = {handleSubmit(submit)} className = 'form' id = 'contactForm' ref = {formRef}>
		<h3 className="heading">Contact me</h3>
		<div className="row">
			<div className="column-xlg-6 column-lg-6 column-md-12">
				<input 
					type="text" 
					className = 'form__control' 
					placeholder = {namePlaceholder}
					{...register('nameRegister', {required: 'This field is required'})}
				/>

			</div>
			<div className="column-xlg-6 column-lg-6 column-md-12">
				<input 
					type="email" 
					className = 'form__control' 
					placeholder = {emailPlaceholder}
					{...register('emailRegister', {required: 'This field is required'})}
				/>
			</div>
			<div className="column-xlg-12 column-lg-12">
				<input 
					type="text" 
					className = 'form__control' 
					placeholder = {subjectPlaceholder}
					{...register('subjectRegister', {required: 'This field is required'})}
				/>
			</div>
			<div className="column-xlg-12 column-lg-12">
				<textarea 
					type="text" 
					className = 'form__control' 
					placeholder = {messagePlaceholder}
					{...register('messageRegister', {required: 'This field is required'})}
				/>
			</div>
			<div className="column-xlg-6 column-lg-6 column-md-12">
				<input 
					type="submit" 
					className = 'btn btn-dark' 
					value='Send email'
				/>
			</div>
		</div>
	</form>
  )
}
