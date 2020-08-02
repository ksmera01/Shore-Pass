import React from 'react';
import MainHeader from '../components/MainHeader/mainheader';
import AboutUs from '../components/AboutUs/aboutus';
import LandingPricing from '../components/LandingPricing/landingpricing';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer/footer'

const landingPricing = {
    title: 'Find Shore Tags for your next getaway!',
    description:
        "View rates for Dailly, Weekly and Seasonal Passes!",
    image: 'https://www.nj.com/resizer/8_N2CIaJUMYl-oVaqNHesURmd5A=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/capemay_impact/photo/beach-tags-main.jpg',
    imgText: 'Beach Tags',
};

export default function LandingPage() {
    return (
        <React.Fragment>
            <MainHeader />
            <Container>
                <AboutUs />
                <LandingPricing post={landingPricing} />
            </Container>
            < Footer />
        </React.Fragment>
    );
}

