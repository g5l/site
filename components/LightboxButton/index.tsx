import React, { useMemo, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox-lite'
import 'yet-another-react-lightbox-lite/styles.css'

interface Props {
	images?: string[]
}

const LightboxButton = ({ images }: Props) => {
	const [index, setIndex] = useState<number>()
	const slides = useMemo(() => {
		return images.map(image => ({ src: image }))
	}, [images])

	return (
		<>
			<button type="button" onClick={() => setIndex(0)}>
				Open Lightbox
			</button>
			<Lightbox
				slides={slides}
				index={index}
				setIndex={setIndex}
			/>
		</>
	)
}

export default LightboxButton
