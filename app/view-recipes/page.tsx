'use client';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MainContent from '@/components/main-content/MainContent';
import RecipeCard from '@/components/recipe-card/recipe-card';
import { mockRecipes } from '@/mock/data';
import { useState } from 'react';

export default function ViewRecipes() {
  const [recipes, setRecipes] = useState(mockRecipes); // Replace with your actual recipe data

  const recipeCards = recipes.map((recipe) => (
    <RecipeCard
      recipie={recipe}
      key={recipe.id}
    />
  ));

  return (
    <>
      <Header />
      <MainContent>
        <main>
          <h1 className="w-full flex justify-center text-2xl mb-4">
            All Recipes
          </h1>
          <div className="recipe-cards">{recipeCards}</div>
        </main>
      </MainContent>
      <Footer />
    </>
  );
}
