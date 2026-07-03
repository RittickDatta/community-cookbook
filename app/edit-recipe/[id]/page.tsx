'use client';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MainContent from '@/components/main-content/MainContent';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipes/${id}`);
        setRecipe(await response.json());
      } catch (error) {
        console.error('Error fetching recipe:', error);
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
