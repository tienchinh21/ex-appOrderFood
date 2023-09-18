import React from 'react';
import mealsIma from '../../assets/download.jpg';
import HeaderCardButton from './HeaderCardButton';
import classes from './Header.module.css';
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsIma} alt="" />
            </div>
        </React.Fragment>
    );
};
export default Header;