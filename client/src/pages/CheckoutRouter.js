import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
// import API from '../utils/API';
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
    const { cart } = useContext(TransactionContext)
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