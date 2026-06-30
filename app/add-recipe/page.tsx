import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MainContent from '@/components/main-content/MainContent';

export default function AddRecipe() {
  return (
    <>
      <Header />
      <MainContent>
        <main>
          <h1>Add Recipe</h1>
          {/* Add your recipe adding logic here */}
        </main>
      </MainContent>
      <Footer/>
    </>
  );
}
