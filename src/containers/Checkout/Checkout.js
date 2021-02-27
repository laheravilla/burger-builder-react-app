import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends React.Component {
    checkoutCancelHandler = () => {
        this.props.history.goBack(); // Allows to get page where we come from
    }

    checkoutContinueHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    }

    render () {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    onCheckoutCancel={this.checkoutCancelHandler}
                    onCheckoutContinue={this.checkoutContinueHandler}
                />
                <Route
                    path={`${this.props.match.url}/contact-data`}
                    component={ContactData}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    };
};

export default connect(mapStateToProps)(Checkout);