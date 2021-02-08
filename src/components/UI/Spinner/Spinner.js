import react from "react";
import classNames from "./Spinner.module.css";

const spinner = props => {
    return <div className={classNames.Loader}>Loading...</div>;
};

export default spinner;