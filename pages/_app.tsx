import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../utils/theme'
import {
	ModalComponentInitialContext,
	ModalComponentProvider
} from '@/contexts/Modal-component'

export default function App({ Component, pageProps }: AppProps) {
	const modalProvider = ModalComponentProvider()

	return (
		<ChakraProvider theme={theme}>
			<ModalComponentInitialContext.Provider value={{ ...modalProvider }}>
				<Component {...pageProps} />
			</ModalComponentInitialContext.Provider>
		</ChakraProvider>
	)
}
