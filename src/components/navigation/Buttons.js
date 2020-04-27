import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import ListItem from "@material-ui/core/ListItem";

import LoginButton from "./buttons/Login";
import RegisterButton from "./buttons/Register";
import SignOutButton from "./buttons/SignOut";
import CreateRouteButton from "./buttons/CreateRoute";
import MyProfile from "./buttons/MyProfile";
import CommunityButton from "./buttons/Community";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexShrink: 0,
    },
    flexDirection: "row",
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Buttons(props) {
  const classes = useStyles();
  const { currentUser, setCurrentUser } = props;

  if (!currentUser) {
    return (
      <div className={classes.root}>
        <ListItem className={classes.listItem}>
          <LoginButton setCurrentUser={setCurrentUser} />
        </ListItem>
        <ListItem className={classes.listItem}>
          <RegisterButton setCurrentUser={setCurrentUser} />
        </ListItem>
      </div>
    );
  }
  return (
    <div className={classes.root}>
            <ListItem className={classes.listItem}>
        <CommunityButton />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CreateRouteButton />
      </ListItem>
      <ListItem className={classes.listItem}>
        <MyProfile currentUser={currentUser} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <SignOutButton setCurrentUser={setCurrentUser} />
      </ListItem>
    </div>
  );
}

export default Buttons;
