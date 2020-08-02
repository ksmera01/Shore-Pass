import React, { useEffect, useState } from 'react';
// import Moment from 'react-moment';

export default function DateTime() {
    const [time, setTime] = useState({
        day: new Date().toLocaleDateString(),
        hour: new Date().getHours(),
        minutes: new Date().getMinutes()
        // time: new Date().Date.UTC()
    })


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
        setTime({ ...time, time: new Date().toLocaleTimeString() })
    }

    return (
        <div>
            <h2>{time.day} </h2>
            < h2 > <span>{time.hour}</span>:<span>{time.minutes}</span></h2 >
            {/* <h2><Moment parse="HH:mm">{time.</Moment></h2> */}

        </div>

    );
}
