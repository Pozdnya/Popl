import { FormControlLabel, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { StyledSwitch } from '../StyledSwitch/StyledSwitch'

export const CustomSwitchPersonal = ({ personal }) => {
	const [isPublic, setIsPublic] = useState(personal)

	return (
		<div style={{ position: 'relative', marginTop: '8px' }}>
			<div>
				<FormControlLabel
					value={isPublic}
					control={<StyledSwitch checked={isPublic} />}
					onChange={() => setIsPublic(!isPublic)}
					style={{ margin: 0 }}
				/>
				{
					isPublic ?
						<Typography style={{ position: 'absolute', left: '6px', bottom: '4px', color: 'black', fontSize: '16px' }}>{"Public"}</Typography>
						:
						< Typography style={{ position: 'absolute', right: '6px', bottom: '4px', color: 'white', fontSize: '16px' }}>{"Personal"}</Typography>
				}
			</div>
		</div>
	)
}