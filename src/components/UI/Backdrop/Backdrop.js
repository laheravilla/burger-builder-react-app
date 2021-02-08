import React from "react";
import classNames from "./Backdrop.module.css";
import PropTypes from "prop-types";

const backdrop = props => {
    return props.show
        ? <div className={classNames.Backdrop} onClick={props.click}/>
        : null;
};

backdrop.propTypes = {
    show: PropTypes.bool,
    click: PropTypes.func.isRequired
};

export default backdrop;