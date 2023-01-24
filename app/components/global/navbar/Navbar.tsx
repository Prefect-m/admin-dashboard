import { FC } from 'react'
import styles from './Navbar.module.scss'
import { IoMdLogOut } from 'react-icons/io'
import { FiMessageSquare } from 'react-icons/fi'
import { CiDark, CiLight } from 'react-icons/ci'
import { Logo } from '@/components'
import { Avatar, Button, useColorMode } from '@chakra-ui/react'

export const Navbar: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<div className={styles.navbar}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<ul className={styles.action}>
				<li onClick={toggleColorMode} title='Change theme'>
					{colorMode === 'light' ? <CiDark size={18} /> : <CiLight size={18} />}
				</li>
				<li title='Notifications'>
					<FiMessageSquare size={18} />
				</li>
				<li title='Log out'>
					<IoMdLogOut size={18} />
				</li>
				<li title='Profile setting'>
					<Avatar
						size='sm'
						name='Kent Dodds'
						src='https://bit.ly/kent-c-dodds'
					/>
				</li>
			</ul>
		</div>
	)
}
