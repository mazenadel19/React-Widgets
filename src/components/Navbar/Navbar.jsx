const NavbarArray = ['Accordion', 'Search', 'Dropdown', 'Translate']

const Navbar = ({ active, setActive }) => {
	return (
		<nav className='header-nav'>
			<ul>
				{NavbarArray.map((item, index) => (
					<li
						key={index}
						onClick={() => setActive(item)}
						className={active === item ? 'active' : ''}>
						{item}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
