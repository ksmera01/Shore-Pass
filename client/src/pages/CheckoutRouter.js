import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
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
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    You're not logged in
          </Typography>
            </Paper>
            <main>

                <div>
                    <Accordian />
                </div>
            </main>
            <Copyright />
        </React.Fragment>
    );
}