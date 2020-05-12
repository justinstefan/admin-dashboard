import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div>
      <AppBar position="static" className="Navbar">
        <Toolbar>
          <div className="Logo">
            <a href="/">
              <img src={Logo} href="/" alt="site logo" height="30" width="84" />
            </a>
          </div>
          <div style={{ flexGrow: "1" }} />
          <div>
            <IconButton color="primary">
              <MailIcon />
            </IconButton>
            <IconButton color="primary">
              <NotificationsIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="primary"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
