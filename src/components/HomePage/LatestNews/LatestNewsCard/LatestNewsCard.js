import React from 'react';
import './LatestNewsCard.css';
import newsUpdate from '../../../../assets/images/newsUpdate.jpg';

const latestNewsCard = ( props ) => {
    return (
        <div className="column latestNews-Card">
            <div className=" latestNews-Card-cus">
                <div className="card-image">
                    <figure class="image is-2by1">
                        <img src={newsUpdate} alt="Placeholder image"/>>
                    </figure>
                </div>
                <div className="content latestNewsCard-content">
                    <p className="latestNews-desc">Pure Conference Power</p>
                    <div className="columns latestNews-data">
                        <p className="column">By Gideon</p>
                        <p className="column">10:00 am</p>
                    </div>
                    <p className="latestNewsCard-cont">Everything you need will be built from scratch with the best web developers You could ask for with our 
                    <br />
                    <a className="latestNews-reg">Register Now...</a>
                    </p>
                    
                </div>
            </div>
        </div>
    )
};

export default latestNewsCard;