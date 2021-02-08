import React from "react";
import { NavLink } from "react-router-dom";
import css from "./NavigationItem.module.css";
import PropTypes from "prop-types";

const navigationItem = props => (
    <li className={css.NavigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={css.active}
        >{props.children}
        </NavLink>
    </li>
);

navigationItem.propType = {
    link: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
};

export default navigationItem;