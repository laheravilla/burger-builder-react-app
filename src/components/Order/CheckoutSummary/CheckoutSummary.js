import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import css from "./CheckoutSummary.module.css";
import PropTypes from "prop-types";

const checkoutSummary = (props) => {
    return (
        <div className={css.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: "100%", margin: "auto"}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" onPurchaseAction={props.onCheckoutCancel} >CANCEL</Button>
            <Button btnType="Success" onPurchaseAction={props.onCheckoutContinue} >CONTINUE</Button>
        </div>
    );
}

checkoutSummary.propTypes = {
    ingredients: PropTypes.object,
    onCheckoutCancel: PropTypes.func.isRequired,
    onCheckoutContinue: PropTypes.func.isRequired,
};

export default checkoutSummary;