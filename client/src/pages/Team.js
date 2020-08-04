import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ProfileImage from '../Media/beachtags.jpg'
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '50%',
        maxHeight: '70%',
        borderRadius: '50%'
    },
}));

export default function EmployeeCards() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={6}>
                    <CardActionArea component="a" href="#">
                        <Card>
                            <div>
                                <img className={classes.img} alt="complex" src={ProfileImage} />
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        Team Member
                            </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        GitHub
                            </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        Bio
                            </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6}>
                    <CardActionArea component="a" href="#">
                        <Card>
                            <div>
                                <img className={classes.img} alt="complex" src={ProfileImage} />
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        Team Member
                            </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        GitHub
                            </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        Bio
                            </Typography>
                                </CardContent>
                            </div>
                            <Hidden xsDown>
                                <CardMedia image="" title="" />
                            </Hidden>
                        </Card>
                    </CardActionArea>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div style={{ paddingTop: '75px' }}>
            <h1 style={{ textAlign: 'center', fontFamily: 'Playfair Display SC' }}>Shore Pass Team</h1>
            <Grid container spacing={4}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}