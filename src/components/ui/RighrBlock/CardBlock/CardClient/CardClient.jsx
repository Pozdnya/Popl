import React from 'react'
import { Card, Typography } from '@material-ui/core';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import PersonIcon from "@material-ui/icons/Person";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import AssessmentIcon from '@material-ui/icons/Assessment';

import { useStyle } from './style'
import { CustomSwitchPersonal } from '../../../../controls/CustomSwitchPersonal/CustomSwitchPersonal';
import { CustomSwitchDirect } from '../../../../controls/CustomSwitchDirect/CustomSwitchDirect';
import { StyledButton } from '../../../../controls/StyledButton/StyledButton';
import { DataAccountBlock } from '../DataAccountBlock/DataAccountBlock';


export const CardClient = (props) => {
	const classes = useStyle()
	
	return (
		<Card className={classes.container}>
			<div className={classes.wrapper}>
				<div className={classes.dragIndicatorBlock}>
					<DragIndicatorIcon className={classes.rotateDragIndicator} />
				</div>
				<div className={classes.contentContainer}>

					<DataAccountBlock
						key={props.id}
						id={props.id}
						image={props.image}
						name={props.name}
						email={props.email}
						bio={props.bio}
						publicIcons={props.publicIcons}
						businessIcons={props.businessIcons}
						isPro={props.isPro}
						direct={props.direct}
						isPublic={props.isPublic} />

					<div className={classes.rightBlock}>

						<div className={classes.buttonsBlock}>
							<div className={classes.switches}>
								<CustomSwitchPersonal personal={props.isPublic} />
								<CustomSwitchDirect direct={props.direct} />
							</div>

							<div className={classes.buttons}>
								<StyledButton>
									<div className={classes.customButton}>
										<div className={classes.leftSide}>
											<PersonIcon style={{ fontSize: 12 }} />
											<Typography style={{ fontSize: 12, marginLeft: 4 }}>Connections</Typography>
										</div>
										<div className={classes.rightSide}>
											<Typography className={classes.typography}>
												574
											</Typography>
										</div>
									</div>
								</StyledButton>
								<StyledButton>
									<div className={classes.customButton}>
										<div className={classes.leftSide}>
											<FilterVintageIcon style={{ fontSize: 12 }} />
											<Typography style={{ fontSize: 12, marginLeft: 4 }}> Devices </Typography>
										</div>
										<div className={classes.rightSide}>
											<Typography className={classes.typography}>
												75
											</Typography>
										</div>
									</div>
								</StyledButton>
								<StyledButton>
									<div className={classes.customButton}>
										<div className={classes.leftSide}>
											<AssessmentIcon style={{ fontSize: 12 }} />
											<Typography style={{ fontSize: 12, marginLeft: 4 }}> Analytics</Typography>
										</div>
									</div>
								</StyledButton>
							</div>
						</div>
					</div>

				</div>
			</div>
		</Card>
	)
}

