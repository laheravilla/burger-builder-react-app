import React from "react";
import Button from "../../UI/Button/Button";
import PropTypes from "prop-types";

const OrderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(ing => (
            <li key={ing}>
                <span style={{textTransform: "capitalized"}}>{ing}</span>: {props.ingredients[ing]}
            </li>
        ));

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientsSummary}</ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" onPurchaseAction={props.onPurchaseCancel}>CANCEL</Button>
            <Button btnType="Success" onPurchaseAction={props.onPurchaseContinue}>CONTINUE</Button>
        </React.Fragment>
    );
};

OrderSummary.propTypes = {
    ingredients: PropTypes.object,
    price: PropTypes.number,
    onPurchaseCancel: PropTypes.func.isRequired,
    onPurchaseContinue: PropTypes.func.isRequired
};

export default OrderSummary;