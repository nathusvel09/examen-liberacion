import React from 'react';
import '../styles/Recipe.css';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.name}</h2>
      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instrucciones:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default Recipe;
