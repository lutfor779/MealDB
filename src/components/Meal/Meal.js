import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const { idMeal, strMeal, strMealThumb, strArea, strCategory } = props.meal;

    return (
        <div className="singleMeal">
            <img src={strMealThumb} alt=""
                onClick={() => props.handleMeal(idMeal)}/>
            <div>
                <h1>{strMeal}</h1>
                <p>Category: <small>{strCategory}</small></p>
                <p>Found at <b>{strArea}</b></p>
                <p>{idMeal}</p>
           </div>
        </div>
    );
};

export default Meal;