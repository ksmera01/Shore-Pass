import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
    { name: 'Beach Tag', desc: 'Sea Isle (weekly)', price: '$9.99' },
    { name: 'Shipping', desc: '', price: 'Free' },
]

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review() {
    const { cart, setCart } = useContext(TransactionContext)
    console.log(cart)
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order Summary
      </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        $68.96
          </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Shipping
          </Typography>
                    <Typography gutterBottom>{cart.firstName} {cart.lastName}</Typography>
                    <Typography gutterBottom>{cart.address1}</Typography>
                    <Typography gutterBottom>{cart.address2}</Typography>
                    <Typography gutterBottom>{cart.city}, {cart.state}, {cart.zip}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom className={classes.title}>
                        Payment Details
          </Typography>
                    <Grid container>
                        <React.Fragment key={cart.cardHolder}>
                            <Grid item xs={12}>
                                <Typography gutterBottom>Card type: {cart.cardType}</Typography>
                            </Grid>
                        </React.Fragment>
                        <React.Fragment>
                            <Grid item xs={12}>
                                <Typography gutterBottom>Card holder: {cart.cardHolder}</Typography>
                            </Grid>
                        </React.Fragment>
                        <React.Fragment>
                            <Grid item xs={12}>
                                <Typography gutterBottom>Card number: {cart.cc}</Typography>
                            </Grid>
                        </React.Fragment>
                        <React.Fragment>
                            <Grid item xs={12}>
                                <Typography gutterBottom>Expiry date: {cart.expDate}</Typography>
                            </Grid>
                        </React.Fragment>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}