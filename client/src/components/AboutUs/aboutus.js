import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

export default function AboutUs() {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    About Us
          </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Shore Pass allows you to easily find, purchase, view and present your shore tags right on your mobile device! No more losing or forgetting your tags at home!
          </Typography>
                <div className={classes.heroButtons} >
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button href="/sign-up" variant="contained" style={{ background: '#43c8c5' }} color="primary">
                                Sign Up
                </Button>
                        </Grid>
                        <Grid item>
                            <Button href="/login" variant="contained" style={{ background: '#43c8c5' }} color="primary">
                                Log In
                </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}
