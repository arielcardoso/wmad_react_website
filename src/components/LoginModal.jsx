import React, { forwardRef, useImperativeHandle } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

const LoginModal = forwardRef((props, ref) => {

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

  const CustomDialogTitle = ((props) => {
    const { children, onClose } = props;
    return (
      <MuiDialogTitle disableTypography className='custom-dialog-title' >
        <div className="title">{children}</div>
        {onClose ? (
          <IconButton aria-label="close" className='close-button' onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  return (
    <div>
      <Dialog open={open} onClose={handleOpen} aria-labelledby="form-dialog">
        <form>
          <CustomDialogTitle onClose={handleOpen}>LOGIN</CustomDialogTitle>
          <DialogContent>
            <TextField id="loginUsername" label="Username" fullWidth />
            <TextField id="loginPassword" label="Password" fullWidth />
            <a href="/" className="forgot-password">Forgot password?</a>
          </DialogContent>
          <DialogActions>
            <Button fullWidth onClick={handleOpen} type="submit" variant="contained" color="primary">LOGIN</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
});

export default LoginModal;