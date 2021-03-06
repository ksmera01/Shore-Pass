// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import Grid from '@material-ui/core/Grid'

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing(2),
//     },
// }));

// export default function WeatherSelector(props) {
//     const classes = useStyles();

//     const [query, setQuery] = useState({})
//     // Using props from the parent component/page we can gain access to the tagObject state and setTagObject function
//     const handleChange = (event) => {
//         //updates tagObject to what was entered in input field (onChange)
//         const name = event.target.name;
//         setQuery(name);
//     };

//     return (
//         <div className="beach" align="center">
//             <FormControl className={classes.formControl}>
//                 <InputLabel htmlFor="age-native-simple">Select Beach</InputLabel>
//                 <Select
//                     native
//                     value={props.location}
//                     onChange={handleChange}
//                     inputProps={{
//                         name: 'location',
//                     }}
//                 >
//                     <option aria-label="None" value="" />
//                     <option value={'Atlantic City'}>Atlantic City</option>
//                     <option value={'Avalon'}>Avalon</option>
//                     <option value={'Belmar'}>Belmar</option>
//                     <option value={'Brigantine'}>Brigantine</option>
//                     <option value={'Cape May'}>Cape May</option>
//                     <option value={'Lavallette'}>Lavallette</option>
//                     <option value={'Long Beach Island'}>Long Beach Island</option>
//                     <option value={'Ocean Grove'}>Ocean Grove</option>
//                     <option value={'Ocean City'}>Ocean City</option>
//                     <option value={'Point Pleasant Beach'}>Point Pleasant Beach</option>
//                     <option value={'Sandy Hook'}>Sandy Hook</option>
//                     <option value={'Seaside Heights'}>Seaside Heights</option>
//                     <option value={'Spring Lake'}>Spring Lake</option>
//                     <option value={'Sea Isle City'}>Sea Isle City</option>
//                     <option value={'Wildwood'}>Wildwood</option>
//                 </Select>
//             </FormControl>

//         </div>
//     );
// }