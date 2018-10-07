import React from 'react';
import './Sponsors.css';
import Logo from './Logos';

const sponsors = () => (
    <div className="sponsorsPage">
    
        <div className="column column-main ">
            <div className="column is-two-thirds is-offset-one-fifth sponsors-header">
                <h3>Hounourable Speakers</h3>
                <hr className="schedule-div-hr"/>
                
            </div>
            <div className="column is-two-thirds is-offset-one-fifth sponsors-header">
                <div className="columns-cus-sponsor">
                    <div className="sponsors-cus">
                        <div><Logo logoType="logo3" /></div>
                    </div>
                    <div className="sponsors-cus"><div><Logo logoType="logo1" /></div></div>
                    <div className="sponsors-cus"><div><Logo logoType="logo2" /></div></div>
                    <div className="sponsors-cus"><div><Logo logoType="logo3" /></div></div>
                    <div className="sponsors-cus"><div><Logo logoType="logo1" /></div></div>
                    <div className="sponsors-cus"><div><Logo logoType="logo2" /></div></div>
                    <div className="sponsors-cus"><div><Logo logoType="logo3" /></div></div>
                    <div className="sponsors-cus"><div><Logo logoType="logo1" /></div></div>
                </div>
                
            </div>
            
                
        </div>
            
    </div>
);

export default sponsors;