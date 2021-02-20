import React from 'react';
import me from '../../assets/images/myImage.png';
import './style.css';
import Button from '../Button/Button'

const Hero = (props) => {
    return (
        <div className = "container" style = {{ marginTop : "50px"}}>
            <div className = "flexRow justify-sb align-center">
                <div>
                    <p className = "upperCase bold-500 textColor ls-1 mtb-10">
                        <span className = "primaryColor">Hello,</span> I am Shubham jain
                    </p>
                    <h1 className = "textColor ls-1 mtb-10">Software Developer</h1>
                    <p className = "font-12 grey mtb-10">Full stack Developer Using JS</p>

                    <div className="flexRow" style = {{ marginTop : "30px"}}>
                        <div>
                            <Button label = "Hire Me"/>
                        </div>
                        <div className="mlr-10">
                            <Button label = "Download Resume" inverse={true}/>
                        </div>
                    </div>
                </div>
                <div>
                    <img className = "myImage" src={me} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Hero;