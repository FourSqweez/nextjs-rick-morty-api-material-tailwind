import React, { useContext, useEffect, useState } from 'react'
import CardItem from './CardItem'
import { AppContext } from '../app/contextApi'
import {
	ALIEN,
	ALIVE,
	DEAD,
	FEMALE,
	HUMAN,
	MALE,
	NULL,
	UNKNOWN,
	UNKNOWN_GENDER,
} from '../app/constant'

export default function Cards({ characters }) {
	const [displays, setDisplays] = useState(characters)
	const { filters } = useContext(AppContext)

	console.log('Character : ', displays)

	console.log('Test from Cards : ', filters)

	useEffect(() => {
		if (filters !== NULL) {
			handleDisplays(filters)
		} else {
			setDisplays(characters)
		}
	}, [filters])

	const getFilterFromStatus = (status) => {
		return characters.filter((item) => item.status == status)
	}
	const getFilterFromGender = (gender) => {
		return characters.filter((item) => `gender-${item.gender}` == gender)
	}

	const getFilterFromSpecies = (species) => {
		return characters.filter((item) => item.species == species)
	}

	const handleDisplays = (filters) => {
		switch (filters) {
			case DEAD:
				setDisplays(getFilterFromStatus(filters))
				return
			case UNKNOWN:
				setDisplays(getFilterFromStatus(filters))
				return
			case ALIVE:
				setDisplays(getFilterFromStatus(filters))
				return
			case MALE:
				setDisplays(getFilterFromGender(filters))
				return
			case FEMALE:
				setDisplays(getFilterFromGender(filters))
				return
			case UNKNOWN_GENDER:
				setDisplays(getFilterFromGender(filters))
				return
			case HUMAN:
				setDisplays(getFilterFromSpecies(filters))
				return
			case ALIEN:
				setDisplays(getFilterFromSpecies(filters))
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
