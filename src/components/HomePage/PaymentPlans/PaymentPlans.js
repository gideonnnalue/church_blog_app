import React from 'react';
import './PaymentPlans.css';
import PaymentCard from './PaymentCard/PaymentCard';


const paymentPlans = () => (
    <div className="columns paymentPlans-cus">
        <div className="column is-half paymentPlan-cus is-offset-one-quarter is-mobile">
            <div className="paymentPlan-header">
                <h1>Get Our Seats</h1>
                <hr />
            </div>
            <div className="columns">
                <div className="column paymentPlanCard-cus is-mobile"><PaymentCard planName="Gold" /></div>
                <div className="column paymentPlanCard-cus is-mobile"><PaymentCard planName="Ultimate"/></div>
                <div className="column paymentPlanCard-cus is-mobile"><PaymentCard planName="Vip"/></div>
            </div>
        </div>
    </div>
);

export default paymentPlans;