import React, { Fragment, Component } from "react";
import classNames from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: true
        };
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render () {
        return (
            <Fragment>
                <Toolbar onDrawerToggleClick={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} onSideDrawerClose={this.sideDrawerCloseHandler} />
                <main className={classNames.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;