import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Display.css';

const Display = () => {
    const [food, setMeals] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [id, setId] = useState("");
    const [image, setImage]= useState("")
    useEffect(() => {
        if (searchText !== "") {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
                .then(res => res.json())
                .then(data => setMeals(data.meals));
        }
    }, [searchText]);

    useEffect(() => {
        if (id !== "") {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(res => res.json())
                .then(data => setImage(data.meals[0].strMealThumb))
        }
    },[id])
    // console.log(image)
    const handleSearch = (event) => {
        setSearchText(event.target.value);
    }

    const handleMeal = (props) => {
        setId(props);
    }


    
    return (
        <>
            <div className="search-field">
                <input type="text"
                    onChange={handleSearch}
                    placeholder="type here to search" />
            </div>
            {/* display area */}
            <div className="display">
                <div className="meals">
                    <Meals meals={food} handleMeal={handleMeal}></Meals>
                </div>
                <div className="cart">
                    <img src={image} alt="" />
                </div>
            </div>
        </>
    );
};

export default Display;