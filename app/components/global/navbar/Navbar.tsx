import { FC } from 'react'
import styles from './Navbar.module.scss'
import { IoExitSharp } from 'react-icons/io5'
import { BsEnvelopeFill } from 'react-icons/bs'
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
					{colorMode === 'light' ? <CiDark size={20} /> : <CiLight size={20} />}
				</li>
				<li title='Notifications'>
					<BsEnvelopeFill size={16} />
				</li>
				<li title='Log out'>
					<IoExitSharp size={18} />
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
