import React, { Fragment } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classNames from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import PropTypes from "prop-types";

const sideDrawer = props => {
    let attachedClassesNames = [classNames.SideDrawer, classNames.Close];
    if (props.open) {
        attachedClassesNames = [classNames.SideDrawer, classNames.Open];
    }

    return (
        <Fragment>
            <Backdrop show={props.open} click={props.onSideDrawerClose} />
            <div className={attachedClassesNames.join(" ")}>
                <div className={classNames.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    );
};

sideDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onSideDrawerClose: PropTypes.func.isRequired
};

export default sideDrawer;