import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

import { S3Image } from "aws-amplify-react";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    borderRadius: 25,
    border: "1px solid var(--main-color)",
    fontFamily: "var(--secondary-font)",
    textTransform: "uppercase",
    backgroundColor: "var(--main-color)",
    fontWeight: 700,
    minWidth: 150,
    color: "#fafafa",
    display:"flex"
  },
  avatar: {
    display:"flex",
    width: 25,
    height: 25,
    paddingLeft: 5,
    objectFit: 'cover',
    borderRadius: '50%',
}
}));

function MyProfile(props) {
  const { currentUser } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
        <Link to={"/me"}>
      <Button className={classes.submitButton}>
        {t("buttons.myProfile").toUpperCase()}
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
      </Button>
      </Link>
    </div>
  );
}

export default MyProfile;
