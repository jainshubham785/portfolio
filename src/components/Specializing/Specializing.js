import React from 'react';
import Card from '../Card/Card'
import MediumHeading from '../MediumHeading/MediumHeading';
import SmallHeading from '../SmallHeading/SmallHeading';
import Skill from '../Skill/Skill'


const Specializing = () => {
    const skills = [
        {
            id : 0,
            percentage : 80,
            text : "HTML/CSS",
            desc : "Hands on Experience in HTML/CSS",
            textColor : "#16c79a",
            pathColor : "#ff75a0",
            trailColor : "#aaaaaa"
        }, {
            id : 1,
            percentage : 65,
            text : "JavaScript",
            desc : "Hands on Experience in JavaScript",
            textColor : "#16c79a",
            pathColor : "#a1cae2",
            trailColor : "#aaaaaa"
        }, {
            id : 2,
            percentage : 60,
            text : "ReactJs",
            desc : "Hands on Experience in ReactJS",
            textColor : "#16c79a",
            pathColor : "#ff9292",
            trailColor : "#aaaaaa"
        }, {
            id : 3,
            percentage : 70,
            text : "NodeJs",
            desc : "Hands on Experience in NodeJs",
            textColor : "#16c79a",
            pathColor : "#eb5e0b",
            trailColor : "#aaaaaa"
        }, {
            id : 4,
            percentage : 90,
            text : "Java",
            desc : "Hands on Experience in Java",
            textColor : "#16c79a",
            pathColor : "#11698e",
            trailColor : "#aaaaaa"
        }, {
            id : 5,
            percentage : 85,
            text : "Mongoose",
            desc : "Hands on Experience in Mongoose",
            textColor : "#16c79a",
            pathColor : "yellow",
            trailColor : "#aaaaaa"
        }
            
    ];

    return (  
        <div className= "container">
            <Card>
                <SmallHeading text="What i do"/>
                <MediumHeading text="Specializing in" />
                <div className = "gridBox" style = {{ padding:"30px" }}>
                    {
                        skills.map((skill, index) => (
                            <Skill 
                                key = {index}
                                percentage = {skill.percentage}
                                text = {skill.text}
                                textColor = {skill.textColor}
                                pathColor = {skill.pathColor}
                                trailColor = {skill.trailColor}
                                desc = {skill.desc}
                            />
                        ))
                    }
                </div>
            </Card>
        </div>
    );
}
 
export default Specializing;