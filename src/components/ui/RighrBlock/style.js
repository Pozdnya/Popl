import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  rightBlock: {
    width: "80wv",
  },
  accountTypographie: {
    color: theme.palette.grey[700],
    opacity: 0.7,
    marginBottom: theme.spacing(1.5),
  },
}));
