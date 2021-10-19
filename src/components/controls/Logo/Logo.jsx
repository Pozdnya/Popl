import React from "react";

import logo from '../../../icons/sidebar/logo.png'
import { useStyle } from "./style";

export const Logo = () => {
	const classes = useStyle()
	return (
		<div className={classes.logoContainer} >
			<a href='/' className={classes.a}>
				<img src={logo} alt='logo' className={classes.logo} />
			</a>
		</div>
	)
}