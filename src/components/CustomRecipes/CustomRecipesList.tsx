import { useSelector } from "react-redux";
import styles from "./CustomRecipesList.module.css";
import RecipeForm from "./CustomRecipeForm";
import RecipeCard from "./CustomRecipeCard";
import { useState } from "react";

function CustomRecipesList() {

    const recipes = useSelector(state => state.recipes.recItems);
    const favorites = useSelector(state => state.favorites.items)

    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    const [showForm, setShowForm] = useState(false)

    const displayedRecipes = showFavoritesOnly
        ? recipes.filter(recipe => favorites.includes(recipe.id))
        : recipes;

    return (
        <div className={styles.container}>

            {showForm && (
                <div className={styles.formColumn}>
                    <RecipeForm />
                </div>
            )}


            <div className={styles.listColumn}>

                <h2 className={styles.title}>
                    Список рецептов
                </h2>

                <div className={styles.buttons}>

                    <button
                        onClick={() => setShowFavoritesOnly(prev => !prev)}>
                        {showFavoritesOnly ? "Все рецепты" : "Избранные"}
                    </button>

                    <button onClick={() => setShowForm(prev => !prev)}>
                        {showForm ? "Закрыть форму" : "Создать новый рецепт"}
                    </button>
                </div>


                <div className={styles.list}>
                    {recipes.length === 0 ? (
                        <p>
                            Рецептов пока нет
                        </p>
                    ) : (
                        displayedRecipes.map(recipe => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                            />
                        ))
                    )}
                </div>

            </div>

        </div>
    );
}

export default CustomRecipesList;