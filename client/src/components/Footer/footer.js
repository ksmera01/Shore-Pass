import React, { useState, useContext } from 'react';
// import { TransactionContext } from '../context/TransactionContext';
// import { useHistory } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardHeader from '@material-ui/core/CardHeader';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
// import Location from '../components/Location';

const useStyles = makeStyles((theme) => ({
    link: {
        margin: theme.spacing(1, 1.5),
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

const footers = [
    {
        title: 'Shore Pass',
        description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
        title: 'Pricing',
        description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
    },
];

export default function Footer() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" component="footer" className={classes.footer}>
            <Grid container spacing={4} justify="space-evenly">
                {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.description.map((item) => (
                                <li key={item}>
                                    <Link to="#" variant="subtitle1" color="textSecondary">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                ))}
            </Grid>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    )
}
