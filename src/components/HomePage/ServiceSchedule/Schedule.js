import React from 'react';
import './Schedule.css';
import Speaker from './Speakers/Speaker';

const schedule = () => {

    let scheduleLocation = (
        <div className="columns">
            <div className="column speaker-halls">
                <p className="speaker-hall">Hall - 1</p>
                <p className="speaker-hall-position">Southern Block</p>
            </div>
        </div>
    )

    return (
    <div className="schedulePage">
    
        <div className="column column-main ">
            <div className="column is-two-thirds is-offset-one-fifth schedule-header">
                <h3>Conference Schedule</h3>
                <hr className="schedule-div-hr"/>
                <div className="columns is-half is-offset-one-fifth schedule-buttons-cus">
                    <div className="column schedule-day-column"><a className="button schedule-button-cus schedule-but-is-selected">Day 1</a></div>
                    <div className="column schedule-day-column"><a className="button schedule-button-cus">Day 2</a></div>
                    <div className="column schedule-day-column"><a className="button schedule-button-cus">Day 3</a></div>
                </div>
            </div>
            <div className="column is-two-thirds is-offset-one-fifth ">
            
                <div className="columnn">
                    
                <table class="table is-fullwidth is-bordered shedule-page-column">
  
    <tbody>
    <tr>
      <th>09:00 - 10:00</th>
      <td className="speaker-pos"><a href="#"><Speaker /></a>
      </td>
      <td className="speaker-words">Worship the Lord with all your heart and might and u would be rewarded</td>
      <td>{scheduleLocation}</td>
      
    </tr>
    <tr>
      <th>10:00 - 11:30</th>
      <td className="speaker-pos"><a href="#"><Speaker /></a></td>
      <td className="speaker-words">Worship the Lord with all your heart and might and u would be rewarded</td>
      <td>{scheduleLocation}</td>
      
    </tr>
    <tr>
      <th>12:00 - 12:30</th>
      <td className="speaker-pos"><a href="#"><Speaker /></a></td>
      <td className="speaker-words">Worship the Lord with all your heart and might and u would be rewarded</td>
      <td>{scheduleLocation}</td>
    </tr>
    <tr>
      <th>01:00 - 01:30</th>
      <td className="speaker-pos"><a href="#"><Speaker /></a></td>
      <td className="speaker-words">Worship the Lord with all your heart and might and u would be rewarded</td>
      <td>{scheduleLocation}</td>
      
    </tr>
    
  </tbody>
</table>
                        <div className="main-img2"></div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
    
}

export default schedule;