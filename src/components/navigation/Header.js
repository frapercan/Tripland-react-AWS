import React from "react";
// import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";

import IconButton from "@material-ui/core/IconButton";

import ReactCountryFlag from "react-country-flag";

import logo from "../../assets/images/logo.png";
import Buttons from "./Buttons"


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  logoDiv: {
    flexGrow: 1,
    justifyContent: "left",
    display: "flex"
  },
  buttonDiv: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
      flexShrink: 0
    },
    justifyContent: "right",
    display: "flex"
  },
  appBar: {
    backgroundColor: "#333333",
    minHeight:"5vh",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100%)`
    }
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    justifyContent: "right"
  },
  translationButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    fontSize: "2em",
    marginRight: 5,
    marginLeft: 5
  },
  buttonContainer: {
    display: 'flex'
  },
  avatar: {
    width: "50px",
    height: "50px",
    objectFit: 'cover',
    borderRadius: '50%',
    margin: "auto",
}

}));

function Header(props) {
  const { currentUser, setCurrentUser } = props;
  const {mobileOpen, setMobileOpen} = props;

  const classes = useStyles();


  const { i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar  className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.logoDiv}>
          <Link to={"/"}>
            <img src={logo} alt={"Logo Tripland"} />
          </Link>
        </div>
        <div className={classes.buttonDiv}>
        <Buttons currentUser={currentUser} setCurrentUser={setCurrentUser} className={classes.buttonDiv} />
        </div>

        <div
          className={classes.translationButton}
          onClick={() => changeLanguage("es")}
        >
          <ReactCountryFlag countryCode="es" aria-label="es" />
        </div>
        <div
          className={classes.translationButton}
          onClick={() => changeLanguage("gb")}
        >
          <ReactCountryFlag countryCode="gb" aria-label="gb" />
        </div>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
