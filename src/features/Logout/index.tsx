import {
  Button,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useRecoilState } from "recoil";
import { ListItemButton } from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import { dispLogoutConfirm } from "../../common/store/dispLogoutConfirm";
import { theme } from "../../common/styles/theme";

const Logout = () => {
  const [, setDispLogoutConfirm] = useRecoilState(dispLogoutConfirm);
  const [isHover, setIsHover] = useState(false);
  const handleLogout = () => {
    console.log("ログアウト");
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      display="flex"
      height="100vh"
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      right="0"
      zIndex={theme.zIndex.drawer + 1} //TODO:z-indexの管理方法考える
      sx={{
        backgroundColor: "rgba(108, 103, 110, 0.5)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setDispLogoutConfirm(false);
        }
      }}
    >
      <Card sx={{ maxWidth: 475, padding: 8 }}>
        <Typography gutterBottom variant="h5" component="div">
          ログアウトしますか？
        </Typography>
        <Button
          variant="contained"
          style={{
            width: "100%",
            marginTop: "24px",
            padding: "12px",
            border: "none",
            color: "#fff",
            fontWeight: "bold",
            backgroundColor: "rgba(234,57,57,0.8)",
            boxShadow: "0px 0px 4px -6px rgba(0,0,0,0.6)",
            opacity: isHover ? "0.8" : "1",
            transition: "0.4s ease",
          }}
          onClick={() => {
            handleLogout();
          }}
          onMouseEnter={() => {
            setIsHover(false);
          }}
          onMouseLeave={() => {
            setIsHover(true);
          }}
        >
          ログアウトする
        </Button>
        <Button
          variant="outlined"
          color="default"
          style={{
            width: "100%",
            marginTop: "24px",
            padding: "12px",
            border: "1px solid #CCCCCC",
            boxShadow: "0px 0px 4px -6px rgba(0,0,0,0.6)",
          }}
          onClick={() => {
            setDispLogoutConfirm(false);
          }}
        >
          閉じる
        </Button>
      </Card>
    </Grid>
  );
};

export const AuthListItems = () => {
  const [, setDispLogoutConfirm] = useRecoilState(dispLogoutConfirm);
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Authentication
      </ListSubheader>
      <ListItemButton
        onClick={() => {
          setDispLogoutConfirm(true);
        }}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default Logout;
