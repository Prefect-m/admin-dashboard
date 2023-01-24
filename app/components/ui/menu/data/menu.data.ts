import { IMenuLink } from '@/interfaces/Menu-link.interface'
import { AiOutlineDashboard } from 'react-icons/ai'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { AiOutlineBarChart } from 'react-icons/ai'
import { FaQuestionCircle } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { MdContactSupport } from 'react-icons/md'

export const menuData = {
	dashboard: [
		{
			link: '/',
			name: 'Dashboard',
			icon: AiOutlineDashboard
		},
		{
			link: '/chart/line',
			name: 'Chart Line',
			icon: AiOutlineBarChart
		},
		{
			link: '/chart/map',
			name: 'Chart Map',
			icon: GiEarthAfricaEurope
		},
		{
			link: '/faq',
			name: 'Faq',
			icon: FaQuestionCircle
		}
	] as IMenuLink[],
	website: [
		{
			link: '/website/home',
			name: 'Home',
			icon: AiFillHome
		},
		{
			link: '/website/about',
			name: 'About',
			icon: MdContactSupport
		},
		{
			link: '/website/contacts',
			name: 'Contacts',
			icon: MdContactSupport
		}
	] as IMenuLink[]
}
