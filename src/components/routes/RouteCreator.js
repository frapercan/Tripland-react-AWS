import React from "react";

import { Container, Grid } from "@material-ui/core";
import RouteCreatorTabPanel from "./RouteCreatorTabPanel"

function RouteCreator(props) {
  return (
    <Container maxWidth="lg">
      <Grid
        style={{
          position: "relative",
          width: "100%",
          height: "35vh",
          paddingTop: "var(--padding-top-view)",
        }}>
        <div>
        <RouteCreatorTabPanel></RouteCreatorTabPanel>
        
        </div>
      </Grid>
    </Container>
  );
}

export default RouteCreator;
