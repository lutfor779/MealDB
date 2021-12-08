import React from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = (props) => {
    // console.log(props.handleMeal)
    return (
        <div>
            {
                props.meals.length > 0 ? props.meals.map(meal => <Meal key={meal.idMeal} meal={meal} handleMeal={props.handleMeal}></Meal>) : <h1>Nothing to show</h1>
            }
        </div>
    );
};

export default Meals;