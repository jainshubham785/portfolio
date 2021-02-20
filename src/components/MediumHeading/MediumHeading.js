import React from 'react';

const MediumHeading = (props) => {
    return ( 
        <p className="primaryColor font-18 bold-500 upperCase ls-1 text-center mtb-10"
        >
            { props.text }
        </p>

    );
};
 
export default MediumHeading;