import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { UserContext } from '../context/UserContext';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import API from '../utils/API'
import Copyright from '../components/Copyright'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    table: {
        minWidth: 700,
    },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export default function myAccount() {
    const classes = useStyles();

    const { user } = useContext(UserContext)
    console.log(user)

    // submitting form function
    // const [signUp, setSignUp] = useState({})

    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setSignUp({ ...signUp, [name]: value })
    // };

    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (signUp.firstName && signUp.lastName && signUp.password && signUp.email) {
    //         console.log(signUp)
    //         API.createNewUser(signUp)
    //             .then(res => {
    //                 console.log(res)
    //                 window.location.href = '/'
    //             })
    //             .catch(err => console.log(err));
    //     }
    // };

    return (
        <Container component="main" xs={12} sm={8} md={5} style={{ paddingTop: '100px' }}>
            <Typography component="h1" variant="h5" style={{ textAlign: 'center', paddingBottom: '20px' }}>
                My Tags
            </Typography>
            <TableContainer component={Paper} xs={12}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Beach</StyledTableCell>
                            <StyledTableCell align="right">Tag Status</StyledTableCell>
                            <StyledTableCell align="right">Date Purchased</StyledTableCell>
                            <StyledTableCell align="right">Date of Expiry</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.tags && user.tags.map(tag => (
                            <StyledTableRow key={tag.location}>
                                <StyledTableCell component="th" scope="row">
                                    {tag.location}
                                </StyledTableCell>
                                <StyledTableCell align="right" >{(Date.parse(tag.expirationDate) > Date.now() ? 'Valid' : 'Expired')}</StyledTableCell>
                                <StyledTableCell align="right"><Moment format='MM/DD/YYYY'>{tag.startDate}</Moment></StyledTableCell>
                                <StyledTableCell align="right"><Moment format='MM/DD/YYYY'>{tag.expirationDate}</Moment></StyledTableCell>
                            </StyledTableRow>
                        ))}
                        {console.log(user.tags)}
                    </TableBody>
                </Table>
            </TableContainer>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    My Account
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                fullWidth
                                id="firstName"
                                autoFocus
                                value={user.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="lastName"
                                name="lastName"
                                autoComplete="lname"
                                value={user.lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="email"
                                name="email"
                                autoComplete="email"
                                value={user.email}
                            // onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value="{user.password}"
                            // onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        // onClick={(e) => handleFormSubmit(e)}
                        className={classes.submit}
                        style={{ background: '#43c8c5' }}
                    >
                        Update My Information
          </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}