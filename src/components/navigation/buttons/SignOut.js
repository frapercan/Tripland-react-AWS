import { useTranslation } from "react-i18next";
import { makeStyles} from "@material-ui/core/styles";
import React from "react";
import Button from "@material-ui/core/Button";
import { Auth } from "aws-amplify"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles(theme => ({
    signOutButton: {
        borderRadius: 25,
        border: "1px solid var(--main-color)",
        fontFamily: "var(--secondary-font)",
        color: "var(--main-color)",
        fontWeight: 700,
        minWidth: 150,
    }
}));

function SignOutButton(props) {
    const classes = useStyles();
    const { t } = useTranslation()

    const {setCurrentUser } = props;


    const handleSignOut = () => {
        setCurrentUser(false);
        Auth.signOut();
        localStorage.clear();

    };

    return (
        <div>
            <Button className={classes.signOutButton} onClick={handleSignOut}><ExitToAppIcon/>{t("buttons.exit").toUpperCase()}</Button>
        </div>
    );
}

export default SignOutButton;