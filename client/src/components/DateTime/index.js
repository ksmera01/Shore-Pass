import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import Typography from '@material-ui/core/Typography';

export default function DateTime() {
    const [time, setTime] = useState({})


    useEffect(() => {
        console.log('I Mounted!')
        let intervalID = setInterval(
            () => tick(), 30000
        );
        return (() => {
            console.log('Unmounted')
            clearInterval(intervalID)
        })

    }, [])

    function tick() {
        setTime({ time: Date.now() })
    }

    return (
        <div>
            <Typography variant="h4" align="center" color="textSecondary" component="p"><Moment format="DD/MM/YY">{time.time}</Moment></Typography>
            {/* < h2 > <span>{time.hour}</span>:<span>{time.minutes}</span></h2 > */}
            <Typography variant="h4" align="center" color="textSecondary" component="p"><Moment format="HH:mm">{time.time}</Moment></Typography>

        </div>

    );
}
