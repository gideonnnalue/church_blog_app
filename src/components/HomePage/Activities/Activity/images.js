import React from 'react';
import Clock from '../../../../assets/images/clock.png';
import Location from '../../../../assets/images/location.png';
import WordOfGod from '../../../../assets/images/card.png';

const images = (props) => {
    let image = null;

    switch (props.image) {
        case "clock":
            image = <img src={Clock} alt="Time of Event"/>;
            break;
        case "location":
            image = <img src={Location} alt="Location of Event" />;
            break;
        case "word_of_God":
            image = <img src={WordOfGod} alt="Word of God" />;
            break;
        default: return null;
    }

    return (
        <div>
           {image} 
        </div>
        );
};

export default images;