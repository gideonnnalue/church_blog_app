import React from 'react';
import logo1 from '../../../assets/images/logo1.jpg';
import logo2 from '../../../assets/images/logo2.jpg';
import logo3 from '../../../assets/images/logo3.jpg';

const logos = ( props ) => {

    let logo = null;
        
    switch (props.logoType) {

        case "logo1":
            logo = <img src={logo1} placeholder="Testing" className="image is-96x96"/>
            break;
        case "logo2":
            logo = <img src={logo2} placeholder="Testing" className="image is-96x96"/>
            break;
        case "logo3":
            logo = <img src={logo3} placeholder="Testing" className="image is-96x96"/>
            break;
        default: return null
    }

    return logo;
}

export default logos;