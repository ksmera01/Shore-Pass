import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import API from '../../utils/API'

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

export default function MenuAppBar() {
  const classes = useStyles();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // This async function is called within useEffect to check if there is a current user or not
  const checkAuth = async () => {
    let bool = await (JSON.parse(localStorage.getItem('user_id_SP')) ? true : false)
    setAuth(bool)
  }
  useEffect(() => {
    checkAuth()
  })

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (url) => {
    setAnchorEl(null);
    window.location.href = url
  };

  const logoutUser = async () => {
    // e.preventDefault();
    await localStorage.removeItem('user_id_SP')
    API.logout(res => {
      console.log(res)
    })
    // window.location.href = '/';
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shore Pass
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >

              <MenuItem onClick={() => handleClose('/')}>Home</MenuItem>
              {!auth && (
                <div>
                  <MenuItem onClick={() => handleClose('/login')}>Login</MenuItem>
                  <MenuItem onClick={() => handleClose('/sign-up')}>Sign Up</MenuItem>
                </div>
              )}
              {auth && (
                <div>
                  <MenuItem onClick={() => handleClose('/dashboard')}>My Tags</MenuItem>
                  <MenuItem onClick={() => handleClose('/account')}>Account</MenuItem>
                  <MenuItem onClick={() => logoutUser()}>Logout</MenuItem>
                </div>
              )}
            </Menu>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
