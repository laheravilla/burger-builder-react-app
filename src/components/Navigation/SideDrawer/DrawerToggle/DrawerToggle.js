import React from "react";
import classNames from "./DrawerToggle.module.css";
import PropTypes from "prop-types";

const drawerToggle = props => (
    <div className={classNames.DrawerToggle} onClick={props.click}>
        <div />
        <div />
        <div />
    </div>
);

drawerToggle.propTypes = {
    click: PropTypes.func.isRequired
};

export default drawerToggle;