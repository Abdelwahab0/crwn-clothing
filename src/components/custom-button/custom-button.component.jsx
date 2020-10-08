import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignedIn, ...otherProps }) => (
    <button className={`${isGoogleSignedIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;