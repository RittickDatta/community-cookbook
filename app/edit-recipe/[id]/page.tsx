'use client';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MainContent from '@/components/main-content/MainContent';
import { NotificationContext } from '@/store/notification-context';
import { useParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

export default function EditRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setNotification({ message: 'Loading recipe...', status: 'info' });

        const response = await fetch(`/api/recipes/${id}`);
        setRecipe(await response.json());
        
        setNotification({ message: 'Recipe loaded successfully!', status: 'success' });
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setNotification({ message: 'Error fetching recipe.', status: 'error' });
      }
    };

    fetchRecipe();
  }, [id]);

  useEffect(() => {
    console.log('Fetched recipe:', recipe);
  }, [recipe]);

  return (
    <>
      <Header />
      <MainContent>
        <main>
          <h1>Edit Recipe</h1>
          {/* TODO: Implement recipe editing form */}
        </main>
      </MainContent>
      <Footer />
    </>
  );
}
