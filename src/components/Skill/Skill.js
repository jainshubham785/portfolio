import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./style.css"

const Skill = (props) => {
    return (  
        <div className="flexRow align-center" style = {{margin : "10px 30px"}}>
            <CircularProgressbar
                className = "progress"
                value={props.percentage}
                text={`${props.percentage}%`}
                styles={buildStyles({
                textColor: props.textColor,
                pathColor: props.pathColor,
                trailColor: props.trailColor
                })}
            />
            <div className="mlr-10">
                <p className="textColor ls-1 bold-700">
                    {props.text}
                </p>
                <p className="grey font-12 ls-1 bold-500 mtb-10">
                    {props.desc}
                </p>
            </div>
            
        </div>
    );
}
 
export default Skill;