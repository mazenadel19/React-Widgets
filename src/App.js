import React, { Suspense, useState } from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
import Navbar from './components/Navbar/Navbar'
const Dropdown = React.lazy(() => import('./components/Dropdown/Dropdown'))
const Search = React.lazy(() => import('./components/Search/Search'))
const Translate = React.lazy(() => import('./components/Translate/Translate'))

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework',
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS library among engineers',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components',
	},
]

function App() {
	const [active, setActive] = useState('Accordion')
	return (
		<div className='ui container App'>
			<Navbar active={active} setActive={setActive} />
			<Suspense fallback={<div>Loading...</div>}>
				{active === 'Accordion' && <Accordion items={items} />}
				{active === 'Wikipedia Search' && <Search />}
				{active === 'Dropdown' && <Dropdown />}
				{active === 'Translate' && <Translate />}
			</Suspense>
		</div>
	)
}

export default App
