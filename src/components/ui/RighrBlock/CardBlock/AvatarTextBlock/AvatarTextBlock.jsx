import { Typography } from '@material-ui/core'
import React from 'react'
import { useStyle } from './style'

export const AvatarTextBlock = props => {
	const classes = useStyle()

	return (
		<div className={classes.avatarTextBlock}>
			<Typography variant='h3' className={classes.name}>{props.name}</Typography>
			<Typography className={classes.email}>{props.email}</Typography>
			<Typography className={classes.email}>{props.bio}</Typography>
		</div>
	)
}