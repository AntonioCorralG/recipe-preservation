import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { recipes } from "../data/recipes";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const RecipeCard = styled.div`
  width: 30%;
  margin: 1rem;
  box-shadow: 0 0 5px rgba(96, 80, 59, 0.527);
  cursor: pointer;
`;

const RecipeTitle = styled.h2`
  margin-top: 0.5rem;
`;

const RecipeDescription = styled.p`
  margin-bottom: 0.5rem;
`;

const RecipeModal = styled.div`
  display: ${({ showModal }) => (showModal ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ddd;
  padding: 1rem;
  z-index: 999;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px; /* Fixed height for consistency */
  object-fit: cover; /* Maintain aspect ratio */
`;

const LikeButton = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
`;

const RecipeHeadings = styled.h3`
  text-align: left !important;
`;
const IngredientsList = styled.li`
  text-align: left !important;
`;

const LandingPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [likedRecipes, setLikedRecipes] = useState(() => {
    const likedRecipesFromStorage = sessionStorage.getItem("likedRecipes");
    return likedRecipesFromStorage ? JSON.parse(likedRecipesFromStorage) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("likedRecipes", JSON.stringify(likedRecipes));
  }, [likedRecipes]);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleLikeButton = (recipe) => {
    if (likedRecipes.includes(recipe.title)) {
      setLikedRecipes(likedRecipes.filter((title) => title !== recipe.title));
    } else {
      setLikedRecipes([...likedRecipes, recipe.title]);
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <h1 className="title">
          <i className="fa-solid fa-spoon"></i> Recipes Below
        </h1>
        <p>Click on a card below to find your new favorite!</p>
        <RecipeContainer>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} onClick={() => openModal(recipe)}>
              <RecipeImage src={recipe.imgUrl} alt={recipe.title} />
              <RecipeTitle>{recipe.title}</RecipeTitle>
              <RecipeDescription>{recipe.description}</RecipeDescription>
              <LikeButton
                liked={likedRecipes.includes(recipe.title)}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLikeButton(recipe);
                }}
              >
                <i
                  className={
                    likedRecipes.includes(recipe.title)
                      ? "fas fa-heart"
                      : "far fa-heart"
                  }
                  style={{
                    color: likedRecipes.includes(recipe.title)
                      ? "#ff69b4"
                      : "inherit",
                  }}
                />
                <p>Favorite</p>
              </LikeButton>
            </RecipeCard>
          ))}
        </RecipeContainer>
        <RecipeModal showModal={modalVisible}>
          <CloseButton onClick={closeModal}>X</CloseButton>
          {selectedRecipe && (
            <>
              <h2>{selectedRecipe.title}</h2>
              <RecipeImage
                src={selectedRecipe.imgUrl}
                alt={selectedRecipe.title}
              />
              <RecipeHeadings>Ingredients List</RecipeHeadings>
              <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <IngredientsList key={index}>{ingredient}</IngredientsList>
                ))}
              </ul>
              <RecipeHeadings>Instructions:</RecipeHeadings>
              <p>{selectedRecipe.instructions}</p>
              <p>{selectedRecipe.source}</p>
              <LikeButton
                liked={likedRecipes.includes(selectedRecipe.title)}
                onClick={() => toggleLikeButton(selectedRecipe)}
              >
                {likedRecipes.includes(selectedRecipe.title) ? "Favorited" : ""}
              </LikeButton>
            </>
          )}
        </RecipeModal>
      </Container>
      <Footer />
    </div>
  );
};

export default LandingPage;
