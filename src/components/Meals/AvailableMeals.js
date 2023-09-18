import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './Mealitem/MealItem';

const DUMMY_HEALS = [
    {
        id: '1',
        name: 'Ga Ran',
        description: 'Là món rán có nhiều dầu mỡ và ăn rất ngon',
        price: 30.000,
    },
    {
        id: '2',
        name: 'Vit Ran',
        description: 'Là món rán có nhiều dầu mỡ và ăn rất ngon',
        price: 20.000,
    },
    {
        id: '3',
        name: 'Heo Ran',
        description: 'Là món rán có nhiều dầu mỡ và ăn rất ngon',
        price: 10.000,
    },
]
const AvailableMeals = () => {
    const mealsList = DUMMY_HEALS.map((meal) => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />)
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};
export default AvailableMeals;
