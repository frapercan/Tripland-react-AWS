import { useTranslation } from "react-i18next";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Login from "../../navigation/Login"


const useStyles = makeStyles(theme => ({
  loginButton: {
    borderRadius: 25,
    border: "1px solid var(--main-color)",
    fontFamily: "var(--secondary-font)",
    textTransform: "uppercase",
    backgroundColor: "var(--main-color)",
    fontWeight: 700,
    minWidth: 150,
    color: "#fafafa"
  },
  title: {
    display: "flex",
    justifyContent: "center"
  }, 
  content: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "center"
  }
}));

function LoginButton(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { t } = useTranslation()

  const [open, setOpen] = React.useState(false);
  const { setCurrentUser } = props
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
        <DialogTitle id="responsive-dialog-title" className={classes.title}>
          {t("dialogs.description.login")}
        </DialogTitle>
        <DialogContent className={classes.content}>
          <Login setCurrentUser={setCurrentUser} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            {t('buttons.close')}
          </Button>
        </DialogActions>
      </Dialog>
      <Button className={classes.loginButton} onClick={handleClickOpen}>{t("buttons.login")}</Button>
    </div>
  );
}

export default LoginButton;
