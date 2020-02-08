import React from "react";

import "./form__input.style.scss";

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input onChange={handleChange} {...otherProps} className="input" />
        <label className={`${otherProps.value.length ? "shrink" : ""} label`}>{label}</label>
    </div>
)

export default FormInput;