import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Copyright from '../Copyright'


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
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
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

const footers = [
    {
        title: 'Shore Pass',
        description: [
            {
                linkText: 'Team',
                linkRoute: '/team'
            },
            {
                linkText: 'History',
                linkRoute: '',
            },
            {
                linkText: 'Contact us',
                linkRoute: '',
            },
        ],
    },
    {
        title: 'Resources',
        description: [
            {
                linkText: 'Resource',
                linkRoute: ''
            },
            {
                linkText: 'Resource name',
                linkRoute: '',
            },
            {
                linkText: 'Final resource',
                linkRoute: '',
            }
        ],
    },
    {
        title: 'Legal',
        description: [
            {
                linkText: 'Privacy policy',
                linkRoute: '/privacypolicy'
            },
            {
                linkText: 'Terms of use',
                linkRoute: ''
            }
        ],
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
                                <li key={item.linkText}>

                                    <Link children={item.linkText} href={item.linkRoute} variant="subtitle1" color="textSecondary">

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
