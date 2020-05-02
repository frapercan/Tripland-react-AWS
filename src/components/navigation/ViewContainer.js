import React, {Suspense} from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "var(--tertiary-color)",
    paddingTop: "10vh",
    paddingLeft: "0",
    paddingRight: "0",
    height:"120vh"
  },
  header: {
    backgroundColor: "var(--secondary-color)",
    color: "white",
    textTransform: "uppercase",
    fontFamily: "var(--main-font)",
    fontWeight: "bold",
    fontSize: "18px",
    display: "flex",
    flex: "auto",
    justifyContent: "center",
    marginBottom: 32,
  },
}));

function ViewContainer({ children, title }) {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Container className={classes.root} maxWidth="lg" style={{paddingLeft:"0px",paddingRight:"0px"}}>
      <Grid item xs={12} md={12}>
      <Suspense fallback="loading">
        <Toolbar className={classes.header}>{t(title)}</Toolbar>
        </Suspense>
      </Grid>
      <Grid item xs={12} md={12} style={{paddingLeft:"0px",paddingRight:"0px"}}>
        {children}
      </Grid>
    </Container>
  );
}

export default ViewContainer;
