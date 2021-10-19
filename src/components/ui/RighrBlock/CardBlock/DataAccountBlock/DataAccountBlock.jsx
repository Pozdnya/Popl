import { Avatar, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { patchData } from '../../../../redux/Cards/actions'

import { AvatarTextBlock } from '../AvatarTextBlock/AvatarTextBlock'
import { useStyle } from './style'
import editIcon from '../../../../../icons/edit_account_card.png'

export const DataAccountBlock = props => {
	const classes = useStyle()
	const dispatch = useDispatch()
	const [edit, setEdit] = useState(false)
	const [editProfile, setEditProfile] = useState({
		name: props.name,
		email: props.email,
		bio: props.bio,
		id: props.id,
	})

	const inputHandler = ({ target: { name, value } }) => {
		setEditProfile({ ...editProfile, [name]: value })
	}

	const editHandler = (e) => {
		e.preventDefault()
		//debugger;
		setEdit(!edit);

		if (edit) {
			dispatch(patchData(editProfile))
			//dispatch(fetchData())
		}
	}

	return (
		<div className={classes.leftBlockWrapper} key={props.id}>
			<div className={classes.leftBlock}>
				<div className={classes.avatarBlock}>
					<Avatar alt='avatar' src={props.image} className={classes.avatar} />
					{edit ?
						<div className={classes.container}>
							<div className={classes.avatarTextBlock}>
								<TextField
									className={classes.textField}
									defaultValue={props.name}
									label='Name'
									name='name'
									size='small'
									onChange={inputHandler}
								/>
								<TextField
									className={classes.textField}
									defaultValue={props.email}
									label='e-mail'
									name='email'
									size='small'
									onChange={inputHandler}
								/>
								<TextField
									className={classes.textField}
									defaultValue={props.bio}
									label="bio"
									name='bio'
									size='small'
									onChange={inputHandler}
								/>
							</div>
						</div>
						: <AvatarTextBlock name={props.name} email={props.email} bio={props.bio} />
					}
				</div>
				<div className={classes.iconsBlock}>
					{props.isPro ?
						props.publicIcons.map((iconNumber, index) =>
							<img alt='img' key={index} src={`/Icons/${iconNumber}.png`} className={classes.icons} />
						) :
						props.businessIcons.map((iconNumber, index) =>
							<img alt='img' key={index} src={`/Icons/${iconNumber}.png`} className={classes.icons} />
						)
					}

				</div>
			</div>

			<div className={classes.edit}>
				<img src={editIcon} alt='edit profile' className={classes.icon} id={props.id} onClick={editHandler} />
			</div>
		</div>
	)
}