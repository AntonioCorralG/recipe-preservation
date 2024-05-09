import React from 'react';

const RecipeCard = ({ recipe, openModal }) => {
  return (
    <div className="rec-card" onClick={() => openModal(recipe)}>
      <img src={recipe.imgUrl} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
