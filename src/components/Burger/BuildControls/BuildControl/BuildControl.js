import React from "react";
import classNames from "./BuildControl.module.css";
import PropTypes from "prop-types";

const buildControl = props => (
    <div className={classNames.BuildControl}>
        <div className={classNames.Label}>{props.label}</div>
        <button
            className={classNames.Less}
            onClick={props.onRemoveIngredient}
            disabled={props.disabled}>Less
        </button>
        <button
            className={classNames.More}
            onClick={props.onAddIngredient}>More
        </button>
    </div>
);

buildControl.propTypes = {
        label: PropTypes.string.isRequired,
        onRemoveIngredients: PropTypes.func,
        disable: PropTypes.string,
        onAddIngredient: PropTypes.func.isRequired
};

export default buildControl;

