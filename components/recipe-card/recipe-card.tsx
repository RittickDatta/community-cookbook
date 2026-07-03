import { Recipe } from '@/models/recipe';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  recipie: Recipe;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function RecipeCard({ recipie, onEdit, onDelete }: Props) {
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
          <button className="border border-1 p-1 rounded hover:cursor-pointer" onClick={() => onEdit(recipie.id)}>
            Edit Recipe
          </button>
          <button className="border border-1 p-1 rounded hover:cursor-pointer" onClick={() => onDelete(recipie.id)}>
            Delete Recipe
          </button>
      </div>
    </div>
  );
}
