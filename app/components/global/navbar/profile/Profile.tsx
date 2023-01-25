import { FC } from 'react'
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
	Avatar,
	Heading,
	List,
	ListItem,
	ListIcon
} from '@chakra-ui/react'
import { MdModeEdit } from 'react-icons/md'
import { IoExitSharp } from 'react-icons/io5'

export const Profile: FC = () => {
	return (
		<Popover>
			<PopoverTrigger>
				<Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
			</PopoverTrigger>
			<PopoverContent width={300} right={3} fontWeight='normal' border='none'>
				<PopoverArrow />
				<PopoverCloseButton />
				<PopoverHeader>
					<Heading as='h4' size='sm'>
						Kent Dodds
					</Heading>
				</PopoverHeader>
				<PopoverBody>
					<List spacing={3}>
						<ListItem>
							<ListIcon as={MdModeEdit} size={16} />
							Edit profile
						</ListItem>
						<ListItem>
							<ListIcon as={IoExitSharp} size={16} />
							Log out
						</ListItem>
					</List>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	)
}
