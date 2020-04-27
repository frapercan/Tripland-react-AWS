import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import Button from "@material-ui/core/Button";
import { Mail } from "@material-ui/icons";

import PrivatePolivyAndTerms from "./Terms.js";
import LoginForm from "./forms/LoginForm";

import logo from "../../assets/images/logoWhite.png";
import fbIcon from "../../assets/images/fb_icon.png";
import googleIcon from "../../assets/images/Google_icon.png";

import { Auth } from "aws-amplify";

const useStyles = makeStyles(theme => ({
  root: {
    display:"flex"
  },
  socialIcon: {
    width: 40,
    height: 30,
    paddingRight: 10
  }
}));

function Login(props) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [loginEmail, setLoginEmail] = useState(false);

  // const [image] = useState("");

  function googleLogin() {
    Auth.federatedSignIn({ provider: "Google" })
  }
  function facebookLogin() {
    Auth.federatedSignIn({ provider: "Facebook" })
  }

  function showLogin() {
    setTimeout(function() {
      setLoginEmail(true);
    }, 300);
  }

  return (
    <div className={classes.root}>
      {loginEmail ? (
        <LoginForm setLoginEmail={setLoginEmail} />
      ) : (
        <div className={"tp-modal"}>
          <div className={"header"}>
            <img src={logo} alt={"Logo tripland"} />
          </div>
          <div className={"body"}>
            <div className={"btn-option-login"} onClick={googleLogin}>
              <Button>
                <img
                  src={googleIcon}
                  className={classes.socialIcon}
                  alt={"Google"}
                />{" "}
                {t("buttons.loginGoogle")}
              </Button>
            </div>
            <div className={"btn-option-login"} onClick={facebookLogin}>
              <Button>
                <img
                  src={fbIcon}
                  className={classes.socialIcon}
                  alt={"Facebook"}
                />{" "}
                {t("buttons.loginFB")}
              </Button>
            </div>
            <div className={"btn-option-login"} onClick={showLogin}>
              <Button>
                <Mail className={classes.socialIcon} />
                {t("buttons.loginMail")}
              </Button>
            </div>
            <PrivatePolivyAndTerms />
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
