import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe, editRecipe } from "../features/customRecipes/customRecipesSlice";
import styles from "./RecipeCard.module.css";
import { toggleToFavoritesRecipes } from "../features/favoriteRecipes/favoriteRecipesSlice";

function RecipeCard({ recipe }) {

    const dispatch = useDispatch();

    const favorites = useSelector(state => state.favorites.items)
    const isFavorites = favorites.includes(recipe.id)

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const [category, setCategory] = useState(recipe.category);
    const [cookingTime, setCookingTime] = useState(recipe.cookingTime);
    const [difficulty, setDifficulty] = useState(recipe.difficulty);
    const [ingredients, setIngredients] = useState(recipe.ingredients);

    useEffect(() => {
        setTitle(recipe.title);
        setDescription(recipe.description);
        setCategory(recipe.category);
        setCookingTime(recipe.cookingTime);
        setDifficulty(recipe.difficulty);
        setIngredients(recipe.ingredients);
    }, [recipe]);


    function handleChangeIngredient(id, field, value) {

        setIngredients(prev =>
            prev.map(ingredient =>
                ingredient.id === id
                    ? {
                        ...ingredient,
                        [field]: value
                    }
                    : ingredient
            )
        );
    }

    function handleDeleteIngredient(id) {

        setIngredients(prev =>
            prev.filter(ingredient => ingredient.id !== id)
        );

    }

    function handleSaveEdit() {

        dispatch(editRecipe({
            id: recipe.id,
            title,
            description,
            category,
            cookingTime: Number(cookingTime),
            difficulty: Number(difficulty),
            ingredients
        }));

        setIsEditing(false);
    }

    return (

        <div className={styles.card}>

            {
                isEditing ? (

                    <div className={styles.editForm}>

                        <input
                            className={styles.input}
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                        />


                        <textarea
                            className={styles.textarea}
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                        />


                        <input
                            className={styles.input}
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                        />


                        <input
                            className={styles.input}
                            type="number"
                            value={cookingTime}
                            onChange={(e) =>
                                setCookingTime(e.target.value)
                            }
                        />


                        <select
                            className={styles.input}
                            value={difficulty}
                            onChange={(e) =>
                                setDifficulty(e.target.value)
                            }
                        >

                            <option value="1">
                                Легко
                            </option>

                            <option value="2">
                                Средне
                            </option>

                            <option value="3">
                                Сложно
                            </option>

                            <option value="4">
                                Очень сложно
                            </option>

                            <option value="5">
                                Профессионально
                            </option>

                        </select>


                        <h4>
                            Ингредиенты
                        </h4>


                        {
                            ingredients.map(ingredient => (

                                <div
                                    className={styles.ingredientEdit}
                                    key={ingredient.id}
                                >

                                    <input
                                        className={styles.input}
                                        value={ingredient.name}
                                        onChange={(e) =>
                                            handleChangeIngredient(
                                                ingredient.id,
                                                "name",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <input
                                        className={styles.input}
                                        type="number"
                                        value={ingredient.amount}
                                        onChange={(e) =>
                                            handleChangeIngredient(
                                                ingredient.id,
                                                "amount",
                                                Number(e.target.value)
                                            )
                                        }
                                    />

                                    <input
                                        className={styles.input}
                                        value={ingredient.unit}
                                        onChange={(e) =>
                                            handleChangeIngredient(
                                                ingredient.id,
                                                "unit",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <button
                                        className={styles.deleteButton}
                                        onClick={() =>
                                            handleDeleteIngredient(ingredient.id)
                                        }
                                    >
                                        Удалить ингредиент
                                    </button>

                                </div>

                            ))
                        }


                        <button
                            className={styles.saveButton}
                            onClick={handleSaveEdit}
                        >
                            Сохранить
                        </button>


                    </div>


                ) : (


                    <>

                        <h3 className={styles.title}>
                            {recipe.title}
                        </h3>


                        <p>
                            {recipe.description}
                        </p>


                        <p>
                            Категория: {recipe.category}
                        </p>


                        <p>
                            Время приготовления: {recipe.cookingTime} минут
                        </p>


                        <p>
                            Сложность: {recipe.difficulty}/5
                        </p>


                        <div className={styles.ingredientsBlock}>

                            <h4>
                                Ингредиенты:
                            </h4>

                            <ul>
                                {
                                    recipe.ingredients.map(ingredient => (

                                        <li key={ingredient.id}>
                                            {ingredient.name}
                                            {" "}
                                            —
                                            {" "}
                                            {ingredient.amount}
                                            {" "}
                                            {ingredient.unit}
                                        </li>

                                    ))
                                }
                            </ul>

                        </div>


                        <div className={styles.actions}>


                            <button
                                className={styles.editButton}
                                onClick={() =>
                                    setIsEditing(true)
                                }
                            >
                                Изменить
                            </button>


                            <button
                                className={styles.deleteButton}
                                onClick={() =>
                                    dispatch(deleteRecipe(recipe.id))
                                }
                            >
                                Удалить рецепт
                            </button>

                            <button onClick={() => dispatch(toggleToFavoritesRecipes(recipe.id))}>
                                {isFavorites ? 'Улалить рецепт из избарнного' : 'Добавить рецепт в избарнное'}
                            </button>


                        </div>


                    </>

                )
            }

        </div>
    );
}


export default RecipeCard;