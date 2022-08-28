import React, { useState } from 'react'
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react'
import { Button } from '@material-tailwind/react'

export default function SideBar({ characters }) {
	console.log(characters.map((item) => item))
	const [open, setOpen] = useState(0)

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value)
	}

	// union text in an array 
	const status = [...new Set(characters.map((item) => item.status))]

	const species = [...new Set(characters.map((item) => item.species))]

	const genders = [...new Set(characters.map((item) => item.gender))]

	return (
		<div className="max-w-xs w-full h-full">
			<div className="w-72 fixed text-center h-auto">
				<h1 className="text-2xl font-semibold">Filters</h1>
				<h3 className="text-md font-semibold cursor-pointer underline">
					Clear Filters
				</h3>
				<div className="">
					<Accordion open={open === 1} onClick={() => handleOpen(1)}>
						<AccordionHeader className="text-xl">Status</AccordionHeader>
						<AccordionBody className="flex justify-evenly">
							{status &&
								status.map((item) => (
									<Button
										key={item}
										className="w-auto p-2 text-center h-auto rounded-2xl text-gray-600 bg-orange-200"
									>
										{item}
									</Button>
								))}
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 2} onClick={() => handleOpen(2)}>
						<AccordionHeader>Species</AccordionHeader>
						<AccordionBody className='flex justify-evenly'>
							{species.map((specie) => (
								<Button
									key={specie}
									className="w-auto p-2 text-center h-auto rounded-2xl text-gray-600 bg-orange-200"
								>
									{specie}
								</Button>
							))}
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 3} onClick={() => handleOpen(3)}>
						<AccordionHeader>Gender</AccordionHeader>
						<AccordionBody className='flex justify-evenly'>
							{genders.map((gender) => (
								<Button
									key={gender}
									className="w-auto p-2 text-center h-auto rounded-2xl text-gray-600 bg-orange-200"
								>
									{gender}
								</Button>
							))}
						</AccordionBody>
					</Accordion>
				</div>
			</div>
		</div>
	)
}
