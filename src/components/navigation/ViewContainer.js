import React, {Suspense} from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "gainsboro",
    paddingTop: "var(--padding-top-view)",
    paddingLeft: "0",
    paddingRight: "0",
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
    <Container className={classes.root} maxWidth="lg">
      <Grid item xs={12} md={12}>
      <Suspense fallback="loading">
        <Toolbar className={classes.header}>{t(title)}</Toolbar>
        </Suspense>
      </Grid>
      <Grid item xs={12} md={12}>
        {children}
      </Grid>
    </Container>
  );
}

export default ViewContainer;
