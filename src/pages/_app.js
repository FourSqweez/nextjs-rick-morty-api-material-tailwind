import '../styles/globals.css'
import { ThemeProvider } from '@material-tailwind/react'
import { AppContext } from '../app/contextApi'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
	const [filters, setFilters] = useState(null)
	return (
		<AppContext.Provider value={{ filters, setFilters }}>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</AppContext.Provider>
	)
}

export default MyApp
