import axios from 'axios'

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/'

export const getInfo = () =>
	axios
		.get(`/character`)
		.then((res) => res.data.info)
		.catch((error) => console.error(error))

export const getAllCharacters = () =>
	axios
		.get(`/character`)
		.then((res) => res.data.results)
		.catch((error) => console.error(error))

export const getSingleCharacterById = () =>
	axios
		.get(`/character/${id}`)
		.then((res) => res.data)
		.catch((error) => console.error(error))
