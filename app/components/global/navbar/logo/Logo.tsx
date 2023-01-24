import { FC } from 'react'
import { useColorMode } from '@chakra-ui/react'

export const Logo: FC = () => {
	const { colorMode } = useColorMode()

	return (
		// Paste you'r svg code | paths... & Text..
		<h1>Adminastration panel</h1>
	)
}
