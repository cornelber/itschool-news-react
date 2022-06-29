import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

const Layout = props => {
	const { children } = props
	return (
		<div className={styles.contentWrapper}>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
