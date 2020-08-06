import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

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
            <h2><Moment format="MM/DD/YY">{time.time}</Moment></h2>
            {/* < h2 > <span>{time.hour}</span>:<span>{time.minutes}</span></h2 > */}
            <h2><Moment format="h:mm A">{time.time}</Moment></h2>

        </div>

    );
}
