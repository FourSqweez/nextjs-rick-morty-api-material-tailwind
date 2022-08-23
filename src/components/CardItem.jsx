import React from 'react'
import { Card, CardHeader, CardBody } from '@material-tailwind/react'
import Image from 'next/image'

export default function CardItem({ item }) {
	return (
		<Card className="w-44 h-72 pb-1 border-4 border-gray-800 hover:border-purple-300 shadow-xl shadow-blue-gray-500 overflow-hidden hover:cursor-pointer hover:scale-110 ease-out duration-300 ">
			<CardHeader floated={false} className="rounded-none m-0 w-full h-full">
				<Image
					priority="true"
					layout="fill"
					src={item.image}
					alt={item.name}
				/>
			</CardHeader>
			<CardBody className="text-center p-0">
				<div className="text-md truncate whitespace-nowrap">
					<b title={item.name}>{item.name}</b>
				</div>
				<div className="text-md truncate whitespace-nowrap">
					<b title={item.species || 'unknown'}>Species : </b>
					{item.species}
				</div>
				<div className="text-md truncate whitespace-nowrap">
					<b title={item.type}>Type : </b>
					{item.species || 'unknown'}
				</div>
			</CardBody>
		</Card>
	)
}
