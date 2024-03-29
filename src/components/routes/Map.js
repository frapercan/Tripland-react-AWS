import React from "react";
import { Map, /* InfoWindow, Marker, */ GoogleApiWrapper } from "google-maps-react";
import { Container, Grid } from "@material-ui/core";

export function MapContainer(props) {

  return (
    <Container  maxWidth="xl" style={{paddingLeft:"0px",paddingRight:"0px"}}>
      <Grid style={{position: 'relative',width:"100%",height:"45vh",paddingTop: "var(--padding-top-view)", paddingLeft:"0px"}}>
        <Map google={props.google} zoom={14}></Map>
      </Grid>
    </Container>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS,
})(MapContainer);
