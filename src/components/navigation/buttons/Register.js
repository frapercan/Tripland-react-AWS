import { useTranslation } from "react-i18next";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import RegisterForm from "../forms/RegisterForm";

const useStyles = makeStyles(theme => ({
  registerButton: {
    borderRadius: 25,
    border: "1px solid var(--main-color)",
    fontFamily: "var(--secondary-font)",
    color: "var(--main-color)",
    fontWeight: 700,
    minWidth: 150
  }
}));

function RegisterButton(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { setCurrentUser } = props;
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {t("dialogs.description.register")}
        </DialogTitle>
        <DialogContent>
          <RegisterForm setCurrentUser={setCurrentUser} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            {t("buttons.close")}
          </Button>
        </DialogActions>
      </Dialog>
      <Button className={classes.registerButton} onClick={handleClickOpen}>
        {t("buttons.register")}
      </Button>
    </div>
  );
}

export default RegisterButton;
