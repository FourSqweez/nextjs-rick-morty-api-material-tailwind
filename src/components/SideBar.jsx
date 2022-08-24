import React, { useState } from 'react'
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react'
import { Button } from '@material-tailwind/react'

export default function SideBar({ characters }) {
	const [open, setOpen] = useState(0)

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value)
	}

	const unionStatus = [
		...new Map(
			characters.map((item) => [JSON.stringify(item.status), item.status])
		).values(),
	]

	const setStatusToObject = (item) => {
		return { status: item }
	}
	const status = unionStatus.map(setStatusToObject)

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
										key={item.status}
										className="w-auto p-2 text-center h-auto rounded-2xl text-gray-600 bg-orange-200"
									>
										{item.status}
									</Button>
								))}
						</AccordionBody>
					</Accordion>
					<Accordion open={open === 2} onClick={() => handleOpen(2)}>
						<AccordionHeader>Species</AccordionHeader>
						<AccordionBody>fff</AccordionBody>
					</Accordion>
					<Accordion open={open === 3} onClick={() => handleOpen(3)}>
						<AccordionHeader>Gender</AccordionHeader>
						<AccordionBody>tt</AccordionBody>
					</Accordion>
				</div>
			</div>
		</div>
	)
}
