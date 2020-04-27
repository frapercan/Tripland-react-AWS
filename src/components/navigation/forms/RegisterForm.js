import React, { useState, useEffect } from "react";
import ButtonTP from "../../utils/ButtonTP";
import logo from "../../../assets/images/logoWhite.png";
import { Auth } from "aws-amplify";
import { TweenMax, Expo } from "gsap";
import "./RegisterForm.css";
import { validations } from "../../utils/formsValidations";
import { useTranslation } from "react-i18next";
import PrivatePolivyAndTerms from "../Terms.js"

export default function RegisterForm(props) {
  const { t } = useTranslation();

  const [infoUser, setInfoUser] = useState({
    email: "",
    password: "",
    gender: ""
  });
  const [errores, setErrores] = useState({
    email: false,
    password: false,
    gender: false
  });

  const [emailMessage, setEmailMessage] = useState(t("alerts.validMail"));

  const [confirmEmail, setConfirmEmail] = useState(false);
  const [codeVerification, setCodeVerification] = useState("");

  const [tryRegister, setTryRegister] = useState(false);

  useEffect(() => {
    if (confirmEmail) {
      TweenMax.fromTo(
        "#confirm-email-form",
        0.3,
        { x: "100%" },
        { x: "0%", ease: Expo.easeOut }
      );
    }
  }, [confirmEmail]);

  useEffect(() => {
    if (
      tryRegister &&
      !errores.email &&
      !errores.password &&
      !errores.gender
    ) {
      Auth.signUp({
        username: infoUser.email,
        password: infoUser.password
      })
        .then(() => {
          setConfirmEmail(true);
        })
        .catch(err => {
          console.log(err);
          if (err.code === "UsernameExistsException") {
            setErrores({ ...errores, email: true });
            setEmailMessage(t("alerts.mailTaken"));
          }
        });
    } else {
      setTryRegister(false);
    }
  }, [errores, setTryRegister, setConfirmEmail, infoUser, tryRegister,t]);

  function handleChange(prop, event) {
    setInfoUser({ ...infoUser, [prop]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setErrores({
      email: validations.checkEmail(infoUser.email),
      password: validations.checkPassword(infoUser.password),
    });
    setTryRegister(true);
  }
  function confirmAccountRegister(event) {
    event.preventDefault();
    Auth.confirmSignUp(infoUser.email, codeVerification)
      .then(data => {
        console.log(data);
        console.log(codeVerification);
        Auth.signIn({ username: infoUser.email, password: infoUser.password })
          .then(() => {
            window.location.href = window.location.origin;
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  }
  function resendCode() {
    Auth.resendSignUp(infoUser.username)
      .then(() => console.log("código reenviado"))
      .catch(err => console.error(err));
  }
  return (
    <div className={"tp-modal"}>
      <div className={"header"}>
        <img src={logo} alt={"Logo tripland"} />
      </div>

      <div className={"body"}>
        {confirmEmail ? (
          <div>
            <p>{t("forms.register.codeSent")}</p>
            <form
              onSubmit={confirmAccountRegister}
              id={"confirm-email-form"}
              style={{ transform: "translate(100%,0)" }}
            >
              <input
                id={"confirm-input"}
                type={"text"}
                name={"code-confirm"}
                className={"code-confirmation-input"}
                onChange={event => setCodeVerification(event.target.value)}
              />
              <ButtonTP
                contenido={t("forms.register.verify")}
                type={"submit"}
              />
            </form>
            <p>
              {t("forms.register.waitnPress")}{" "}
              <span className={"link"} onClick={resendCode}>
                {t("helpers.hereMinus")}
              </span>{" "}
              {t("forms.register.askAgain")}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={"tp-input-group"}>
              <label htmlFor={"user-email"}>{t("forms.login.mail")}</label>
              <input
                className={"rounded"}
                type={"email"}
                id={"user-email"}
                name={"user-email"}
                autoComplete={"email"}
                onChange={event => {
                  handleChange("email", event);
                  setErrores({
                    ...errores,
                    email: validations.checkEmail(event.target.value)
                  });
                  setEmailMessage(t("alerts.validMail"));
                }}
              />
              <span className={"error"}>
                {errores.email ? emailMessage : ""}
              </span>
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
                onChange={event => {
                  handleChange("password", event);
                  setErrores({
                    ...errores,
                    password: validations.checkPassword(event.target.value)
                  });
                }}
              />
              <span className={"error"}>
                {errores.password ? t("alerts.validPassword") : ""}
              </span>
            </div>
          
            <ButtonTP
              contenido={t("forms.register.register")}
              style={{
                backgroundColor: "#707070",
                color: "white",
                border: "none",
                marginTop: "8px",
                minHeight: "45px",
                width: "100%"
              }}
              type={"submit"}
            />
          </form>
        )}
      </div>
      <PrivatePolivyAndTerms/>
    </div>
  );
}
