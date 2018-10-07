import React from 'react';
import './Activities.css';
import Activity from './Activity/Activity';

const activities = () => {

    const card = {
        datas: [
            { 
                image: "clock",
                label: "Date & Time",
                words: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. 11:09 PM - 1 Jan 2016"
            },
            {
                image: "location",
                label: "Location",
                words: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. 11:09 PM - 1 Jan 2016"
            },
            {
                image: "word_of_God",
                label: "Word Of God",
                words: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. 11:09 PM - 1 Jan 2016"
            }
        ]
    };

    
        return (
        <div className="column is-three-fifths is-offset-one-fifth">
            <div className="columns">
                <div className="column columnSub">
                    <Activity image={card.datas[0].image} label={card.datas[0].label} words={card.datas[0].words}/>
                </div>
                <div className="column columnSub">
                    <Activity image={card.datas[1].image} label={card.datas[1].label} words={card.datas[1].words}/>
                </div>
                <div className="column columnSub">
                    <Activity image={card.datas[2].image} label={card.datas[2].label} words={card.datas[2].words}/>
                </div>
            </div>
        </div>
    )
};

export default activities;