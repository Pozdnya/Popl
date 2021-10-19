import { Typography } from '@material-ui/core'
import React from 'react'
import { Cards } from './CardBlock/Cards/Cards'
import { SearchBlock } from './SearchBlock/SearchBlock'
import { useStyle } from './style'

const RightBlock = () => {
	const classes = useStyle()

	return (
		<div className={classes.rightBlock}>
			<Typography variant="h5" className={classes.accountTypographie}>Accounts</Typography>
			<SearchBlock />
			<Cards />
		</div>
	)
}

export default RightBlock