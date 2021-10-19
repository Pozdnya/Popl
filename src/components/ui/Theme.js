import { createTheme } from "@material-ui/core";

const grey = "#757575";
const white = "#eee";
const darkGrey = "#424242";
const black = "#212121";

export default createTheme({
	palette: {
		common: {
		  grey: `${grey}`,
		  white: `${white}`,
		  darkGrey: `${darkGrey}`,
		  black: `${black}`,
		},
		primary: {
		  main: `${grey}`,
		},
		secondary: {
		  main: `${darkGrey}`,
		},
	  },
	  typography: {
		tab: {
		  fontFamily: "Raleway",
		  textTransform: "none",
		  fontWeight: 700,
		  fontSize: "1rem",
		},
	  },
})