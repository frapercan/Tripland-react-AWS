import React from "react";
import { Container, Grid } from "@material-ui/core";
import useStyles from "./PassportStyle";
import Toolbar from "@material-ui/core/Toolbar";
import { useTranslation } from "react-i18next";
import { S3Image } from "aws-amplify-react";

function Passport(props) {
  const { passport } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container className={classes.rootPassport}>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        className={classes.passport}
        direction="row"
      >
        <Grid item xs={12} md={12}>
          <Toolbar className={classes.header}>{t('sectionTitle.userPassport',{nickname:passport.nickname})}</Toolbar>
        </Grid>
        <Grid item xs={12} md={12} className={classes.inputContainer}>
          <S3Image
            imgKey={passport.avatar}
            level="public"
            className={classes.avatar}
          />
        </Grid>
        {passport.name ? (
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label>{t("passport.name")}</label>
            <div className={classes.attribute}>{passport.name}</div>
          </Grid>
        ) : (
          <Grid item xs={12} md={6} className={classes.inputContainer}></Grid>
        )}
        {passport.surname ? (
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label>{t("passport.surname")}</label>
            <div className={classes.attribute}>{passport.surname}</div>
          </Grid>
        ) : (
          <Grid item xs={12} md={6} className={classes.inputContainer}></Grid>
        )}
        {passport.country ? (
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label>{t("passport.country")}</label>
            <div className={classes.attribute}>{passport.country}</div>
          </Grid>
        ) : (
          <Grid item xs={12} md={6} className={classes.inputContainer}></Grid>
        )}
        {passport.location ? (
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label>{t("passport.location")}</label>
            <div className={classes.attribute}>{passport.location}</div>
          </Grid>
        ) : (
          <Grid item xs={12} md={6} className={classes.inputContainer}></Grid>
        )}
        {passport.birthday ? (
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label>{t("passport.birthday")}</label>
            <div className={classes.attribute}>{passport.birthday}</div>
          </Grid>
        ) : (
          <Grid item xs={12} md={6} className={classes.inputContainer}></Grid>
        )}
        {passport.gender ? (
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label>{t("passport.gender")}</label>
            <div className={classes.attribute}>{passport.gender}</div>
          </Grid>
        ) : (
          <Grid item xs={12} md={6} className={classes.inputContainer}></Grid>
        )}
        {passport.gender ? (
          <Grid item xs={12} md={6} className={classes.inputContainer}>
            <label>{t("passport.description")}</label>
            <div className={classes.descriptionView}>{passport.description}</div>
          </Grid>
        ) : (
          <Grid item xs={12} md={6} className={classes.inputContainer}></Grid>
        )}
      </Grid>
    </Container>
  );
}
export default Passport;
