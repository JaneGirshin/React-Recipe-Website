import React from 'react';

const Form = props => (
    <div className="form">
        <form onSubmit={props.getRecipe}>
            <input className="form__input" type="text" name="recipeName" placeholder="Type Recipe..."/>
            <button className="form__button"><i className="fa fa-search"></i></button>
        </form>
    </div>
);

export default Form;