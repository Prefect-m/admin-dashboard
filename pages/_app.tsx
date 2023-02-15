import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {Provider} from 'react-redux'
import theme from '../utils/theme'
import {
	ModalComponentInitialContext,
	ModalComponentProvider
} from '@/contexts/Modal-component'
import { store } from '../store'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
	const modalProvider = ModalComponentProvider()

	return (
		<Provider store={store}>
			<NextNProgress options={{ showSpinner: false }} />
			<ChakraProvider theme={theme}>
					<ModalComponentInitialContext.Provider value={{ ...modalProvider }}>
						<Component {...pageProps} />
					</ModalComponentInitialContext.Provider>
			</ChakraProvider>
		</Provider>
	)
}
