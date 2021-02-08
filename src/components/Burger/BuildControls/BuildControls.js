import React from "react";
import BuildControl from "./BuildControl/BuildControl"
import classNames from "./BuildControls.module.css";
import PropTypes from "prop-types";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
];

const buildControls = props => (
    <div className={classNames.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                onAddIngredient={() => props.onAddIngredients(ctrl.type)}
                onRemoveIngredient={() => props.onRemoveIngredients(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={classNames.OrderButton}
            disabled={!props.isPurchasable}
            onClick={props.onPurchasing}
        >ORDER NOW</button>
    </div>
);

buildControls.propTypes = {
    price: PropTypes.number.isRequired,
    onAddIngredients: PropTypes.func.isRequired,
    onRemoveIngredients: PropTypes.func.isRequired,
    disable: PropTypes.string,
    isPurchasable: PropTypes.bool.isRequired,
    onPurchasing: PropTypes.func.isRequired
};

export default buildControls;

