
export const educationItems = [
	{
		title: 'Engineer, software developer',
		name: "Odessa Mechnikov National University (Master's degree confirmed in Germany)",
		period: '2001 - 2007'
	},
	{
		title: 'Frontend developer',
		name: 'Geekbrains Institute',
		period: '2020 - 2022'
	},
	{
		title: 'Frontend developer',
		name: 'Tel-Ran Online Programming School',
		period: '2022 - 2023'
	},
	{
		title: 'React Native, React.js developer, Internship',
		name: 'Ridocu UG',
		period: '2023, April - September'
	},
]

export const experienceItems = [
	{
		title: 'Copywriter (English)',
		name: 'vip-quality-soft.com, software development company',
		period: '2007 - 2008'
	},
	{
		title: 'Frontend Developer, team lead',
		name: 'Hackathon by Starta Institute',
		period: '2023, May'
	},
	{
		title: 'React Native Developer, React.js Developer',
		name: 'Ridocu UG',
		period: `2023, April - 2024, March`
	},
	{
		title: 'React.js Developer, Internship',
		name: 'Siltacom',
		period: `2024, May`
	}
]

export const projects = [
	{
		title: 'My Portfolio',
		img: 'my-portfolio.png',
		tools: 'HTML, SASS, JavaScript, React, React-Hook-Form, emailjs',
		link: ['olenasherman.netlify.app'],
		github: 'https://github.com/lena-karen/TelRanFinalProject'
	},
	{
		title: 'Garden shop',
		img: 'garden-shop.png',
		tools: 'HTML, CSS, JavaScript, React, Redux, Thunk',
		link: ['https://gardenstore.onrender.com/'],
		github: 'https://github.com/lena-karen/TelRanFinalProject'
	},
	{
		title: 'OK Treatments',
		img: 'ok-treatments.png',
		tools: 'HTML, CSS, JavaScript, React, Redux, Thunk, React-Hook-Form, GitHub, Jira',
		link: ['https://healyourselfdeploy.vercel.app/'],
		github: 'https://github.com/tel-ran-de/Heal_yourself_front'
	},
	{
		title: 'Ridocu Mobile Application',
		img: 'ridocu-app.png',
		tools: 'JavaScript,TypeScript, React Native, Redux, Redux Saga, Axios, React-Hook-Form, GitLab, Jira',
		link: ['https://play.google.com/store/apps/details?id=com.ridocu', 'https://apps.apple.com/de/app/ridocu-document-translator/id6463800967?itsct=apps_box_badge&amp;itscg=30200'],
	},
	{
		title: 'Ridocu Website and marketing landing pages',
		img: 'ridocu-web.png',
		tools: 'JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, React-Hook-Form, GitLab, Jira',
		link: ['https://ridocu.com/en/landing', 'https://ridocu.com'],
	},
]

const jsStartYear = 2020
const tsStartYear = 2023
const reactStartYear = 2022

export const skills = [
	{
		id: 1,
		name: 'HTML, CSS, SASS',
		exp: `${(new Date(Date.now()).getFullYear() - jsStartYear)} years`
	},
	{
		id: 2,
		name: 'JavaScript',
		exp: `${(new Date(Date.now()).getFullYear() - jsStartYear)} years`
	},
	{
		id: 3,
		name: 'React.js / Redux / Thunk ',
		exp: `${(new Date(Date.now()).getFullYear() - reactStartYear)} years`
	},
	{
		id: 4,
		name: 'TypeScript',
		exp: `${(new Date(Date.now()).getFullYear() - tsStartYear)} years`
	},
	{
		id: 5,
		name: 'React Native /  Saga / Axios',
		exp: `${(new Date(Date.now()).getFullYear() - tsStartYear)} years`
	},
	{
		id: 6,
		name: 'Next.js, Tailwind CSS',
		exp: `${(new Date(Date.now()).getFullYear() - tsStartYear)} years`
	},
	{
		id: 7,
		name: 'GIT, GitHub, GitLab',
		exp: `${(new Date(Date.now()).getFullYear() - tsStartYear)} years`
	},
]

export const aboutMeText = "Hi, my name's Olena Sherman. I graduated from Ukrainian University with master degree as a Software developer. I continued studying frontend development in a programming school in Berlin. For a year I worked for Ridocu UG as React Native and React.js developer.  I am eager to implement and deep my knowledge in creating useful mobile applications and user-friendly interfaces."