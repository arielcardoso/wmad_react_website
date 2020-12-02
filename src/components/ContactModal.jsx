import React, { forwardRef, useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '2rem',
    width: '90%',
    maxWidth: '500px',
  },
}));

const ContactModal = forwardRef((props, ref) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  useImperativeHandle(
    ref,
    () => ({
        handleContactModal() {
          handleOpen()
        }
     }),
  )

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} >
            <Typography variant="h4" component="h4" gutterBottom>CONTACT</Typography>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form action="post">
              <TextField id="fullName" label="Fullname" fullWidth />
              <TextField id="email" label="Email" fullWidth />
              <TextField id="phone" label="Phone" fullWidth />
              <TextField id="subject" label="Subject" fullWidth />
              <TextField id="message" label="Message" fullWidth />
              <Button type="submit" variant="contained" color="primary" >SEND MESSAGE</Button>
            </form>
          </div>
        </Fade>
        </Modal>
    </div>
  );
});

export default ContactModal;