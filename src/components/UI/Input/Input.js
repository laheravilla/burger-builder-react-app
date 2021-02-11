import React from "react";
import css from "./Input.module.css";
import PropTypes from "prop-types";

const input = (props) => {
    let inputElement = null;
    let validationError = null;
    const inputClasses = [css.InputElement];

    if (props.invalid && props.shouldValidate && props.isOnInput) {
        inputClasses.push(css.Invalid);
        validationError = <p className={css.ValidationError}>Please enter a valid {props.valueType}</p>;
    }

    switch (props.elementtype) {
        case ("input"):
            inputElement = <input
                className={inputClasses.join(" ")}
                {...props.config}
                onChange={props.onInputChange}
                value={props.value} />;
            break;
        case ("textarea"):
            inputElement = <textarea
                className={inputClasses.join(" ")}
                {...props.config}
                onChange={props.onInputChange}
                value={props.value} />;
            break;
        case ("select"):
            inputElement = (
                <select className={inputClasses.join(" ")} {...props.config} onChange={props.onInputChange} value={props.value} >
                    {props.config.options.map((option, i) => (
                        <option key={i} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(" ")}
                {...props.config}
                onChange={props.onInputChange}
                value={props.value} />;
    }

    return (
        <div className={css.Input}>
            <label className={css.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
}

input.propType = {
    elementtype: PropTypes.string,
    config: PropTypes.object,
    value: PropTypes.string,
    valueType: PropTypes.string,
    isValid: PropTypes.bool,
    shouldValidate: PropTypes.bool,
    isOnInput: PropTypes.bool
};

export default input;