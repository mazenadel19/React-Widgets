import axios from 'axios'
import { useEffect, useRef, useState } from 'react'

const Convert = ({ language, text }) => {
	const [translatedText, setTranslatedText] = useState('')
	const [debouncedTerm, setDebouncedTerm] = useState(text)

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(text)
		}, 1000)

		return () => {
			clearTimeout(timerId)
		}
	}, [text])


	const isFirst = useRef(true)
	useEffect(() => {
		if (isFirst.current) {
			isFirst.current = false
			return
		}
		const doTranslation = async () => {
			const { data } = await axios.post(
				'https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: debouncedTerm,
						target: language.value,
						key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
					},
				},
			)
			setTranslatedText(data.data.translations[0].translatedText)
		}
		doTranslation()
	}, [debouncedTerm, language.value])

	return <h1 className='ui header'>{translatedText}</h1>
}

export default Convert
