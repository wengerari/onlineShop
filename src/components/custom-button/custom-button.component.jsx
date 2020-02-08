import React from "react";

import "./custom-button.style.scss";

const CustomBtn = ({children,isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button ${inverted ? "inverted" : ""}`} {...otherProps}>{children}</button>
)
export default CustomBtn;