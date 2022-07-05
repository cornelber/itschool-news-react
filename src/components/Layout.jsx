import React, { useState, useEffect } from 'react'
import { scrollToTop } from '../utils/scrollToTop'
import { Button } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

const Layout = props => {
	const { children } = props
	const [showScrollToTop, setShowScrollToTop] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > window.innerHeight / 2) {
				setShowScrollToTop(true)
			} else {
				setShowScrollToTop(false)
			}
		})
	})

	return (
		<div className={styles.contentWrapper}>
			<Header />
			{children}
			<Footer />
			{showScrollToTop && (
				<Button onClick={scrollToTop} id='scrollBtn'>
					<span className='material-icons'>arrow_upward</span>
				</Button>
			)}
		</div>
	)
}

export default Layout
