import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  sideBar: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: "background.paper",
  },
  icon: {
    fontSize: theme.spacing(2.5),
  },
  list: {
    height: "36px",
  },
  listItem:{
    fontSize: theme.spacing(2)
  }
}));
