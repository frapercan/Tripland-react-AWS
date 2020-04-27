// import { Router, Route, Switch, Redirect } from "react-router-dom";
import React, { Suspense, useState, useEffect } from "react";
import uuid from "uuid/v4";
import Amplify, { Hub, API, graphqlOperation, Auth } from "aws-amplify";
import { Route, Switch, useHistory } from "react-router-dom";
import { getUser as GetUser } from "./graphql/queries";

import awsmobile from "./aws-exports";

import PrivateRoute from "./_helpers/PrivateRoute";
import ViewContainer from "./components/navigation/ViewContainer";
import "./App.css"; //variables
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import Home from "./components/navigation/Home";
import Header from "./components/navigation/Header";
import MobileMenu from "./components/navigation/MobileMenu";
import PassportForm from "./components/user/PassportForm";
import Community from "./components/user/Community";
import MapContainer from "./components/routes/Map";

import {
  createUser as CreateUser,
  createPassport as CreatePassport,
} from "./graphql/mutations";

Amplify.configure(awsmobile);

const useStyles = makeStyles((theme) => ({
  postHeader: {
    marginTop: "var(--header-height)",
  },
}));

function App(props) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );
  const classes = useStyles();
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Authentification related proccesses
  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          Auth.currentAuthenticatedUser().then((authUser) => {
            let attributes = authUser.attributes;
            fetch(attributes.sub).then((user) => {
              if (!user.data.getUser) {
                createUser(attributes).then((user) => {
                  user = user.data.createUser;
                  createPassport(user.passportID);
                  setCurrentUser(user);
                  localStorage.setItem("currentUser", JSON.stringify(user));
                  history.push("/");
                });
              } else {
                setCurrentUser(user.data.getUser);
                localStorage.setItem(
                  "currentUser",
                  JSON.stringify(user.data.getUser)
                );
                history.push("/");
              }
            });
          });
          break;
        default:
      }
    });
  }, [history]);
  console.log("proces", process.env.REACT_APP_MAPS);

  async function fetch(id) {
    try {
      return await API.graphql(graphqlOperation(GetUser, { id: id }));
    } catch (err) {
      console.log("errorFetch: ", err);
    }
  }

  async function createUser(attributes) {
    console.log(attributes);
    try {
      return await API.graphql(
        graphqlOperation(CreateUser, {
          input: {
            id: attributes.sub,
            email: attributes.email,
            passportID: uuid(),
          },
        })
      );
    } catch (err) {
      console.log("create error: ", err);
    }
  }

  async function createPassport(passportID) {
    console.log("attid", passportID);
    try {
      return await API.graphql(
        graphqlOperation(CreatePassport, {
          input: { id: passportID },
        })
      );
    } catch (err) {
      console.log("errorOnCreatePassport: ", err);
    }
  }
  //Navigation//
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  return (
    <div className={classes.root}>
      <Suspense fallback="loading">
        <Header
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        {mobileOpen && isSmallScreen ? (
          <MobileMenu
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        ) : (
          false
        )}

        {/* Navigation Routes*/}
        <CssBaseline />
        <div className={classes.postHeader}>
          <Switch>
            <Route exact path={`/home`} component={Home} />
            <PrivateRoute path="/me" exact>
              <ViewContainer title="sectionTitle.myPassport">
                <PassportForm
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
              </ViewContainer>
            </PrivateRoute>
            <PrivateRoute path="/" exact>
              <ViewContainer title="sectionTitle.community">
                <Community />
              </ViewContainer>
            </PrivateRoute>
            <PrivateRoute path="/route" exact>
                <MapContainer />
            </PrivateRoute>
          </Switch>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
