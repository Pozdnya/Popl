import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  container: {
    margin: `16px 0`,
    width: "60vw",
    height: "35vh",
    boxShadow: theme.shadows[3],
    borderRadius: "10px",
  },
  wrapper: {
    margin: "0 auto",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightBlock: {
    display: "flex",
    marginRight: theme.spacing(2),
  },
  rotateDragIndicator: {
    transform: "rotate(90deg)",
    fontSize: theme.spacing(2.5),
  },
  dragIndicatorBlock: {
    display: "flex",
    justifyContent: "center",
  },
  icons: {
    width: theme.spacing(4),
    margin: "0 0.5em 0 0.5em",
  },
  buttonsBlock: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  switches: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: theme.spacing(4),
  },
  buttons: {
    margin: "0px 16px 0px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  customButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSide: {
    display: "flex",
    //justifyContent: "flex-start",
    alignItems: "center",
  },
  rightSide: {
    display: "flex",
  },
  typography: {
    fontSize: theme.spacing(1.5),
    color: theme.palette.grey[400],
  },
}));
