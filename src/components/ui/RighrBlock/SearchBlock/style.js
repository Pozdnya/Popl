import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  input: {
    marginLeft: 8,
    height: 32,
    width: 600,
    borderRadius: 10,
    boxShadow: theme.shadows[1],
  },
}));
