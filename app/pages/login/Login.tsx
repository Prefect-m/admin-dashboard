import { FC, useState } from 'react'
import styles from './Login.module.scss'
import {
	Stack,
	InputGroup,
	Input,
	FormControl,
	FormLabel,
	InputRightElement,
	Button
} from '@chakra-ui/react'
import { BiHide, BiShowAlt } from 'react-icons/bi'
import { IoEnterOutline } from 'react-icons/io5'
import { inputStyles } from '@/../utils/styles'

export const Login: FC = () => {
	const [show, setShow] = useState(false)
	const handleClick = () => setShow(!show)

	return (
		<div className={styles.login}>
			<div className={styles.content}>
				<FormControl color='blackAlpha.700'>
					<Stack spacing={6}>
						<InputGroup flexDirection='column'>
							<FormLabel>Логин</FormLabel>
							<Input type='text' sx={inputStyles} />
						</InputGroup>
						<InputGroup flexDirection='column' position='relative'>
							<FormLabel>Пароль</FormLabel>
							<Input type={show ? 'text' : 'password'} sx={inputStyles} />
							<InputRightElement
								sx={{ position: 'absolute', top: '33px', right: '10px' }}
							>
								<Button h='1.75rem' size='sm' onClick={handleClick}>
									{show ? <BiHide /> : <BiShowAlt />}
								</Button>
							</InputRightElement>
						</InputGroup>
						<Button colorScheme='blue' rightIcon={<IoEnterOutline />}>
							Войти
						</Button>
					</Stack>
				</FormControl>
			</div>
			<div className={styles.copyright}>
				<span>Developed and maintained by the corporation Falcon group</span>
			</div>
		</div>
	)
}
