import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: null,
            totalPrice: 4,
            isPurchasable: false,
            isPurchasing: false,
            isLoading: false,
            error: false
        };
    }

    componentDidMount() {
        axios.get("https://burger-builder-app-2099b-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json")
            .then(response => {
               this.setState({ingredients: response.data});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(ing => ingredients[ing])
            .reduce((sum, elem) => sum + elem, 0);

        this.setState({isPurchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const count = this.state.ingredients[type];
        const newCount = count + 1;
        const newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const price = this.state.totalPrice;
        const newPrice = price + priceAddition;

        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(newIngredients);
    };

    removeIngredientHandler = (type) => {
        const count = this.state.ingredients[type];
        if (count <= 0) return;

        const newCount = count - 1;
        const newIngredients = {...this.state.ingredients};
        newIngredients[type] = newCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const price = this.state.totalPrice;
        const newPrice = price - priceDeduction;

        this.setState({
            ingredients: newIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(newIngredients);
    };

   purchaseHandler = () => {
       this.setState({isPurchasing: true});
   }

   purchaseCancelHandler = () => {
       this.setState({isPurchasing: false});
   }

   purchaseContinueHandler = () => {
       let queryParams = [];
       for (let i in this.state.ingredients) {
           queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredients[i])}`)
       }

       queryParams.push(`price=${this.state.totalPrice.toFixed(2)}`);

       const queryString = queryParams.join("&");

       this.props.history.push({
           pathname: "/checkout",
           search: `?${queryString}`
       });
   }

    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; // {salad: true, meat: false, ...}
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
        if (this.state.ingredients) {
            burger = (
                <Fragment>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        onAddIngredients={this.addIngredientHandler}
                        onRemoveIngredients={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        isPurchasable={this.state.isPurchasable}
                        onPurchasing={this.purchaseHandler}
                        price={this.state.totalPrice}
                    />
                </Fragment>
            );

            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                onPurchaseCancel={this.purchaseCancelHandler}
                onPurchaseContinue={this.purchaseContinueHandler}
            />
        }

        if (this.state.isLoading) {
            orderSummary = <Spinner />;
        }

        return (
            <Fragment>
                <Modal show={this.state.isPurchasing} onModalClose={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Fragment>
        );
    }
}



export default withErrorHandler(BurgerBuilder, axios);
