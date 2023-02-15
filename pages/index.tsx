import { NextPage } from 'next/types'
import { Login } from '@/pages'
import { useSelector } from '@/hooks/use.selector'
import { Toastr } from '@/components'
import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'

const DashboardLogin: NextPage = (props) => {
	const {errors} = useSelector(state => state.auth)
	const toastr = useToast()
	useEffect(() => {
		if (errors) {
			toastr({
        title: `${errors}`,
        status: 'error',
        isClosable: true,
      })
		}
	}, [errors])
	return <Login {...props}/>
}

export default DashboardLogin
