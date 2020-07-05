import React from 'react';
import { Link } from "react-router-dom";

import './Recipes.css';

const Recipes = props => (
    <div className="recipe-container">
            { props.recipes.map((recipe) => {
              return (
                <div key={recipe.recipe.url} className="recipe-card">
                    <Link to={{ 
                        pathname: `/recipe/${recipe.recipe.label}`,
                        state: { recipe: recipe.recipe }}}>
                            <img className="card-bg-img" src={recipe.recipe.image} alt={recipe.recipe.label}/>
                            <div className="card-hover"></div>
                            <h1 className="card-hover-text">Get Recipe &rarr;</h1>
                            <div className="card-publisher"><i className="fas fa-user"></i>{recipe.recipe.source}</div>
                            <h1 className="card-title">{recipe.recipe.label}</h1>
                            <h6 className="card-calories">{Math.floor(recipe.recipe.calories)} Calories</h6>
                    </Link>
                </div>
              )
            })}
    </div>
);

export default Recipes;