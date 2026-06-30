import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MainContent from '@/components/main-content/MainContent';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <MainContent>
        <main className="w-full h-screen flex justify-center items-center">
          <div className="homepage-banner">
            <h1 className="text-4xl font-bold text-center">
              Welcome to Cookbook Community
            </h1>
            <p>A cookbook by the community, for the community.</p>
            <Link href="/view-recipes">
              <button className="px-4 py-2 text-2xl border-1 rounded-sm mt-8 hover:cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        </main>
      </MainContent>
      <Footer />
    </>
  );
}
