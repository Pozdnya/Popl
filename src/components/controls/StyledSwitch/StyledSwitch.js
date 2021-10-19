import { styled, Switch } from "@material-ui/core";

export const StyledSwitch = styled(Switch)(({ theme }) => ({
  backgroundColor: theme.palette.grey[600],
  width: theme.spacing(16),
  height: theme.spacing(4),
  fontFamily: "DMSans-MediumItalic",
  fontSize: theme.spacing(1.5),
  borderRadius: "12px",
  border: `1px solid lightgrey`,
  padding: 0,
  "& .MuiSwitch-input": {
    left: 0,
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    transform: "translateX(90px)",
  },
  "& .PrivateSwitchBase-root-56": {
    padding: "5px 9px",
  },
  "& .Mui-checked + .MuiSwitch-track": {
    backgroundColor: theme.palette.grey[100],
  },
}));
