import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "./BurgerIngredient.module.css";

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch (this.props.type) {
            case ("bread-bottom"):
                ingredient = <div className={classNames.BreadBottom}/>;
                break;
            case ("bread-top"):
                ingredient = (
                    <div className={classNames.BreadTop}>
                        <div className={classNames.Seeds1}/>
                        <div className={classNames.Seeds2}/>
                    </div>
                );
                break;
            case ("meat"):
                ingredient = <div className={classNames.Meat}/>;
                break;
            case ("cheese"):
                ingredient = <div className={classNames.Cheese}/>;
                break;
            case ("salad"):
                ingredient = <div className={classNames.Salad}/>;
                break;
            case ("bacon"):
                ingredient = <div className={classNames.Bacon}/>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string,
};

export default BurgerIngredient;



