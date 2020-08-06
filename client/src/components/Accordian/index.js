import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LoginForm from '../LoginForm'
import Grid from '@material-ui/core/Grid'
import Register from '../Register';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '75%',
        flexShrink: 0,
    },
    // secondaryHeading: {
    //     fontSize: theme.typography.pxToRem(15),
    //     color: theme.palette.text.secondary,
    // },
    goArrow: {
        fontSize: '1rem',
    }
}));

export default function ControlledAccordions() {
    const classes = useStyles();
    const history = useHistory()
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>Login</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/* INSERT ACCORDIAN FORM HERE */}
                    <Grid container spacing={3}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <LoginForm />
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Create New Account</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/* INSERT ACCORDIAN FORM HERE */}
                    <Grid container spacing={3}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Register />
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion onClick={() => history.push('/transaction')}>
                <AccordionSummary
                    expandIcon={<ArrowForwardIosIcon className={classes.goArrow} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Checkout as Guest</Typography>
                </AccordionSummary>
            </Accordion>
        </div>
    );
}