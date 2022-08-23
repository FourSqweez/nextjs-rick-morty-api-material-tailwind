import React from 'react'
import CardItem from './CardItem'

export default function Cards({ characters }) {
	return (
		<div className='flex w-full my-2 justify-center'>
			<div className="grid grid-cols-4 gap-6 text-center">
			{characters &&
				characters.map((item) => <CardItem key={item.id} item={item} />)}
		</div>
		</div>
	)
}
