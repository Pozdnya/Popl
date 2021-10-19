import React from 'react'
import { Box, List } from '@material-ui/core';
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import PersonIcon from "@material-ui/icons/Person";
import { connect } from 'react-redux';

import { useStyle } from './style'
import { SideBarItem } from '../SideBarItem/SideBarItem';



const SideBarList = (props) => {
	const classes = useStyle()

	return (
		<Box className={classes.sideBar}>
			<List component='nav' className={classes.list}>
				<SideBarItem title='Overview' className={classes.listItem} icon={<RemoveRedEyeIcon className={classes.icon} />} />
				<SideBarItem title='Accounts' className={classes.listItem} icon={<PersonIcon className={classes.icon} />} countAccounts={props.data.length} />
			</List>
		</Box>
	)
}

const mapStateToProps = state => {
	return {
		data: state.cardReducer.cardData
	}
}

export default connect(mapStateToProps, null)(SideBarList)