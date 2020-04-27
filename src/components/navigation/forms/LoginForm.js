import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useTranslation } from "react-i18next";
import TweenMax, { Power1 } from "gsap";
import { Hub } from "aws-amplify";

import "./LoginForm.css";

import logo from "../../../assets/images/logoWhite.png";

import Button from "@material-ui/core/Button";

import PrivatePolivyAndTerms from "../Terms.js";
import ButtonTP from "../../utils/ButtonTP";

function LoginForm(props) {
    const { t } = useTranslation();

  const [resetPass, setResetPass] = useState(false);
  const [passCode, setPassCode] = useState(false);
  const { setLoginEmail } = props;

  let [infoPass, setInfoPass] = useState({ email: "", code: "", password: "" });

  let [infoUser, setInfoUser] = useState({
    email: "",
    password: "",
  });

  let [error, setError] = useState(false);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log('event',event)
      switch (event) {
        case "signIn_failure":
         setError( t('errors.signIn'))
          break;
        default:
      }
    });
  });

  const handleChange = (prop) => (event) => {
    setInfoUser({ ...infoUser, [prop]: event.target.value });
  };
  const handleChangePass = (prop) => (event) => {
    setInfoPass({ ...infoPass, [prop]: event.target.value });
  };

  function loginSubmit() {
    Auth.signIn({
      username: infoUser.email,
      password: infoUser.password,
    });
  }

  function back() {
    setTimeout(function () {
      setResetPass(false);
      setLoginEmail(false);
    }, 300);
  }

  function resetPassword() {
    setResetPass(true);
    setTimeout(function () {
      TweenMax.fromTo(
        "#resetPass-form",
        0.3,
        { x: "100%" },
        { x: "0%", ease: Power1.easeOut }
      );
    }, 100);
  }

  function solicitarCode(event) {
    event.preventDefault();
    Auth.forgotPassword(infoPass.email)
      .then((data) => {
        console.log(data);
        setPassCode(true);
      })
      .catch((err) => console.error(err));
  }

  function tryResetPass(e) {
    e.preventDefault();
    Auth.forgotPasswordSubmit(infoPass.email, infoPass.code, infoPass.password)
      .then((data) => {
        console.log(data);
        try {
          Auth.signIn({
            username: infoPass.email,
            password: infoPass.password,
          });
        } catch (err) {
          console.error(err);
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="loginForm">
      <div className={"header"}>
        <img src={logo} alt={"Logo tripland"} />
      </div>

      {resetPass ? (
        <div
          style={{ transform: "translate(100%,0)" }}
          id={"resetPass-form"}
          className={"body"}
        >
          <form onSubmit={passCode ? tryResetPass : solicitarCode}>
            <h3>{t("forms.login.enterMail")}</h3>
            <div className={"tp-input-group"}>
              <label htmlFor={"user-email"}>{t("forms.login.mail")}</label>
              <input
                className={"rounded"}
                type={"email"}
                name={"user-email"}
                onChange={handleChangePass("email")}
              />
            </div>
            {passCode ? (
              <div className={"tp-input-group"}>
                <label htmlFor={"user-password"}>
                  {t("forms.login.newPassword")}
                </label>
                <input
                  type={"password"}
                  name={"user-password"}
                  className={"rounded"}
                  onChange={handleChangePass("password")}
                />
              </div>
            ) : (
              ""
            )}
            {passCode ? (
              <div
                className={"tp-input-group"}
                style={{ marginTop: "16px", alignItems: "center" }}
              >
                <label htmlFor={"user-code"}>
                  {t("login.forms.confirmationCode")}
                </label>
                <input
                  type={"text"}
                  name={"user-code"}
                  onChange={handleChangePass("code")}
                  className={"code-confirmation-input"}
                />
              </div>
            ) : (
              ""
            )}
            <ButtonTP
              contenido={"Enviar"}
              type={"submit"}
              style={{
                backgroundColor: "#707070",
                color: "white",
                border: "none",
                marginTop: "8px",
                minHeight: "45px",
              }}
            />
            <Button onClick={back}>{t("buttons.back")}</Button>
          </form>
        </div>
      ) : (
        <div>
          <div className={"body"}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                loginSubmit();
              }}
            >
              <div className={"tp-input-group"}>
                <label htmlFor={"user-email"}>{t("forms.login.mail")}</label>
                <input
                  className={"rounded"}
                  type={"email"}
                  id={"user-email"}
                  name={"user-email"}
                  autoComplete={"email"}
                  onChange={handleChange("email")}
                />
              </div>
              <div className={"tp-input-group"}>
                <label htmlFor={"user-password"}>
                  {t("forms.login.password")}
                </label>
                <input
                  className={"rounded"}
                  type={"password"}
                  id={"user-password"}
                  name={"user-password"}
                  autoComplete={"current-password"}
                  onChange={handleChange("password")}
                />
              </div>
              {error}
              <ButtonTP
                contenido={t("buttons.enter")}
                style={{
                  backgroundColor: "#707070",
                  color: "white",
                  border: "none",
                  marginTop: "8px",
                  minHeight: "45px",
                  width: "100%",
                }}
                type={"submit"}
              />
            </form>
          </div>
          <div className={"footer"}>
            <p>
              <span className={"link"} onClick={resetPassword}>
                {t("forms.login.forgotPassword")}
              </span>
            </p>
            <PrivatePolivyAndTerms />
          </div>
        </div>
      )}
    </div>
  );
}
export default LoginForm;
