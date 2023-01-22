import { FC, PropsWithChildren } from 'react'
import { ILayoutProps } from './Layout.props'
import { Meta, Navbar, Sidebar } from '@/components'
import styles from './Layout.module.scss'

export const Layout: FC<PropsWithChildren<ILayoutProps>> = ({
	children,
	isIndex = false,
	description,
	title,
	metaChild
}) => {
	return (
		<div className={styles.layout}>
			<Meta
				description={description}
				title={title}
				indexes={isIndex}
				children={metaChild}
			/>
			<div className='content'>
				{/* Navbar */}
				<Navbar />
				{/* Sidebar */}
				<Sidebar />
				<main>{children}</main>
			</div>
		</div>
	)
}
