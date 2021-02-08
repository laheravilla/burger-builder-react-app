import React from "react";
import classNames from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import PropTypes from "prop-types";

const toolbar = props => (
    <header className={classNames.Toolbar}>
        <DrawerToggle click={props.onDrawerToggleClick} />
        <div className={classNames.Logo}>
            <Logo />
        </div>
        <nav className={classNames.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

toolbar.propTypes = {
    onDrawerToggleClick: PropTypes.func.isRequired
};

export default toolbar;