import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
    submitButton: {
        borderRadius: 25,
        border: "1px solid var(--main-color)",
        fontFamily: "var(--secondary-font)",
        color: "var(--tertiary-color)",
        backgroundColor:"var(--main-color)",
        fontWeight: 700,
        minWidth: 150,
    }
}));

function UploadPicture() {
    const classes = useStyles();
    const { t } = useTranslation()



    return (
        <React.Fragment>
            <Button className={classes.submitButton}>{t("buttons.AvatarChange").toUpperCase()}</Button>
        </React.Fragment>

    );
}

export default UploadPicture;