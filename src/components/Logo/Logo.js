import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classNames from "./Logo.module.css";
import PropTypes from "prop-types";

const logo = props => (
    <div className={classNames.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="logo"/>
    </div>
);

logo.propType = {
    height: PropTypes.string
};

export default logo;