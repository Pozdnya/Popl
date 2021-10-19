import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  avatarTextBlock: {
    display: "block",
    width: "20vw",
  },
  name: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
  email: {
    fontSize: theme.spacing(2),
    fontFamily: "Roboto",
    fontStyle: "sans-serif",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
    color: theme.palette.common.grey,
    marginTop: theme.spacing(1)
  },
}));
