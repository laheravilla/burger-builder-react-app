import React from "react";
import classNames from "./Button.module.css";
import PropTypes from "prop-types";

const button = props => (
    <button
        className={[classNames.Button, classNames[props.btnType]].join(" ")}
        onClick={props.onPurchaseAction}
    >{props.children}
    </button>
);

export default button;

button.propTypes = {
    btnType: PropTypes.string.isRequired,
    onPurchaseAction: PropTypes.func.isRequired
};