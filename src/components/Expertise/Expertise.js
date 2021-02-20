import React from 'react';
import SmallHeading from '../SmallHeading/SmallHeading';
import MediumHeading from '../MediumHeading/MediumHeading';
import Card from '../Card/Card'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import me from '../../assets/images/myImage.png'
import SocialConnect from '../SocialConnect/SocialConnect';


const Expertise = () => {

    const percentage = "70";
    return (  
        <div className="container">

            {/* image div */}
            <div>
                <img src = {me} style = {{
                    width: "271px",
                    height: "395px",
                    position : "absolute",
                    overflow : "hidden",
                    top : "0px"
                }}/>
            </div>

            {/* header div */}
            <div style = {{
                marginTop : "50px",
                }}>
                <SmallHeading text = "Expertise"/>
                <MediumHeading text = "Special Skills"/>
            </div>

            {/*  card div */}
            <div style = {{
                    width : "320px",
                    margin : "70px auto",
                    position : "relative",
                }}>
                    <Card>
                        <div className="flexRow align-center" style = {{margin : "0px 20px"}}>
                            <CircularProgressbar
                                className = "progress"
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                textColor: "red",
                                pathColor: "orange",
                                trailColor: "grey"
                                })}
                            />
                            <h2 className="mlr-10 textColor">Development</h2>
                        </div>
                        <p className="font-12 grey " style = {{ margin : "10px 20px"}}>
                            JavaScript is one of the greatest programming Language
                        </p>
                    </Card>
            </div>

            {/* Social connect div */}
            <div>
                <SocialConnect />
            </div>
            
        </div>
        
    );
}
 
export default Expertise;