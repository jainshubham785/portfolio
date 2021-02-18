import React from 'react';
import { colors } from '../../color'

const Button = (props) => {
    return(
        <a 
            href="#" 
            style={{
                boxSizing: "border-box",
                padding: "10px 20px",
                backgroundColor: props.inverse ? "transparent" : colors.primaryColor,
                color: props.inverse ? colors.primaryColor : "#fff",
                display: "inline-block",
                borderRadius: "20px",
                boxShadow: props.inverse ? "none" : "#6dba6d 0px 0px 10px 0px",
                border: "1px solid",
                borderColor: colors.primaryColor ,
                fontSize: "12px",
                letterSpacing: "1px"
            }}
        >
            {props.label}
        </a>
    );
};

export default Button;