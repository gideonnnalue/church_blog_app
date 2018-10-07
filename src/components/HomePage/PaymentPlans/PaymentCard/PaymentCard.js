import React from 'react';
import './PaymentCard.css';

const paymentCard = ( props ) => {
    return (
        <div className="column payment-card">
            <div className="card payment-card-cus">
                <div className="card-image">
                    <div className="paymentCard-plan">
                        <h1>{props.planName}</h1>
                        <p>High traffic corporate sites</p>
                    </div>
                </div>
                <div className="content paymentCard-content">
                    <p className="paymentCard-price-tag">$ 75<span>/Annualy</span></p>
                    <hr />
                    <p>FREE Site building</p>
                    <p>FREE Domain Register</p>
                    <p>FREE Marketing &amp; SEO Tools</p>
                    <p>24/7/365 Support</p>
                    <a className="button">Register Now</a>
                </div>
            </div>
        </div>
    )
};

export default paymentCard;