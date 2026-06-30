import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <Link href="/">Cookbook Community</Link>
      </h1>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/view-recipes">View Recipes</Link>
          </li>
          <li className="nav__item">
            <Link href="/add-recipe">Add a Recipe</Link>
          </li>
          <li className="nav__item">
            <Link href="/login">Sign In</Link>
          </li>
          <li className="nav__item">
            <Link href="/register">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
