import React from "react";
import Button from "../../../components/UI/Button/Button";
import css from "./ContactData.module.css";
import PropTypes from "prop-types";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderForm: {
                name: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Your Name"
                    },
                    value: ""
                },
                street: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Street"
                    },
                    value: ""
                },
                zipCode: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Postal Code"
                    },
                    value: ""
                },
                country: {
                    elementType: "input",
                    elementConfig: {
                        type: "text",
                        placeholder: "Country"
                    },
                    value: ""
                },
                email: {
                    elementType: "input",
                    elementConfig: {
                        type: "email",
                        placeholder: "Your Email"
                    },
                    value: ""
                },
                deliveryMethod: {
                    elementType: "select",
                    elementConfig: {
                        options: [
                            {value: "fastest", displayValue: "Fastest"},
                            {value: "cheapest", displayValue: "Cheapest"}
                        ]
                    },
                    value: ""
                }
            },
            isLoading: false
        };
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price.toFixed(2)
        };
        axios.post("/orders.json", order)
            .then(response => {
                this.setState({isLoading: false});
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({isLoading: false});
            });
    }

    render () {
        let form = (
            <form>
                <Input elementType="" elementConfig="" value="" />
                <Input inputtype="input" type="email" name="email" placeholder="Your Email" />
                <Input inputtype="input" type="text" name="street" placeholder="Street" />
                <Input inputtype="input" type="text" name="postalCode" placeholder="Postal Code" />
                <Button btnType="Success" onPurchaseAction={this.orderHandler} >ORDER</Button>
            </form>
        );
        if (this.state.isLoading) {
            form = <Spinner />;
        }

        return (
            <div className={css.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

ContactData.propTypes = {
    ingredients: PropTypes.object,
    price: PropTypes.number
};

export default ContactData;