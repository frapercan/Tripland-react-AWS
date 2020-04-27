import React from "react";
import "./Home.css";

import { Container, Grid } from '@material-ui/core';

import travelIcon from "../../assets/images/icono_travel.png";
import meetIcon from "../../assets/images/meet_icon.svg";
import expertIcon from "../../assets/images/star_map.svg";

import {  withTranslation } from "react-i18next";
import LoginButton from "../navigation/buttons/Login"

class LegacyHome extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div className="Home">
        <div className={"Portada"}>
        <div className={"title"}>{t("home.title")}</div>
        <div className={"description"}>{t("home.joinUs")}<br/>{t("home.beFast")}</div>

        <LoginButton/>

        </div>
        <Container maxWidth='xl' className={"Iconos"}>
        <Grid container direction='row'>
        <Grid item className={"item"} xs={12} md={4}>
            <div
              className={"icon"}
              style={{ backgroundImage: `url(${travelIcon})` }}
            ></div>
            <div className={"title"}>{t("home.titleFirstItem")}</div>
            <div className={"description"}>
              {t("home.descriptionFirstItem")}
            </div>
          </Grid>
          <Grid  item className={"item"} xs={12} md={4}>
            <div
              className={"icon"}
              style={{ backgroundImage: `url(${meetIcon})` }}
            ></div>
            <div className={"title"}>{t("home.titleSecondItem")}</div>
            <div className={"description"}>
              {t("home.descriptionSecondItem")}
            </div>
          </Grid>
          <Grid item className={"item"} xs={12} md={4}>
            <div
              className={"icon"}
              style={{ backgroundImage: `url(${expertIcon})` }}
            ></div>
            <div className={"title"}>{t("home.titleThirdItem")}</div>
            <div className={"description"}>
              {t("home.descriptionThirdItem")}
            </div>
          </Grid>
          </Grid>
        </Container>
        <div className={"lastRoutes"}>
          <div className={"homeTitle"}> {t("home.lastRoutes")}</div>
        </div>
      </div>
    );
  }
}

const Home = withTranslation()(LegacyHome);
export default Home;
