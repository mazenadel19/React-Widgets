import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
import Dropdown from './components/Dropdown/Dropdown'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import Translate from './components/Translate/Translate'

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
			{active === 'Accordion' && <Accordion items={items} />}
			{active === 'Search' && <Search />}
			{active === 'Dropdown' && <Dropdown />}
			{active === 'Translate' && <Translate />}
		</div>
	)
}

export default App
