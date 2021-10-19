import { FormControl, IconButton, OutlinedInput } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import { useStyle } from './style';

export const SearchBlock = () => {
	const classes = useStyle()
	return (
		<div>
			<FormControl size='small'>
				<OutlinedInput className={classes.input}
					placeholder='search'
					endAdornment={
						<IconButton edge="end">
							<SearchIcon />
						</IconButton>
					}
				/>
			</FormControl>
		</div>
	)
}