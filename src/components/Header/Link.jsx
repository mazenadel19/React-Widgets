const Link = ({ href, className, children }) => {
	const onClick = e => {
		e.preventDefault()
		window.history.pushState({}, '', href)

		// dispatch event to tells the Route component that the url(path) has changed
		const navEvent = new PopStateEvent('popstate')
		window.dispatchEvent(navEvent)
	}
	return (
		<a onClick={onClick} href={href} className={className}>
			{children}
		</a>
	)
}

export default Link
