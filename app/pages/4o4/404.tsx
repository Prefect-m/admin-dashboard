import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

export const NotFound: NextPage = () => {
	return (
		<div>
			404 go back <Link href='/'>Dashboard</Link>
		</div>
	)
}
