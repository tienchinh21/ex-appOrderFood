import React, { useRef, useState } from 'react'
import classes from "./MealItemForm.module.css"
import Input from '../../UI/Input'

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(false);
    const amountInputRef = useRef();
    const submitForm = (e) => {
        e.preventDefault();
        const enterAmount = amountInputRef.current.value;
        const enterAmountNumber = +enterAmount;
        if (enterAmount.trim().length === 0 || enterAmountNumber < 1 || enterAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enterAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={submitForm} action="">
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter amount</p>}
        </form>
    )
}
export default MealItemForm;
