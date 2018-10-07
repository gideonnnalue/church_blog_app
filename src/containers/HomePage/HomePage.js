import React, { Component } from 'react';
import Auxs from '../../hoc/Auxs';
import TopLandingPage from '../../components/HomePage/TopLandingPage/TopLandingPage'
import ChurchActivities from '../../components/HomePage/ChurchActivities/ChurchActivities';
import Activities from '../../components/HomePage/Activities/Activities';
import Schedule from '../../components/HomePage/ServiceSchedule/Schedule';
import HonourableSpeakers from '../../components/HomePage/HonourableSpeakers/HonourableSpeakers';
import Subscribe from '../../components/HomePage/Subscribe/Subscribe';
import Sponsors from '../../components/HomePage/Sponsors/Sponsors';
import PaymentPlans from '../../components/HomePage/PaymentPlans/PaymentPlans';
import LatestNews from '../../components/HomePage/LatestNews/LatestNews';
import ContactUs from '../../components/HomePage/ContactUs/ContactUs';

class HomePage extends Component {
    render() {
        return (
            <Auxs>
                <TopLandingPage />
                <ChurchActivities />
                <Activities />
                <Schedule />
                <HonourableSpeakers />
                <Subscribe />
                <Sponsors />
                <PaymentPlans />
                <LatestNews />
                <ContactUs />
            </Auxs>

        );
    }
}

export default HomePage;