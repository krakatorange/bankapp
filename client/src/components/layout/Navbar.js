import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import RegisterButton from '../RegisterButton';
import LoginButton from '../LoginButton';

import { Link, Router } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  const [open_r, setOpen_r] = React.useState(false);

  const handleClickOpen_r = () => {
    setOpen_r(true);
  };

  const handleClose_r = () => {
    setOpen_r(false);
    setName('');
    setEmail('');
    setPass('');
    setPass2('');
  };

  const [open_l, setOpen_l] = React.useState(false);

  const handleClickOpen_l = () => {
    setOpen_l(true);
  };

  const handleClose_l = () => {
    setOpen_l(false);
    setEmailLogin('');
    setPassLogin('');
  };

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')
  const [pass2, setPass2] = React.useState('')

  const [emailLogin, setEmailLogin] = React.useState('')
  const [passLogin, setPassLogin] = React.useState('')

  return (
    <div className="App">
<AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BankApp: A Simple Web-Based Banking Application
          </Typography>

          <Button color="inherit" variant="outlined" onClick={handleClickOpen_r}>
            Register
          </Button>
          <Dialog open={open_r} onClose={handleClose_r} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Register</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter your information below to register.
              </DialogContentText>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="dense"
                id="name"
                label="Full Name"
                type="string"
                fullWidth
              />
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
              <TextField
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                margin="dense"
                id="name"
                label="Password"
                type="password"
                fullWidth
              />
              <TextField
                value={pass2}
                onChange={(e) => setPass2(e.target.value)}
                margin="dense"
                id="confirm_password"
                label="Confirm Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose_r} color="primary">
                Cancel
              </Button>
              <RegisterButton onClick={handleClose_r} name={name} 
                                                      email={email} 
                                                      pass={pass} 
                                                      pass2={pass2} />
            </DialogActions>
          </Dialog>

          &nbsp;&nbsp;

          <Button color="inherit" variant="outlined" onClick={handleClickOpen_l}>
            Login
          </Button>
          <Dialog open={open_l} onClose={handleClose_l} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter your banking credentials below.
              </DialogContentText>
              <TextField
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
              <TextField
                value={passLogin}
                onChange={(e) => setPassLogin(e.target.value)}
                margin="dense"
                id="name"
                label="Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose_l} color="primary">
                Cancel
              </Button>
              <LoginButton onClick={handleClose_l} email={emailLogin} 
                                                      pass={passLogin} />
            </DialogActions>
          </Dialog>

        </Toolbar>
      </AppBar>
      </div>
      );
    }
    
    export default Navbar;