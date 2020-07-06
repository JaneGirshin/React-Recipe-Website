import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";

require('dotenv').config();

const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await api_call.json();
    this.setState({recipes: data.hits});
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render() {
    const {loading} = this.state;

    return (
      <>
          <div className="header">
            <div className="cut"></div>
            <div className="header-left">
              <div className="header-nav"></div>
              <h1 className="title"><i className="fas fa-ice-cream"></i>Yummyinmytummy</h1>
              <div className="inner-header">
                <h1>Craving Something?</h1>
                <h2>Well, We're Here For You</h2>
                <Form getRecipe={this.getRecipe} />
              </div>
            </div>
            <div className="header-right">
              <img className="header-right" src={require('./bg.jpg')} alt="background"/>
            </div>
          </div>
          <div className="app-body" aria-disabled={loading}>
            <div className="app-body-title">Recipes</div>
            <Recipes recipes={this.state.recipes} />
          </div>
          <footer>
              <div>&copy; Jane Girshin 2020</div>
          </footer>
      </>
    );
  }
}

export default App;