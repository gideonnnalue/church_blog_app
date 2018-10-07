import React from 'react';
import './LatestNews.css';
import PaymentCard from './LatestNewsCard/LatestNewsCard';


const latestNews = () => (
    <div className="columns latestNews-cus">
        <div className="column is-half latestNew-cus is-offset-one-quarter is-mobile">
            <div className="latestNew-header">
                <h1>Latest News</h1>
                <hr />
            </div>
            <div className="columns">
                <div className="column latestNewCard-cus is-mobile"><PaymentCard planName="Gold" /></div>
                <div className="column latestNewCard-cus is-mobile"><PaymentCard planName="Ultimate"/></div>
                <div className="column latestNewCard-cus is-mobile"><PaymentCard planName="Vip"/></div>
            </div>
        </div>
    </div>
);

export default latestNews;