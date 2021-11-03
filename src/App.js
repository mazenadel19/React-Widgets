import React, { Suspense, useState } from 'react'
import './App.css'
import Accordion from './components/Accordion/Accordion'
import Header from './components/Header/Header'
import Route from './components/Route/Route'
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

const options = [
	{ label: 'Red', value: 'red' },
	{ label: 'Orange', value: 'orange' },
	{ label: 'Yellow', value: 'yellow' },
	{ label: 'Green', value: 'green' },
	{ label: 'Blue', value: 'blue' },
	{ label: 'Indigo', value: 'indigo' },
	{ label: 'Violet', value: 'violet' },
	{ label: 'Black', value: 'black' },
]

function App() {
	const [selected, setSelected] = useState(options[0])

	return (
		<div className='ui container App'>
			<Header />
			<Suspense fallback={<div>Loading...</div>}>
				<Route path='/'>
					<Accordion items={items} />
				</Route>
				<Route path='/list'>
					<Dropdown
						label='Select a color'
						options={options}
						selected={selected}
						onSelectedChange={setSelected}
						coloringWidget
					/>
				</Route>
				<Route path='/search'>
					<Search />
				</Route>
				<Route path='/translate'>
					<Translate />
				</Route>
			</Suspense>
		</div>
	)
}

export default App
