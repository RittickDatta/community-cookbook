import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MainContent from '@/components/main-content/MainContent';

export default function ViewRecipes() {
  return (
    <>
      <Header />
      <MainContent>
        <main>
          <h1>View Recipes</h1>
          {/* Add your recipe viewing logic here */}
        </main>
      </MainContent>
      <Footer/>
    </>
  );
}
