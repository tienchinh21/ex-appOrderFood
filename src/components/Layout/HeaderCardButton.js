import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-content';

const HeaderCardButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItem = cartCtx.items ? cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0) : 0;
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    )
}
export default HeaderCardButton;
