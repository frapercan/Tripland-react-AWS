import React, { useRef } from "react";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { useTranslation } from "react-i18next";
import uuid from "uuid/v4";

import {
  updateUser as UpdateUser,
  updatePassport as UpdatePassport,
} from "../../graphql/mutations";
import { Container, Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import SubmitPassport from "../navigation/buttons/SubmitPassport";
import Visibility from "./Visibility";

import UploadPicture from "../navigation/buttons/UploadPicture";
import { S3Image } from "aws-amplify-react";
import { FaEyeSlash } from "react-icons/fa";

import useStyles from "./PassportStyle";
import CleanDictionary from "../../_helpers/dictionaries"

import { useForm } from "react-hook-form";

function PassportForm(props) {
  const { currentUser, setCurrentUser } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const avatarInput = useRef("");
  const { register, triggerValidation, setValue, getValues, errors } = useForm({
    validateCriteriaMode: "all",
    defaultValues: {
      nickname: currentUser.nickname,
      email: currentUser.email,
      name: currentUser.name,
      surname: currentUser.surname,
      birthday: currentUser.birthday,
      country: currentUser.country,
      location: currentUser.location,
      gender: currentUser.gender,
      avatar: currentUser.avatar,
      description: currentUser.description,
      nameVisibility: currentUser.nameVisibility,
      surnameVisibility: currentUser.surnameVisibility,
      birthdayVisibility: currentUser.birthdayVisibility,
      countryVisibility: currentUser.countryVisibility,
      locationVisibility: currentUser.locationVisibility,
      genderVisibility: currentUser.genderVisibility,
    },
  });

  const handleAvatar = () => (event) => {
    try {
      const {
        target: { files },
      } = event;
      const fileForUpload = files[0];
      const filename = fileForUpload.name.split(".")[0];
      const extension = fileForUpload.name.split(".")[1];
      const { type: mimeType } = fileForUpload;
      const key = `images/${uuid()}${filename}.${extension}`;
      uploadAvatar(fileForUpload, key, mimeType).then(() => {
        setValue("avatar", key);
        setCurrentUser({ ...currentUser, avatar: key });
      });
    } catch (error) {
      console.log("error on handleAvatar:", handleAvatar);
    }
  };
  function triggerInput() {
    avatarInput.current.click();
  }

  async function uploadAvatar(file, key, mimeType) {
    try {
      await Storage.put(key, file, {
        level: "public",
        contentType: mimeType,
        resize: {
          width: 600,
          height: 600,
          strategy: "auto",
        },
      });
    } catch (err) {
      console.log("errorupload: ", err);
    }
  }

  function submit() {
    generatePassportFromForm().then((passport) => {
      triggerValidation().then((success) => {
        if (success) {
          console.log('currentuser',currentUser)
          updatePassport(passport)

        }
      });
    });
  }

  // updateUser().then(alert(t("alerts.updateSuccess"))) : false
  async function updateUser(user) {
    delete user.passport
    delete user.owner
    CleanDictionary(user)

    console.log('esteuserllega',user)
    try {
      await API.graphql(
        graphqlOperation(UpdateUser, {
          input: user,
        })
      );
    } catch (err) {
      console.log("errorUpdateUser: ", err);
    }
  }

  async function updatePassport(passport) {
    console.log('suprimo')
    console.log({...passport,id:currentUser.passportID})
    try {
      await API.graphql(
        graphqlOperation(UpdatePassport, {
          input: {...passport,id:currentUser.passportID},
        })
      ).then(alert(t("alerts.passportUpdateSuccess")));
    } catch (err) {
      console.log("errorOnUpdatePassport: ", err);
      alert(t("alerts.passportUpdateError"))
    }
  }



  async function generatePassportFromForm() {
    let form = { ...getValues() };
    let user = { ...currentUser, ...form }
    console.log('thisuser',user)
    setCurrentUser(user);
    updateUser(user)
    localStorage.setItem("currentUser",JSON.stringify(user));
    if (!form.nameVisibility) {
      delete form.name;
    }
    if (!form.surnameVisibility) {
      delete form.surname;
    }
    if (!form.birthdayVisibility) {
      delete form.birthday;
    }
    if (!form.countryVisibility) {
      delete form.country;
    }
    if (!form.locationVisibility) {
      delete form.location;
    }
    if (!form.genderVisibility) {
      delete form.gender;
    }

    delete form.email;
    delete form.nameVisibility;
    delete form.surnameVisibility;
    delete form.surnamenameVisibility;
    delete form.birthdayVisibility;
    delete form.countryVisibility;
    delete form.locationVisibility;
    delete form.genderVisibility;

    CleanDictionary(form)
    return form;
  }

  

  return (
    <Container className={classes.rootForm} maxWidth="md">
      <form>
        <Grid container justify="space-around" alignItems="center">


          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label htmlFor="nickname">{t("passport.nickname")}</label>
            <br />
            <input
              type="text"
              placeholder="nickname"
              name="nickname"
              ref={register({ required: true, maxLength: 15, minLength: 4 })}
              className={classes.profileInput}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            {currentUser.avatar ? (
              <React.Fragment>
                <S3Image
                  imgKey={currentUser.avatar}
                  level="public"
                  className={classes.avatar}
                />
              </React.Fragment>
            ) : (
              <div className={classes.container}>
                <Avatar className={classes.avatar} />
              </div>
            )}
            <div onClick={triggerInput}>
              <UploadPicture />
            </div>
            <input
              ref={avatarInput}
              type="file"
              hidden
              onChange={handleAvatar("avatar")}
            />
            <input ref={register} type="text" name="avatar" hidden />
          </Grid>
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label htmlFor="name">
              {t("passport.name")}{" "}
              <input
                type="checkbox"
                placeholder="nameVisibility"
                name="nameVisibility"
                ref={register}
              />
              <Visibility />
            </label>
            <br />

            <input
              type="text"
              name="name"
              className={classes.profileInput}
              ref={register}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label htmlFor="surname">
              {t("passport.surname")}{" "}
              <input
                type="checkbox"
                placeholder="surnameVisibility"
                name="surnameVisibility"
                ref={register}
              />
              <Visibility />
            </label>
            <br />

            <input
              type="text"
              name="surname"
              className={classes.profileInput}
              ref={register}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label htmlFor="birtday">
              {t("passport.birthday")}{" "}
              <input
                type="checkbox"
                placeholder="birthdayVisibility"
                name="birthdayVisibility"
                ref={register}
              />
              <Visibility />
            </label>
            <br />

            <input
              type="date"
              name="birthday"
              className={classes.profileInput}
              ref={register}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            {t("passport.gender")}{" "}
            <input
              type="checkbox"
              placeholder="genderVisibility"
              name="genderVisibility"
              ref={register}
            />
            <Visibility />
            <br />
            <label>{t("passport.female")}</label>
            <input name="gender" type="radio" value="female" ref={register} />
            <label>{t("passport.male")}</label>
            <input name="gender" type="radio" value="male" ref={register} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label htmlFor="country">
              {t("passport.country")}{" "}
              <input
                type="checkbox"
                placeholder="countryVisibility"
                name="countryVisibility"
                ref={register}
              />
              <Visibility />
            </label>
            <br />
            <input
              type="text"
              name="country"
              ref={register}
              className={classes.profileInput}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label htmlFor="location">
              {t("passport.location")}{" "}
              <input
                type="checkbox"
                placeholder="locationVisibility"
                name="locationVisibility"
                ref={register}
              />
              <Visibility />
            </label>
            <br />
            <input
              type="text"
              name="location"
              ref={register}
              className={classes.profileInput}
            />
          </Grid>
          <Grid item xs={12} md={12} className={classes.inputContainer}>
            <label htmlFor="description">{t("passport.description")}</label>
            <br />

            <textarea
              name="description"
              className={classes.description}
              ref={register({ maxLength: 500, minLength: 5 })}
            />
          </Grid>
          <Grid item xs={12} md={12} className={classes.inputContainer}>
            <label htmlFor="email">
              {t("passport.email")} <FaEyeSlash />
            </label>
            <br />

            <input
              disabled
              type="text"
              name="email"
              className={classes.profileInput}
              ref={register({ required: true })}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <div className={classes.errors}>
              {errors.nickname && errors.nickname.types.required && (
                <p>{t("errors.nickname.required")}</p>
              )}
              {errors.nickname && errors.nickname.types.minLength && (
                <p>{t("errors.nickname.minLength")}</p>
              )}
              {errors.nickname && errors.nickname.types.maxLength && (
                <p>{t("errors.nickname.maxLength")}</p>
              )}
              {errors.birthday && errors.birthday.types.required && (
                <p>{t("errors.birthday.required")}</p>
              )}
              {errors.country && errors.country.types.required && (
                <p>{t("errors.country.required")}</p>
              )}
              {errors.location && errors.location.types.required && (
                <p>{t("errors.location.required")}</p>
              )}
              {errors.gender && errors.gender.types.required && (
                <p>{t("errors.gender.required")}</p>
              )}
            </div>
            <div onClick={submit}>
              <SubmitPassport />
            </div>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default PassportForm;
