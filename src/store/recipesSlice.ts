import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recItems: [
        {
            id: 1,
            title: "Паста Карбонара",
            description: "Классическая итальянская паста с беконом, сыром и сливочным соусом.",
            category: "Итальянская кухня",
            cookingTime: 30,
            difficulty: 3,
            ingredients: [
                {
                    id: 101,
                    name: "Спагетти",
                    amount: 200,
                    unit: "г"
                },
                {
                    id: 102,
                    name: "Бекон",
                    amount: 150,
                    unit: "г"
                },
                {
                    id: 103,
                    name: "Яйца",
                    amount: 2,
                    unit: "шт"
                },
                {
                    id: 104,
                    name: "Пармезан",
                    amount: 50,
                    unit: "г"
                }
            ]
        },
        {
            id: 2,
            title: "Борщ",
            description: "Традиционный суп со свеклой, мясом и овощами.",
            category: "Русская кухня",
            cookingTime: 120,
            difficulty: 4,
            ingredients: [
                {
                    id: 201,
                    name: "Свекла",
                    amount: 300,
                    unit: "г"
                },
                {
                    id: 202,
                    name: "Говядина",
                    amount: 500,
                    unit: "г"
                },
                {
                    id: 203,
                    name: "Картофель",
                    amount: 400,
                    unit: "г"
                },
                {
                    id: 204,
                    name: "Капуста",
                    amount: 300,
                    unit: "г"
                }
            ]
        },
        {
            id: 3,
            title: "Сырники",
            description: "Нежные творожные сырники для завтрака.",
            category: "Завтраки",
            cookingTime: 25,
            difficulty: 2,
            ingredients: [
                {
                    id: 301,
                    name: "Творог",
                    amount: 500,
                    unit: "г"
                },
                {
                    id: 302,
                    name: "Яйцо",
                    amount: 1,
                    unit: "шт"
                },
                {
                    id: 303,
                    name: "Мука",
                    amount: 100,
                    unit: "г"
                },
                {
                    id: 304,
                    name: "Сахар",
                    amount: 50,
                    unit: "г"
                }
            ]
        }
    ]
};

const recipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {

        addRecipe: (state, action) => {
            state.recItems.unshift(action.payload);
        },

        deleteRecipe: (state, action) => {
            state.recItems = state.recItems.filter(
                recipe => recipe.id !== action.payload
            );
        },

        editRecipe: (state, action) => {
            const recipe = state.recItems.find(
                recipe => recipe.id === action.payload.id
            );

            if (recipe) {
                recipe.title = action.payload.title;
                recipe.description = action.payload.description;
                recipe.category = action.payload.category;
                recipe.cookingTime = action.payload.cookingTime;
                recipe.difficulty = action.payload.difficulty;
                recipe.ingredients = action.payload.ingredients;
            }
        }
    }
});

export const recipesReducer = recipesSlice.reducer;

export const {
    addRecipe,
    deleteRecipe,
    editRecipe
} = recipesSlice.actions;