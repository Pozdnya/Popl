import React from 'react'
import RightBlock from '../RighrBlock/RightBlock'
import SideBar from '../SideBar/SideBar'
import { useStyle } from './style'

const Wrapper = () => {
	const classes = useStyle()

	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
			<SideBar />
			<RightBlock />
			</div>
		</div>
	)
}

export default Wrapper