import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import API from '../utils/API';
import { useLocation } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    container: {
        paddingTop: '5em',
        paddingBottom: theme.spacing(4),
        width: '100%',
        height: '100%',
    },
}));

function Validator() {
    let location = useLocation();
    const classes = useStyles();
    const [tag, setTag] = useState({});

    const findTag = async () => {
        // get the search parameter from the window location, split the ? off the result
        let id = location.search.split('?')[1]
        console.log(id)
        API.getTagById(id)
            .then(res => {
                // console.log(res.data)
                setTag(res.data)
            })
            .catch(err => console.log(err));
    }


    useEffect(() => {
        findTag();
    }, [])

    if (!tag._id) {
        return (
            <div className={classes.root}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <h2>Tag not found</h2>
                        </Grid>
                        <Grid item xs={12} align="center">
                        </Grid>
                    </Grid>
                </Container>
            </div >
        )
    } else {
        return (
            <div className={classes.root} style={(Date.parse(tag.expirationDate) > Date.now() ? { backgroundColor: 'green' } : { backgroundColor: 'red' })}>
                <Container className={classes.container}>
                    <Grid container>
                        <Grid item xs={12} align="center">
                            <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
                                {tag.type}
                            </Typography>
                            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                                {tag.location}
                            </Typography>
                            <Typography component="p" variant="h5" align="center" color="textPrimary" gutterBottom>
                                Expiration: <Moment format="MM-DD-YYYY">{tag.expirationDate}</Moment>
                            </Typography>
                            <Typography component="p" variant="h5" align="center" color="textPrimary" gutterBottom>
                                Purchased: <Moment format="MM-DD-YYYY">{tag.startDate}</Moment>
                            </Typography>
                            <Typography component="p" variant="h5" align="center" color="textPrimary" gutterBottom>
                                ID: {tag._id}
                            </Typography>
                            <Typography component="p" variant="h5" align="center" color="textPrimary" gutterBottom>
                                {tag.paid ? "Paid" : "Not Paid"}
                            </Typography>
                            <Typography component="p" variant="h5" align="center" color="textPrimary" gutterBottom>
                                {tag.checkedin ? "Checked in" : "Not checked in"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                        </Grid>
                    </Grid>
                </Container>
            </div >
        );
    }
}
export default Validator;