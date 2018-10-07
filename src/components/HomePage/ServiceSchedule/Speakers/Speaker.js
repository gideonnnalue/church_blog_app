import React from 'react';
import profilePic from '../../../../assets/images/profile_pic1.jpg';
import './Speaker.css';

const speaker = () => (
    <div className="columns">
        <div className="speaker_img_cus" >
            <figure class="image is-32x32">
                <img className="is-rounded" src={profilePic}/>
            </figure>
        </div>
        <div className="column speaker_cus">
            <p className="speaker_name">Gideon Nnalue</p>
            <p className="speaker_position">Executive Officer</p>
        </div>
    </div>
)


export default speaker;