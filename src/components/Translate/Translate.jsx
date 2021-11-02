import { useState } from 'react'
import Dropdown from './../Dropdown/Dropdown'
import Convert from './Convert'
import languageCodes from './languageCodes'

const Translate = () => {
	const [selected, setSelected] = useState(languageCodes[0])
	const [enteredText, setEnteredText] = useState('')
	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label htmlFor='languageInput'>Enter Text Here</label>
					<input
						id='languageInput'
						value={enteredText}
						onChange={e => setEnteredText(e.target.value)}
					/>
				</div>
			</div>
			<Dropdown
				label='Select a langugae'
				options={languageCodes}
				selected={selected}
				onSelectedChange={setSelected}
			/>
			<hr />
			<h3>Output:</h3>
			<Convert language={selected} text={enteredText} />
		</div>
	)
}

export default Translate
