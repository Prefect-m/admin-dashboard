import { Layout } from '@/layout/Layout'
import styles from './Home.module.scss'
import { useColorMode, Button } from '@chakra-ui/react'

export const Home = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Layout title='Home page dashboard'>
			<Button colorScheme='blue'>Light Mode Always</Button>
			<button onClick={toggleColorMode}>
				Change color mode Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
			</button>
			<div className={styles.homeSection}>dawwww</div>
		</Layout>
	)
}
