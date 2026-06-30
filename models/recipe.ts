type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type Recipe = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  difficulty: Difficulty | string;
  servings: number;
  calories: number;
  cookingTime: number;
  ingredients: string[];
  steps: string[];
};
