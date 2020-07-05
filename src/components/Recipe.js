import React, {Component} from 'react';
import { Link } from "react-router-dom";

import './Recipe.css';

class Recipe extends Component {
    render() {
        const aRecipe = this.props.location.state.recipe;

        return(
            <>
                <div className="recipe-page">
                    <div className="recipe-page-container">
                        <img className="recipe-info-img" src={aRecipe.image} alt={aRecipe.label}></img>
                        <div className="recipe-info">
                            <div className="info-header">
                                <form action={aRecipe.url} target="_blank">
                                    <input type="submit" value={aRecipe.source}/>
                                </form>
                                <h1>{aRecipe.label}</h1>
                                <h4>{Math.floor(aRecipe.calories)} Calories</h4>
                                <h4>{aRecipe.yield} Servings</h4>
                            </div>
                            <div className="info-bottom">
                                <ul>
                                    { aRecipe.ingredientLines.map((ingredient) => {
                                        return (
                                            <li key={ingredient}>- {ingredient}</li>
                                        )
                                    })}
                                </ul>
                                <Link to="/">
                                    <button className="go-home">
                                        Go Home
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="recipe-footer">
                    <div>&copy; Jane Girshin 2020</div>
                </footer>
            </>
        );
    }
}


export default Recipe;