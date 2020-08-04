import React, { useState, useContext } from 'react';
import API from '../../utils/API'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../context/UserContext'
import { useHistory, useLocation } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function LoginForm() {
    const classes = useStyles();
    const { user, setUser } = useContext(UserContext)

    // need to init useHistory and useLocation..
    let history = useHistory();
    let location = useLocation();

    // submitting form function
    const [login, setLogin] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setLogin({ ...login, [name]: value })
    };

    async function handleFormSubmit(event) {
        event.preventDefault();
        if (login.email && login.password) {
            await API.login(login)
                .then(res => {
                    console.log(res)
                    localStorage.setItem("user_id_SP", JSON.stringify(res.data._id));
                    setUser(res.data)
                })
                .catch(err => console.log(err));
        }
        (location.pathname === '/checkout' ? history.push('/transaction') : history.push('/dashboard'))
    };


    return (
        <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleInputChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                style={{ background: '#43c8c5' }}
                onClick={(e) => handleFormSubmit(e)}
            >
                Sign In
</Button >
            <Grid container>
                <Grid item xs>
                    {/* <Link href="/Dashboard" variant="body2">
            Forgot password?
</Link> */}
                </Grid>
                <Grid item>
                    <Link href="/sign-up" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
            {/* <Box mt={5}>
                <Copyright />
            </Box> */}
        </form>
    )
}

export default LoginForm;