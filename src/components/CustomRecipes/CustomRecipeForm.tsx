import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./CustomRecipeForm.module.css";
import { addRecipe } from "../../features/customRecipes/customRecipesSlice";

function CustomRecipeForm() {
    const dispatch = useDispatch();

    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeDifficulty, setRecipeDifficulty] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");
    const [recipeCategory, setRecipeCategory] = useState("");
    const [recipeCookingTime, setRecipeCookingTime] = useState("");
    const [recipeIngredients, setRecipeIngredients] = useState([]);

    const [ingredientName, setIngredientName] = useState("");
    const [ingredientAmount, setIngredientAmount] = useState("");
    const [ingredientUnit, setIngredientUnit] = useState("");

    function handleAddIngredients() {
        if (!ingredientName || !ingredientAmount || !ingredientUnit) return;

        const newIngredient = {
            id: Date.now(),
            name: ingredientName,
            amount: Number(ingredientAmount),
            unit: ingredientUnit,
        };

        setRecipeIngredients(prev => [...prev, newIngredient]);

        setIngredientName("");
        setIngredientAmount("");
        setIngredientUnit("");
    }

    function handleAddRecipe() {
        if (
            !recipeTitle ||
            !recipeDifficulty ||
            !recipeDescription ||
            !recipeCategory ||
            !recipeCookingTime ||
            recipeIngredients.length === 0
        ) {
            return;
        }

        const newRecipe = {
            id: Date.now(),
            title: recipeTitle,
            description: recipeDescription,
            category: recipeCategory,
            cookingTime: Number(recipeCookingTime),
            difficulty: Number(recipeDifficulty),
            ingredients: recipeIngredients
        };

        dispatch(addRecipe(newRecipe));

        setRecipeTitle("");
        setRecipeDescription("");
        setRecipeCategory("");
        setRecipeCookingTime("");
        setRecipeDifficulty("");
        setRecipeIngredients([]);

        setIngredientName("");
        setIngredientAmount("");
        setIngredientUnit("");
    }

    return (
        <div className={styles.container}>

            <h2 className={styles.title}>
                Создание рецепта
            </h2>

            <input
                className={styles.input}
                type="text"
                placeholder="Название"
                value={recipeTitle}
                onChange={(e) => setRecipeTitle(e.target.value)}
            />

            <textarea
                className={styles.textarea}
                placeholder="Описание"
                value={recipeDescription}
                onChange={(e) => setRecipeDescription(e.target.value)}
            />

            <input
                className={styles.input}
                type="text"
                placeholder="Категория"
                value={recipeCategory}
                onChange={(e) => setRecipeCategory(e.target.value)}
            />

            <input
                className={styles.input}
                type="number"
                placeholder="Время приготовления в минутах"
                value={recipeCookingTime}
                onChange={(e) => setRecipeCookingTime(e.target.value)}
            />

            <select
                className={styles.select}
                value={recipeDifficulty}
                onChange={(e) => setRecipeDifficulty(e.target.value)}
            >
                <option value="">
                    Выберите сложность
                </option>
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


            <h3 className={styles.sectionTitle}>
                Добавить ингредиент
            </h3>


            <input
                className={styles.input}
                type="text"
                placeholder="Название ингредиента"
                value={ingredientName}
                onChange={(e) => setIngredientName(e.target.value)}
            />

            <input
                className={styles.input}
                type="text"
                placeholder="Количество в единицах измерения"
                value={ingredientAmount}
                onChange={(e) => setIngredientAmount(e.target.value)}
            />

            <select
                className={styles.select}
                value={ingredientUnit}
                onChange={(e) => setIngredientUnit(e.target.value)}
            >
                <option value="">
                    Выберите единицу
                </option>

                <option value="г">
                    Граммы (г)
                </option>

                <option value="кг">
                    Килограммы (кг)
                </option>

                <option value="мл">
                    Миллилитры (мл)
                </option>

                <option value="л">
                    Литры (л)
                </option>

                <option value="шт">
                    Штуки (шт)
                </option>

                <option value="ст.л">
                    Столовая ложка
                </option>

                <option value="ч.л">
                    Чайная ложка
                </option>

            </select>


            <button
                className={styles.button}
                onClick={handleAddIngredients}
            >
                Добавить ингредиент
            </button>


            <h3 className={styles.sectionTitle}>
                Ингредиенты:
            </h3>


            <ul className={styles.ingredients}>
                {recipeIngredients.map(ingredient => (
                    <li key={ingredient.id}>
                        {ingredient.name} — {ingredient.amount} {ingredient.unit}
                    </li>
                ))}
            </ul>


            <button
                className={styles.button}
                onClick={handleAddRecipe}
            >
                Добавить в список рецептов
            </button>

        </div>
    );
}

export default CustomRecipeForm;