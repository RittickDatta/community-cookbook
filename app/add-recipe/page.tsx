'use client';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import MainContent from '@/components/main-content/MainContent';
import { DIFFICULTY } from '@/constants/constants';
import { useContext, useState, type FormEvent } from 'react';
import { redirect } from 'next/navigation';
import { NotificationContext } from '@/store/notification-context';

export default function AddRecipe() {
  const [category, setCategory] = useState<string[]>([
    'Select',
    'Indian',
    'Asian',
    'Continental',
  ]);
  const { setNotification } = useContext(NotificationContext);

  const handleAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as unknown as HTMLFormElement);

    const payload = Object.fromEntries(formData);

    console.log('Payload', payload);

    setNotification({ message: 'Adding recipe...', status: 'info' });
    const response = await fetch('/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setNotification({ message: 'Error adding recipe.', status: 'error' });
    }
    
    setNotification({
      message: 'Recipe added successfully!',
      status: 'success',
    });
    redirect('/view-recipes');
    // TODO:Reset form after API call
  };

  return (
    <>
      <Header />
      <MainContent>
        <main>
          <h1 className="w-full flex justify-center text-2xl">
            Add New Recipe
          </h1>
          <div className="form-container">
            <form
              className="pb-20"
              onSubmit={handleAdd}
            >
              <div className="flex gap-5">
                <div className="left-fields">
                  <div className="form-field">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="category">Category</label>
                    <select
                      name="category"
                      id="category"
                    >
                      {category.map((item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="image">Image</label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="difficulty">Difficulty</label>
                    <select
                      name="difficulty"
                      id="difficulty"
                    >
                      {DIFFICULTY.map((item) => (
                        <option
                          value={item}
                          key={item}
                        >
                          {item.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full flex gap-15">
                    <div className="form-field">
                      <label htmlFor="servings">Servings</label>
                      <input
                        type="number"
                        name="servings"
                        id="servings"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="calories">Calories</label>
                      <input
                        type="number"
                        name="calories"
                        id="calories"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="cookingTime">
                      Cooking Time (in minutes)
                    </label>
                    <input
                      type="number"
                      id="cookingTime"
                      name="cookingTime"
                    />
                  </div>
                </div>
                <div className="right-fields">
                  <div className="form-field">
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea
                      name="ingredients"
                      id="ingredients"
                      rows={6}
                      cols={40}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="steps">Steps</label>
                    <textarea
                      name="steps"
                      id="steps"
                      rows={17}
                      cols={40}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <button
                  className="w-full outline rounded-sm py-1 px-2 ml-20"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </main>
      </MainContent>
      <Footer />
    </>
  );
}
