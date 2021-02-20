import React from 'react';

const SmallHeading = (props) => {
    return ( 
        <h4 className="textColor bold-500 upperCase ls-1 text-center"
        >
            { props.text }
        </h4>

    );
};
 
export default SmallHeading;