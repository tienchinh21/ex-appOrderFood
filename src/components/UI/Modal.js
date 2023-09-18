import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const elementPortal = document.getElementById('overplays');
const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, elementPortal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, elementPortal)}
        </React.Fragment>
    )
}
export default Modal;
