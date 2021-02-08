import React from "react";
import { withRouter } from "react-router-dom";
import classNames from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";

const burger = props => {
    let ingredients = Object.keys(props.ingredients).map((ing, i) => {
        return [...Array(props.ingredients[ing])].map((_, i) => {
           return <BurgerIngredient key={ing + i} type={ing} />
        });
    }).reduce((arr, elem) => {
        return arr.concat(elem);
    }, []);

    if (ingredients.length === 0) {
        ingredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classNames.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

burger.propTypes = {
    ingredients: PropTypes.object,
};

burger.defaultProps = {
    ingredients: {}
};

export default withRouter(burger);

