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
                    config: {type: "text", placeholder: "Your Name"},
                    value: "",
                    valueType: "name",
                    validation: { required: true },
                    isValid: false,
                    isOnInput: false
                },
                street: {
                    elementType: "input",
                    config: {type: "text", placeholder: "Street"},
                    value: "",
                    valueType: "street",
                    validation: { required: true },
                    isValid: false,
                    isOnInput: false
                },
                zipCode: {
                    elementType: "input",
                    config: {type: "text", placeholder: "Postal Code"},
                    value: "",
                    valueType: "zip code",
                    validation: { required: true, minLength: 5, maxLength: 5 },
                    isValid: false,
                    isOnInput: false
                },
                country: {
                    elementType: "input",
                    config: {type: "text", placeholder: "Country"},
                    value: "",
                    valueType: "country",
                    validation: { required: true },
                    isValid: false,
                    isOnInput: false
                },
                email: {
                    elementType: "input",
                    config: {type: "email", placeholder: "Your Email"},
                    value: "",
                    valueType: "email",
                    validation: { required: true },
                    isValid: false,
                    isOnInput: false
                },
                deliveryMethod: {
                    elementType: "select",
                    config: {
                        options: [
                            {value: "", displayValue: "Select delivery method"},
                            {value: "fastest", displayValue: "Fastest"},
                            {value: "cheapest", displayValue: "Cheapest"}
                        ],
                    },
                    value: "cheapest",
                    validation: {},
                    isValid: true,
                }
            },
            isLoading: false,
            isValidForm: false
        };
    }

    orderHandler = (Event) => {
        Event.preventDefault();
        this.setState({loading: true});

        const formData = {};
        for (let formElemIdentifier in this.state.orderForm) {
            formData[formElemIdentifier] = this.state.orderForm[formElemIdentifier].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price.toFixed(2),
            orderData: formData
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

    validator(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangeHandler = (Event, inputIdentifier) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElem = {...updatedOrderForm[inputIdentifier]};
        updatedFormElem.value = Event.target.value;
        updatedFormElem.isValid = this.validator(updatedFormElem.value, updatedFormElem.validation);
        updatedFormElem.isOnInput = true;
        updatedOrderForm[inputIdentifier] = updatedFormElem;

        let isValidForm = true;
        for (let inputIdentifier in updatedOrderForm) {
            isValidForm = updatedOrderForm[inputIdentifier].isValid && isValidForm;
        }

        this.setState({orderForm: updatedOrderForm, isValidForm});
    }

    render () {
        let formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(form => (
                    <Input
                        key={form.id}
                        valueType={this.state.orderForm[form.id].valueType}
                        elementtype={form.config.elementType}
                        config={form.config.config}
                        value={form.config.value}
                        invalid={!form.config.isValid}
                        shouldValidate={form.config.validation}
                        isOnInput={form.config.isOnInput}
                        onInputChange={(Event) => this.inputChangeHandler(Event, form.id)}
                    />
                ))}
                <Button btnType="Success" disabled={!this.state.isValidForm}>ORDER</Button>
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