'use client';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MainContent from '@/components/main-content/MainContent';
import { useParams } from 'next/navigation';

export default function RecipePage() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <MainContent>
        <h1>Recipe Details</h1>
        <p>Recipe ID: {id}</p>
      </MainContent>
      <Footer />
    </>
  );
}
