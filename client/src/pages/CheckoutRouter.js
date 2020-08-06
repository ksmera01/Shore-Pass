import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid'
import Copyright from '../components/Copyright'
import Accordian from '../components/Accordian'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    clearNav: {
        paddingTop: '10em',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));


export default function CheckoutRouter() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.clearNav}>
                <Grid container spacing={3}>
                    <Grid item md={2} />
                    <Grid item xs={12} md={8}>
                        <Accordian />
                    </Grid>
                    <Grid item md={2} />
                </Grid>
            </main>
            <Copyright />
        </React.Fragment >
    );
}