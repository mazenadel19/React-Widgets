import { useEffect, useState } from 'react'
const Route = ({ path, children }) => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)
	// if  you need an event listener inside a component it's a sign that you need to use the useState hook
	useEffect(() => {
		const onLocationChange = event => {
			// console.log('location change')
			setCurrentPath(window.location.pathname)
		}

		// listen to the url change event from link component
		window.addEventListener('popstate', onLocationChange)
		return () => {
			window.removeEventListener('popstate', onLocationChange)
		}
	}, [])

	return currentPath === path ? children : null
}

export default Route
