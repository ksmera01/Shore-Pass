import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Location() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        beach: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div className="beach" align="center">
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Select Beach</InputLabel>
                <Select
                    native
                    value={state.beach}
                    onChange={handleChange}
                    inputProps={{
                        name: 'beach',

                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={1}>Atlantic City</option>
                    <option value={2}>Avalon</option>
                    <option value={3}>Belmar</option>
                    <option value={4}>Brigantine</option>
                    <option value={5}>Cape May</option>
                    <option value={6}>Lavallette</option>
                    <option value={7}>Long Beach Island</option>
                    <option value={8}>Ocean Grove</option>
                    <option value={9}>Ocean City</option>
                    <option value={10}>Point Pleasant Beach</option>
                    <option value={11}>Belmar</option>
                    <option value={12}>Sandy Hook</option>
                    <option value={13}>Spring Lake</option>
                    <option value={14}>Sea Isle City</option>
                    <option value={15}>Wildwood</option>
                </Select>
            </FormControl>

        </div>
    );
}