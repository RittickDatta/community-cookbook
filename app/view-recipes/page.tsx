'use client';
import FilterBar from '@/components/filter-bar/FilterBar';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MainContent from '@/components/main-content/MainContent';
import RecipeCard from '@/components/recipe-card/recipe-card';
import { useContext, useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { NotificationContext } from '@/store/notification-context';

export default function ViewRecipes() {
  const [recipes, setRecipes] = useState([]);
  const router = useRouter();
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setNotification({ message: 'Loading recipes...', status: 'info' });
        const response = await fetch('/api/recipes');
        const data = await response.json();
        setRecipes(data);
        setNotification({ message: 'Recipes loaded successfully!', status: 'success' });
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setNotification({ message: 'Error loading recipes.', status: 'error' });
      }
    };

    fetchRecipes();
  }, []); 

  const handleEdit = (id: number) => {
    console.log(`Edit recipe with ID: ${id}`);
    redirect(`/edit-recipe/${id}`);
  }

  const handleDelete = (id: number) => {
    console.log(`Delete recipe with ID: ${id}`);
    const deleteRecipe = async () => {
      try {
        setNotification({ message: 'Deleting recipe...', status: 'info' });
        const response = await fetch(`/api/recipes/${id}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        console.log('Deleted recipe:', data);
        setNotification({ message: 'Recipe deleted successfully!', status: 'success' });
      } catch (error) {
        console.error('Error deleting recipe:', error);
        setNotification({ message: 'Error deleting recipe.', status: 'error' });
      }
    };
    deleteRecipe();
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
    router.refresh();
  }

  const recipeCards = recipes.map((recipe) => (
    <RecipeCard
      recipie={recipe}
      key={recipe.id}
      onEdit={handleEdit}
      onDelete={handleDelete}
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
