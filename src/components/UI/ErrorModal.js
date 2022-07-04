import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";
import Backdrop from "./Backdrop";

import classes from "./ErrorModal.module.css";

const BackdropModal = (props) => {
    return <Backdrop onClose={props.onClose} />
};

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.action}>
                <Button onClick={props.onClose}>Okay</Button>
            </footer>
        </Card>
)};

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackdropModal onClose={props.onClose} />, 
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title}
                message={props.message}
                action={props.action}
                onClose={props.onClose}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default ErrorModal;