import React from 'react';
import OceanVid from '../../Media/oceanvid.m4v'
import "./style.css";
import Button from '@material-ui/core/Button';
import Nav from '../Nav'

export default function MainHeader() {

    return (
        <React.Fragment>
            < Nav />
            <header className="v-header container">
                <div className="fullscreen-video-wrap">
                    <video
                        autoPlay
                        loop
                        muted
                    >
                        <source src={OceanVid} type="video/mp4" />
                    </video>
                </div>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <h1 className="fontStyle">Shore Pass </h1>
                    <br></br>
                    <p className="fontStyle"> Easily access shore tags right on your mobile device!</p>
                    <Button href="" variant="contained" style={{ background: '#dcbb8e' }} color="primary">
                        Learn More
                </Button>
                </div>
            </header>
        </React.Fragment >
    );
}

