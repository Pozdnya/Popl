import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  typography: {
    fontSize: theme.spacing(1.8),
    opacity: 0.5,
    color: `${theme.palette.common.black} !important`,
    display: "flex",
    alignItems: "end",
    justifyContent: "flex-end",
    minWidth: theme.spacing(16),
  },
  listItemBox: {
    display: "flex",
    alignItems: "center",
  },
  listItemText: {
    fontSize: theme.spacing(2),
    opacity: 0.5,
  },
  listItem: {
    paddingLeft: 32,
    marginBottom: 4,
    "&:hover": {
      background: `linear-gradient(90deg, ${theme.palette.common.grey} , #fff )`,
      transition: ".4s",
      color: theme.palette.common.white,
    },
  },
  listItemIcon: {
    minWidth: "30px",
    padding: "8px 0px",
  },
}));
