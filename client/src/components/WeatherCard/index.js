import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import BeachForecast from '../BeachForecast';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
    // formControl: {
    //     margin: theme.spacing(1),
    //     minWidth: 120,
    // },
    // selectEmpty: {
    //     marginTop: theme.spacing(2),
    // },
});
export default function WeatherCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [query, setQuery] = useState({})
    const [weather, setWeather] = useState({})
    // Using props from the parent component/page we can gain access to the tagObject state and setTagObject function

    async function openWeatherAPI(location) {
        let apiKey = "0317fb4213a3eb33ceb4cf432a4f0cab"
        let queryURL = `api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
        console.log(queryURL)
        //     url: queryURL,
        //     method: "GET"
        // })
        //     .then(function (response) {
        //         console.log(response)
        //         // var dailyArray = response.daily
        //         console.log(dailyArray)
        //         FOR USESTATE setWeather(response.daily);
        await axios.get(queryURL).then(function (response) {
            console.log(response)
        });
    }

    const handleChange = (event) => {

        //updates tagObject to what was entered in input field (onChange)
        const name = event.target.name;
        setQuery(name)
        // openWeatherAPI(name);

    }
    // });
    // }
    return (
        <div>
            <div className="beach" align="center">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Select Beach</InputLabel>
                    <Select
                        native
                        value={query}
                        onChange={handleChange}
                        inputProps={{
                            name: 'location',
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
            <BeachForecast />
            <div>
                <Card className='weather'>
                    {/* <CardContent>
                {openWeatherAPI();
                dailyArray.map() => (
                <div className="temp">{response.main.temp}</div>
                <div className="img" src="http://openweathermap.org/img/wn/+dailyObj.weather[0].icon+@2x.pn" />
                <div className="humidity">{response.main.humidity}</div>
                )}
            </CardContent> */}
                </Card>
            </div>
        </div>
    );


}
