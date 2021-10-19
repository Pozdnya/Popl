import { Button, styled } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';


export const StyledButton = styled(Button)(({ theme }) => ({
	color: grey[800],
	backgroundColor: theme.palette.common.white,
	width: theme.spacing(16),
	height: theme.spacing(3),
	fontFamily: "DMSans-MediumItalic",
	fontSize: theme.spacing(1.5),
	textTransform: "none",
	border: "1px solid grey",
	marginTop: theme.spacing(0.5),
	"& .MuiButton-label": {
		display: "block",
	},
	"& :hover": {
		backgroundColor: grey[200],
	},
}));

