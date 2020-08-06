import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Location from '../Location';
import axios from 'axios';

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
});
export default function WeatherCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [weather, setWeather] = useState({})

    function openWeatherAPI() {
        let apiKey = "0317fb4213a3eb33ceb4cf432a4f0cab"
        let queryURL = `api.openweathermap.org/data/2.5/weather?q=${props.location}&appid=${apiKey} `
        // console.log(queryURL)
        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // })
        //     .then(function (response) {
        //         console.log(response)
        //         // var dailyArray = response.daily
        //         console.log(dailyArray)
        //         FOR USESTATE setWeather(response.daily);
        //     })
        axios.get(queryURL).then(function (bullshit) {
            console.log(bullshit)
        });
    }
    return (
        <div><Location />

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
    );
}



