'use client';
import FilterBar from '@/components/filter-bar/FilterBar';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MainContent from '@/components/main-content/MainContent';
import RecipeCard from '@/components/recipe-card/recipe-card';
import { useEffect, useState } from 'react';

export default function ViewRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/api/recipes');
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []); 

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
        <main className="pb-16">
          <h1 className="w-full flex justify-center text-2xl mb-4">
            All Recipes
          </h1>
          <div className="w-full flex justify-center">
            <div><FilterBar /></div>
            <div className="recipe-cards">{recipeCards}</div>
          </div>
        </main>
      </MainContent>
      <Footer />
    </>
  );
}
