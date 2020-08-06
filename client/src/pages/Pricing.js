import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { UserContext } from '../context/UserContext'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Location from '../components/Location';
import Footer from '../components/Footer/footer';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.info.light : theme.palette.info.light,
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const tiers = [
    {
        title: 'Day',
        price: '5.00',
        id: '0',
        description: ['Valid for Day of Purchase'],
        buttonText: 'Select Day Tag',
        buttonVariant: 'outlined',
    },
    {
        title: 'Weekly',
        price: '10.00',
        id: '1',
        description: ['Valid for Week of Purchase'],
        buttonText: 'Select Weekly Tag',
        buttonVariant: 'outlined',
    },
    {
        title: 'Seasonal',
        price: '25.00',
        id: '2',
        description: ['Valid for Season of Purchase'],
        buttonText: 'Select Seasonal Tag',
        buttonVariant: 'outlined',
    },
];


export default function Pricing() {
    const classes = useStyles();
    const { cart, setCart } = useContext(TransactionContext)
    const { user } = useContext(UserContext)
    // need to init useHistory..
    let history = useHistory();


    console.log(user)
    async function handleFormSubmit({ title, price, id, description }) {
        if (!cart.location) {
            return alert('You must select a beach location')
        }
        console.log(cart);
        await setCart({ ...cart, title, price, id, description })
        if (user._id) {
            history.push("/transaction")
        } else {
            history.push('/checkout')
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />

            {/* Hero unit */}
            <Container maxWidth="sm" component="main" className={classes.heroContent} style={{ paddingTop: '100px' }}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Pricing
        </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Choose your beach, select a tag, & enjoy your time at the shore!
        </Typography>

                <Location
                    setCart={setCart}
                    cart={cart} />

            </Container>
            {/* End hero unit */}

            <Container maxWidth="md" component="main" >
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    style={{ background: '#43c8c5' }}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ${tier.price}
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth variant={tier.buttonVariant} color="primary" onClick={() => handleFormSubmit({
                                        title: tier.title,
                                        price: tier.price,
                                        id: tier.id,
                                        description: tier.description,
                                    })}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* Footer */}
            <Footer />
            {/* End footer */}
        </React.Fragment>
    );
}