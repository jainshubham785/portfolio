import React from 'react';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';
import linkedin from '../../assets/images/linkedin.png';
import './style.css'



const SocialConnect = () => {
    return (  
        <div className = "social-connect">
            <span className="textColor font-12 bold-500">Follow Me On : </span>
            <a className = "social-link">
                <img src={facebook} alt=""/>
            </a>
            <a className = "social-link">
                <img src={instagram} alt=""/>
            </a>
            <a className = "social-link">
                <img src={twitter} alt=""/>
            </a>
            <a className = "social-link">
                <img src={linkedin} alt=""/>
            </a>

        </div>
    );
}
 
export default SocialConnect;