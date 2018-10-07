import React from 'react';
import './Activity.css';
import Images from './images';

const activity = (props) => (
    <div className="full-cus-card">
        <div className="card main-card-content">
  <div className="card-image cus-img-holder">
    <figure className="image is-96x96 .is-rounded cus-img">
        <Images image={props.image}/>
    </figure>
  </div>
  <div className="card-content">
    <div className="is-6 title-cus">
        <p>{props.label}</p>
    </div>

    <div className="content content-cus">
      {props.words}
      
    </div>
  </div>
</div>
    </div>
);

export default activity;

