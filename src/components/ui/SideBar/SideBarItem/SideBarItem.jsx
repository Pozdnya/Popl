import React from 'react'
import { ListItem, ListItemIcon, Typography } from '@material-ui/core';

import {  useStyle } from './style'


export const SideBarItem = (props) => {
	const classes = useStyle()

	return (
		<>
		
			<ListItem button alignItems="center" disableGutters className={classes.listItem}>
				<ListItemIcon className={classes.listItemIcon}>
					{props.icon}
				</ListItemIcon>

				<div className={classes.listItemBox}>
					<Typography className={classes.listItemText}>{props.title}</Typography>
					<Typography variant='body1' className={classes.typography}>
						{/* Количество акков из респонза */}
						{props.countAccounts}
					</Typography>
				</div>
			</ListItem>

		</>
	)
}



