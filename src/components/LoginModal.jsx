import React, { forwardRef, useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
  },
}));

const LoginModal = forwardRef((props, ref) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  useImperativeHandle(
    ref,
    () => ({
        handleLoginModal() {
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
            <h2>LOGIN</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form action="post" >
              <div className="row">
                  <div className="col-1">
                      <input type="text" placeholder="Username" />
                  </div>
              </div>
              <div className="row">
                  <div className="col-1">
                      <input type="text" placeholder="Password" />
                  </div>
              </div>
              <hr/>
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
});

export default LoginModal;