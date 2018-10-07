import React from 'react';
import guestImage from '../../../../assets/images/guest.jpg';
import './SpeakerCard.css';

const speakerCard = () => (
    <div className="card guest-card-cus">
                    <div class="card-image">
                        <figure className="image is-128x128 guest-card-img" style={{backgroundColor:"black"}}>
                        <img src={guestImage} alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="cus-speaker-card-list">
                            <p className="title is-4 speaker-cus-title">Gideon Nnalue</p>
                            <p className="subtitle is-6 speaker-cus-subtitle">Executive Director</p>
                        </div>
                    </div>
);



export default speakerCard;