import { LineChart, ModalComponent, PieChart } from '@/components'
import { Layout } from '@/layout/Layout'
import { FC, useContext } from 'react'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { ModalComponentInitialContext } from '@/contexts/Modal-component'

import styles from './Dashboard.module.scss'

export const Dashboard: FC = () => {
	const { handlerOpen } = useContext(ModalComponentInitialContext)
	return (
		<Layout title='Welcome to Dashboard '>
			<Button colorScheme='messenger' onClick={handlerOpen}>
				Open Modal
			</Button>
			<Grid templateColumns='repeat(2, 1fr)' gap={2}>
				<GridItem>
					<PieChart />
				</GridItem>
				<GridItem>
					<LineChart />
				</GridItem>
			</Grid>
		</Layout>
	)
}
