import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
    const { cart, setCart } = useContext(TransactionContext)
    console.log(cart)
    function handleInputChange(event) {
        const { name, value } = event.target;
        setCart({ ...cart, [name]: value })
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment Method
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField required id="cardType" label="Card type" name='cardType' fullWidth autoComplete="cc-type" onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="cardName" label="Name on card" name='cardHolder' fullWidth autoComplete="cc-name" onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Card number"
                        name='cc'
                        fullWidth
                        autoComplete="cc-number"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="expDate" label="Expiry date" name='expDate' fullWidth autoComplete="cc-exp" onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        name='cvv'
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                        onChange={handleInputChange}
                    />
                </Grid>
                {/* <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember credit card details for next time"
                    />
                </Grid> */}
            </Grid>
        </React.Fragment>
    );
}