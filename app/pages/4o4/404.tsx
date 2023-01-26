import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { Layout } from '@/layout/Layout'

export const NotFound: NextPage = () => {
	return (
		<Layout title='Page not found'>
			<div style={{ color: 'red' }}>404 Page not found</div>
		</Layout>
	)
}
