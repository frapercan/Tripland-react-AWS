import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    CreateRouteButton: {
        borderRadius: 25,
        border: "1px solid var(--main-color)",
        fontFamily: "var(--secondary-font)",
        textTransform: "uppercase",
        backgroundColor: "var(--main-color)",
        fontWeight: 700,
        minWidth: 150,
        color: "#fafafa"
    }
}));

function CreateRouteButton() {
    const classes = useStyles();
    const { t } = useTranslation()



    return (
        <Link to={"/route"}>
            <Button className={classes.CreateRouteButton}>

                {t("buttons.createRoute")}

            </Button>
        </Link>
    );
}

export default CreateRouteButton;