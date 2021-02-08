import React from "react";
import css from "./Input.module.css";
import PropTypes from "prop-types";

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ("input"):
            inputElement = <input
                className={css.InputElement}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ("textarea"):
            inputElement = <textarea
                className={css.InputElement}
                {...props.elementConfig}
                value={props.value} />;
            break;
        default:
            inputElement = <input
                className={css.InputElement}
                {...props.elementConfig}
                value={props.value} />;
    }

    return (
        <div className={css.Input}>
            <label className={css.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

input.propType = {
    elementType: PropTypes.string,
    elementConfig: PropTypes.object,
    value: PropTypes.string
};

export default input;