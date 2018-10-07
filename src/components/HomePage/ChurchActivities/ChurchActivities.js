import React from 'react';
import './ChurchActivities.css';
import playButton from '../../../assets/images/play_button.png';

const churchActivities = ( props ) => (
    <div className="column column-main">
        <div className="column is-three-fifths is-offset-one-fifth cus-church-act">
            <div className="columns">
                <div className="play_button"><a href="#"><img src={playButton} className="play_button_logo" width="112" height="28"/></a></div>
                <div className="column column-left">
                    <h1>Get the most Experience</h1>
                    <hr className="cus-hr"/>
                    <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero.</p>
                    <a className="button">Register Now</a>
                </div>
                <div className="column column-right">
                    <div className="main-img2"></div>
                </div>
            </div>
            
        </div>
        
    </div>
);

export default churchActivities;