import React, { useContext, useEffect, useState } from 'react'
import CardItem from './CardItem'
import { AppContext } from '../app/contextApi'

export default function Cards({ characters }) {
	const [displays, setDisplays] = useState(characters)
	const { filters } = useContext(AppContext)

	console.log('Test from Cards : ', filters)

	useEffect(() => {
		if (filters !== null) {
			handleDisplays(filters)
		} else {
			setDisplays(characters)
		}
	}, [filters])

	const setFilter = () => {
		const newDisplays = characters.map((item) => item.status == '')
	}

	const handleDisplays = (filters) => {
		switch (filters) {
			case 'Dead':
				setDisplays()
				return
			case 'unknown':
				setDisplays()
				return
			case 'Alive':
				setDisplays()
				return
		}
	}

	return (
		<div className="flex w-full my-2 justify-center">
			<div className="grid grid-cols-4 gap-6 text-center">
				{displays &&
					displays.map((item) => <CardItem key={item.id} item={item} />)}
			</div>
		</div>
	)
}
