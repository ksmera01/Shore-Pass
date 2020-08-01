import React, { useState } from 'react';
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

export default function Location(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        beach: '',
    });

    const handleChange = (event) => {
        //updates setState to what was entered in input field (onChange)
        const name = event.target.name;
        props.setTagObject({
            ...props.tagObject,
            [name]: event.target.value,
        });
        console.log(state.beach)
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
                    <option value={'Atlantic City'}>Atlantic City</option>
                    <option value={'Avalon'}>Avalon</option>
                    <option value={'Belmar'}>Belmar</option>
                    <option value={'Brigantine'}>Brigantine</option>
                    <option value={'Cape May'}>Cape May</option>
                    <option value={'Lavallette'}>Lavallette</option>
                    <option value={'Long Beach Island'}>Long Beach Island</option>
                    <option value={'Ocean Grove'}>Ocean Grove</option>
                    <option value={'Ocean City'}>Ocean City</option>
                    <option value={'Point Pleasant Beach'}>Point Pleasant Beach</option>
                    <option value={'Sandy Hook'}>Sandy Hook</option>
                    <option value={'Seaside Heights'}>Seaside Heights</option>
                    <option value={'Spring Lake'}>Spring Lake</option>
                    <option value={'Sea Isle City'}>Sea Isle City</option>
                    <option value={'Wildwood'}>Wildwood</option>
                </Select>
            </FormControl>

        </div>
    );
}