import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { TransactionContext } from '../context/TransactionContext';
import { UserContext } from '../context/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import API from '../utils/API';
import Grid from '@material-ui/core/Grid';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
                ShorePass
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    returnHome: {
        display: 'flex',
        justifyContent: 'center'
    },
    img: {
        maxHeight: '20em',
        display: 'block',
        maxWidth: '20em',
        overflow: 'hidden',
    },
}));

const steps = ['Billing address', 'Payment details', 'Review your order'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Transaction() {
    const { cart } = useContext(TransactionContext)
    const { user } = useContext(UserContext)
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [confirmation, setConfirmation] = useState()

    const handleNext = async () => {
        // Less than ideal way to validate if all fields are completed on billing form
        if (activeStep === 0) {
            if (cart.firstName && cart.lastName && cart.state && cart.zip && cart.city && cart.address1) {
                return setActiveStep(activeStep + 1);
            } else {
                return alert('Please fill in all required fields')
            }
        }
        // Less than ideal way to validate if all fields are completed on payment form
        if (activeStep === 1) {
            if (cart.cardType && cart.cardHolder && cart.cc && cart.cvv && cart.expDate) {
                return setActiveStep(activeStep + 1);
            } else {
                return alert('Please fill in all required fields')
            }
        }
        // Check if its the step before the final confirmation page step and post the transaction, route the user according to success or failure
        if (activeStep === steps.length - 1) {
            await API.placeOrder(cart)
                .then(res => {
                    console.log(res.data)
                    setConfirmation(res.data)
                    setActiveStep(activeStep + 1);
                })
                .catch(err => {
                    console.log(err)
                    alert('There has been an error placing your order, please start over');
                    return window.location.href = '/pricing'
                })
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout} style={{ paddingTop: '50px' }}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
          </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}  >
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Grid container direction="column"
                                    justify="center"
                                    alignItems="center" spacing={1}>

                                    <Grid item xs={12}>
                                        <Typography variant="h5" gutterBottom>
                                            Thank you for your order.
                </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {confirmation._id &&
                                            <Paper>
                                                <img className={classes.img} src={`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=https://shore-pass.herokuapp.com/check?${confirmation._id}`} alt={`QR code: ${confirmation.name}`} />
                                            </Paper>
                                        }
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle1">
                                            Your order is confirmed. We have emailed your order confirmation.
                                    <Button href="/dashboard" className={classes.returnHome} style={{ background: '#43c8c5', textAlign: 'center' }} >Go To Dashboard</Button>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className={classes.buttons}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} className={classes.button} style={{ background: '#43c8c5', color: '#FFFFFF' }}>
                                                Back
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                            style={{ background: '#43c8c5' }}
                                        >
                                            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                    </React.Fragment>
                </Paper>
                <Copyright />
            </main>
        </React.Fragment>
    );
}