import axios from 'axios'
import { useEffect, useState } from 'react'

const Convert = ({ language, text }) => {
	const [translatedText, setTranslatedText] = useState('')
	const [debouncedTerm, setDebouncedTerm] = useState(translatedText)

	useEffect(() => {}, [])
	useEffect(() => {}, [])

	// useEffect(() => {
	// 	console.log('useffect')
	// 	const doTranslation = async () => {
	// 		const { data } = await axios.post(
	// 			'https://translation.googleapis.com/language/translate/v2',
	// 			{},
	// 			{
	// 				params: {
	// 					q: text,
	// 					target: language.value,
	// 					key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
	// 				},
	// 			},
	// 		)
	// 		setTranslatedText(data.data.translations[0].translatedText)
	// 	}
	// 	// doTranslation()
	// }, [language, text])

	return <h1 className="ui header">{translatedText}</h1>
}

export default Convert
