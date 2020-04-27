import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import useStyles from "./PassportStyle";
import { S3Image } from "aws-amplify-react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Passport from "./Passport";

function PassportOverview(props) {
  const { passport } = props;
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.passportOverviewContainer}  >
      <Grid item xs={12} md={12} className={classes.passportOverviewContainer} onClick={handleOpen}>
        <S3Image
          imgKey={passport.avatar}
          level="public"
          className={classes.avatar}
        />
      </Grid>
      <Grid item xs={6} md={6} className={classes.inputContainer}>
        <div className={classes.attribute}>{passport.nickname}</div>
      </Grid>
      <div> {/* Detalles del pasaporte en un modal */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Passport passport={passport} />
            </div>
          </Fade>
        </Modal>
      </div>
    </Container>
  );
}
export default PassportOverview;
