import React from 'react';

const Card = (props) => {
    return (     
            <div style = {{
                width : "100%",
                backgroundColor : "white",
                boxShadow: "0px 0px 10px 0px #323232",
                borderRadius: "2px",
                padding: "30px 0px"
            }}>
                {props.children}
            </div>
        
    );
}
 
export default Card;