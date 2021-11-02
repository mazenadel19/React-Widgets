import React, { useEffect, useRef, useState } from 'react'

const Dropdown = ({
	options,
	selected,
	onSelectedChange,
	coloringWidget,
	label,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef()
	// const filteredOptions = options.filter(e => e.label !== selected.label)
	const renderedOptions = options.map((option, index) => {
		if (selected === option) return null
		return (
			<div
				key={index}
				className='item'
				onClick={() => onSelectedChange(option)}>
				{option.label}
			</div>
		)
	})

	useEffect(() => {
		const onBodyClick = e => {
			if (dropdownRef.current && dropdownRef.current.contains(e.target)) return

			// console.log('body clicked', dropdownRef)
			return setIsOpen(false)
		}

		document.body.addEventListener('click', onBodyClick, { capture: true })

		return () =>
			//remove event listener when component unmounts
			document.body.removeEventListener('click', onBodyClick, {
				capture: true,
			})
	}, [])

	return (
		<>
			<p
				style={{
					fontSize: '2rem',
					textAlign: 'center',
					color: coloringWidget && selected.value,
				}}>
				{coloringWidget && `This is a ${selected.value} colored text`}
			</p>
			<div className='ui form' ref={dropdownRef}>
				<div className='field'>
					<label className='label'>{label}</label>
					<div
						onClick={() => setIsOpen(!isOpen)}
						className={`ui selection dropdown ${
							isOpen ? 'visible active' : ''
						}`}>
						<i className='dropdown icon'></i>
						<div className='text'>{selected.label}</div>
						<div className={`menu ${isOpen ? 'visible transition' : ''}`}>
							{renderedOptions}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Dropdown
