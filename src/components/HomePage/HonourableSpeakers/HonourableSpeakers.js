import React from 'react';
import './HonourableSpeakers.css';
import SpeakerCard from './SpeakerCard/SpeakerCard';

const honourableSpeakers = () => (
    <div className="honourableSpeakersPage">
    
        <div className="column column-main ">
            <div className="column is-two-thirds is-offset-one-fifth schedule-header">
                <h3>Hounourable Speakers</h3>
                <hr className="schedule-div-hr"/>
                
            </div>
            <div className="column is-two-thirds is-offset-one-fifth schedule-header">
                <div className="columns-cus-speak">
                    <div className="hSpeaker-cus">
                        <SpeakerCard />
                    </div>
                    <div className="hSpeaker-cus"><SpeakerCard /></div>
                    <div className="hSpeaker-cus"><SpeakerCard /></div>
                    <div className="hSpeaker-cus"><SpeakerCard /></div>
                    <div className="hSpeaker-cus"><SpeakerCard /></div>
                    <div className="hSpeaker-cus"><SpeakerCard /></div>
                    <div className="hSpeaker-cus"><SpeakerCard /></div>
                    <div className="hSpeaker-cus"><SpeakerCard /></div>
                </div>
                
            </div>
            
                
        </div>
            
    </div>
);

export default honourableSpeakers;