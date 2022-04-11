import React, { useState, useEffect } from "react";
import axios from "axios";


function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");

    const url = `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`

    useEffect(() => {
        axios.get(url).then((response) => {
            setImageUrl(response.data.image)
        }).catch((error) => {
            console.log(error)
        })
    }, [meal.id])

    return (
        <article>
            <h1>{meal.title}</h1>
            <img src={imageUrl} alt="recipe" />
            <ul className="instructions">
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>

            <a href={meal.sourceUrl}>Go to Recipe</a>
        </article>
    );
}

export default Meal