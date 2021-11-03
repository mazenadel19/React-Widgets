const Link = ({ href, className, children }) => {
	const onClick = e => {
		// adds abiltity to open link in new tab
		if (e.metaKey || e.ctrlKey) return

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
