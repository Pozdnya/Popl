import React from 'react'
import { Logo } from '../../controls/Logo/Logo'
import SideBarList from './SideBarList/SideBarList'
import { useStyle } from './style'

const SideBar = () => {
	const classes = useStyle()

	return (
		<div className={classes.sideBar}>
			<Logo />
			<SideBarList />
		</div>
	)
}

export default SideBar