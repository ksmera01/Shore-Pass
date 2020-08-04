import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext'
import { useHistory, useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import API from '../../utils/API'

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Register() {
    const classes = useStyles();
    const { user, setUser } = useContext(UserContext)

    // need to init useHistory and useLocation..
    let history = useHistory();
    let location = useLocation();

    // submitting form function
    const [signUp, setSignUp] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSignUp({ ...signUp, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (signUp.firstName && signUp.lastName && signUp.password && signUp.email) {
            console.log(signUp)
            API.createNewUser(signUp)
                .then(res => {
                    console.log(res)
                    setUser(res.data)
                })
                .then(history.push('/transaction'))
                .catch(err => console.log(err));
        }
    };

    return (
        <div>
            <Typography component="h1" variant="h5">
                Sign up
        </Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={(e) => handleFormSubmit(e)}
                    className={classes.submit}
                    style={{ background: '#43c8c5' }}
                >
                    Sign Up
          </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link href="/login" variant="body2">
                            Already have an account? Sign in
              </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}