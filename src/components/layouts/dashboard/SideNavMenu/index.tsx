import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { List, Divider } from "@mui/material";
import { AuthListItems } from "../../../../features/Logout";

const mainListItems = (
  <React.Fragment>
    <ListItemButton href="/dashboard/home">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Summary" />
    </ListItemButton>
  </React.Fragment>
);

const SideNavMenu = () => {
  return (
    <List component="nav">
      {mainListItems}
      <Divider sx={{ my: 1 }} />
      <AuthListItems />
    </List>
  );
};

export default SideNavMenu;
