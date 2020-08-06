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
import Kevin from '../Media/kevin.jpeg'
import Tito from '../Media/tito.png'
import Taneisha from '../Media/taneisha.jpeg'
import Kait from '../Media/kait.jpeg'

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
                <Grid item>
                    <CardActionArea component="a" href="https://github.com/ejlopez44" target="blank">
                        <Card>
                            <div>
                                <img style={{ paddingTop: '10px' }} className={classes.img} alt="complex" src={Tito} />
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        Tito Lopez
                            </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Click card for GitHub!
                            </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        I'm Ernesto from Philly. I like motorcycles and javascript. Enjoy our Shore Pass app!
                            </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item>
                    <CardActionArea component="a" href="https://github.com/ksmera01" target="blank">
                        <Card>
                            <div>
                                <img style={{ paddingTop: '10px' }} className={classes.img} alt="complex" src={Kevin} />
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        Kevin Smeraglio
                            </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Click card for GitHub!
                            </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        Full Stack Web Developer in training. Currently an IT Business Systems Mgr. at PRN.
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
    };

    function FormRow2() {
        return (
            <React.Fragment>
                <Grid item>
                    <CardActionArea component="a" href="https://github.com/kaito47" target="blank">
                        <Card>
                            <div>
                                <img style={{ paddingTop: '10px' }} className={classes.img} alt="complex" src={Kait} />
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        Kaitlin O'Shaughnessy
                            </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Click card for GitHub!
                            </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        Currently I'm a junior full stack developer in the process of completing UPenn's LPS Boot Camp.
                            </Typography>
                                </CardContent>
                            </div>
                            <Hidden xsDown>
                                <CardMedia image="" title="" />
                            </Hidden>
                        </Card>
                    </CardActionArea>
                </Grid>
                <Grid item>
                    <CardActionArea component="a" href="https://github.com/TLGeorge" target="blank">
                        <Card>
                            <div>
                                <img style={{ paddingTop: '10px' }} className={classes.img} alt="complex" src={Taneisha} />
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        Taneisha George
                            </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Click card for GitHub!
                            </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        Junior Full-Stack Web Developer | Student in UPENN LPS Full-Stack Web Development Boot Camp.
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
        )
    }

    return (
        <div style={{ paddingTop: '75px' }}>
            <h1 style={{ textAlign: 'center', fontFamily: 'Playfair Display SC' }}>Shore Pass Team</h1>
            <Grid container xs={12} sm={6} md={5} spacing={4}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormRow2 />
                </Grid>
            </Grid>
        </div>
    );
}