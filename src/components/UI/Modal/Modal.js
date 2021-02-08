import React, { Fragment } from "react";
import classNames from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import PropTypes from "prop-types";

const Modal = props => {
    return (
        <Fragment>
            <Backdrop show={props.show} click={props.onModalClose} />
            <div
                className={classNames.Modal}
                style={{
                    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: props.show ? "1" : "0"
                }}
            >
                {props.children}
            </div>
        </Fragment>
    );
};

Modal.propTypes = {
    show: PropTypes.bool,
    onModalClose: PropTypes.func.isRequired
};

export default React.memo(Modal, (prevProps, nextProps) => {
    return prevProps.show === nextProps.show && prevProps.children === nextProps.children;
});