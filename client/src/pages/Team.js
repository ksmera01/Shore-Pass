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
}));

export default function EmployeeCards() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={6}>
                    <CardActionArea component="a" href="#">
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
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
                                <CardMedia className={classes.cardMedia} image="" title="" />
                            </Hidden>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item xs={6}>
                    <CardActionArea component="a" href="#">
                        <Card className={classes.card}>
                            <div className={classes.cardDetails}>
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
                                <CardMedia className={classes.cardMedia} image="" title="" />
                            </Hidden>
                        </Card>
                    </CardActionArea>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root} style={{ paddingTop: '75px' }}>
            <h1 style={{ textAlign: 'center' }}>Shore Pass Team</h1>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}