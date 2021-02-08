import React from "react";
import css from "./Order.module.css";
import PropTypes from "prop-types";

const order = (props) => {
    let ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ing => {
        return <span
            className={css.Ingredient}
            key={ing.name}
        >{ing.name} ({ing.amount})
        </span>;
    });

    return (
        <div className={css.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

order.propTypes = {
    ingredients: PropTypes.object,
    price: PropTypes.number,
};

export default order;