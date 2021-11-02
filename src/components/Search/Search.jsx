import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import './Search.css'

const Search = () => {
	const [term, setTerm] = useState('')
	const [result, setResult] = useState([])
	const [debouncedTerm, setDebouncedTerm] = useState(term)
	console.log('1')

	const isFirstRun = useRef(true)
	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false
			return
		}
		console.log('2')
		const timerId = setTimeout(() => {
			// console.log('setDebounced')
			setDebouncedTerm(term)
		}, 1000)

		return () => {
			// console.log('cleartimeout')
			clearTimeout(timerId)
		}
	}, [term])

	useEffect(() => {
		console.log('3')
		const fetchData = async () => {
			// console.log('axios request')
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm,
				},
			})
			setResult(data.query.search)
		}
		console.log('!!debouncedTerm', !!debouncedTerm)

		if (debouncedTerm) {
			// console.log('fetch data')
			fetchData()
		} else {
			setResult([])
		}
	}, [debouncedTerm])

	const renderList = result.map(item => {
		return (
			// console.log('renderList'),
			<article className='item' id='article' key={item.pageid}>
				<div className='right floated content' id='buttonWrapper'>
					<a
						className='ui button'
						href={`https://en.wikipedia.org?curid=${item.pageid}`}>
						Open This Article
					</a>
				</div>
				<div className='content' style={{ flex: 3 }}>
					<div className='header'>{item.title}</div>
					<span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
				</div>
			</article>
		)
	})

	return (
		// console.log('function return'),
		<div className='search'>
			<div className='ui form'>
				<div className='field'>
					<label htmlFor='search'>Enter Search Label</label>
					<input
						id='search'
						type='text'
						placeholder='type something here'
						className='input'
						value={term}
						onChange={e => setTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className='ui celled list'>{renderList}</div>
		</div>
	)
}

export default Search

/*
 we made use of 2 useEffects with another useState for the search term to get around the 2 requsts happening
 if we attempted to solve the warning we had previously in our single useEffect that asked us to have [term,results.length]

in this example we're searching using debouncedTerm which is already predefined with the term value the value appears instantly
if we removed the value in term and added a new value the first usestates run and after 1s with no input it sets the value for
debouncedTerm which is used by out network request
 */
