import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles((theme) => ({
  leftBlockWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "-webkit-fill-available",
    marginRight: theme.spacing(2),
  },
  leftBlock: {
    display: "block",
  },
  avatarBlock: {
    display: "flex",
    margin: "1.5rem",
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    marginRight: theme.spacing(2),
  },
  iconsBlock: {
    marginLeft: "1rem",
    cursor: "pointer",
  },
  icons: {
    width: theme.spacing(4),
    margin: "0 0.5em 0 0.5em",
  },
  edit: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginTop: theme.spacing(1),
  },
  icon: {
    width: theme.spacing(3),
    cursor: "pointer",
  },
  container: {
    display: "flex",
  },
  avatarTextBlock: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    height: theme.spacing(5.25),
  },
}));
