import React, { useState } from 'react'
import { FormControlLabel, Typography } from '@material-ui/core'

import { StyledSwitch } from '../StyledSwitch/StyledSwitch'

export const CustomSwitchDirect = ({ direct }) => {
	direct === 'on' ? direct = true : direct = false
	let [isOn, setIsOn] = useState(direct)

	return (
		<div style={{ position: 'relative', marginTop: '8px' }}>
			<div>
				<FormControlLabel
					value={isOn}
					control={<StyledSwitch checked={isOn} />}
					onChange={() => setIsOn(!isOn)}
					style={{ margin: 0 }}
				/>
				{
					isOn ?
						<Typography style={{ position: 'absolute', left: '6px', bottom: '4px', color: 'black', fontSize: '16px' }}>{"Direct On"}</Typography>
						:
						< Typography style={{ position: 'absolute', right: '6px', bottom: '4px', color: 'white', fontSize: '16px' }}>{"Direct Off"}</Typography>
				}
			</div>
		</div>
	)
}