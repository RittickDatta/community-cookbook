import { Recipe } from '@/models/recipe';
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
      <img
        src={image}
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
    </div>
  );
}
