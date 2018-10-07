import React from 'react';
import './TopLandingPage.css'

const topLandingPage = (props) => (
    <div className="is-fullhd all">
        <div className="notification TopLandingPage">
            <div className="column main-img">
                <div className="is-10 head">
                    <div className="number-set">
                        <div className="numbering">20<br/><span>hours</span></div>
                        <div className="numbering">36<br/><span>Minutes</span></div>
                        <div className="numbering">52<br/><span>Seconds</span></div>
                        <div className="numbering">32<br/><span>Millesec</span></div>
                    </div>
                    
                    <h1 className="title is-1 acfm-title cus-title">Welcome To All Christian Fellowship Mission</h1>
                    <p className="cus-subtitle">October 7th Sunday Service happening Live</p>
                    <a className="button is-white cus-button">Register Now</a>
                </div>
            </div>
            
        </div>
    </div>
);

export default topLandingPage;