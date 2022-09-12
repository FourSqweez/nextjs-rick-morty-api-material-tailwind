import React from 'react'

export default function Navbar() {
  return (
		<div className="flex fixed z-50 w-full h-16 bg-brown-500 items-center">
			<div className="flex w-40 ml-4">Rick and Morty</div>
			<div className="w-full flex justify-center">
				<input
					type="text"
					className="w-full h-10 max-w-xl border-2 border-black rounded-md mr-10"
				/>
			</div>
		</div>
  )
}
