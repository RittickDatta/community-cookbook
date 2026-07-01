import { Recipe } from '@/models/recipe';
import Link from 'next/link';
import Image from 'next/image';

export default function RecipeCard({ recipie }: { recipie: Recipe }) {
  const {
    title,
    description,
    calories,
    category,
    cookingTime,
    difficulty,
    image,
    servings,
  } = recipie;

  return (
    <div className="recipe-card">
      <Image 
        src={image.src}
        alt={title}
        width={300}
        height={200}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="w-[80%] flex space-between">
        <p>Category: {category}</p>
        <p>Cooking Time: {cookingTime} minutes</p>
      </div>
      <div className="w-full flex justify-end">
        <Link href={`/view-recipes/${recipie.id}`}>
          <button className="border border-1 p-1 rounded hover:cursor-pointer">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
}
