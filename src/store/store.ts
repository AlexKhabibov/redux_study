import { configureStore } from "@reduxjs/toolkit";
import { customRecipesReducer } from "../features/customRecipes/customRecipesSlice";
import { productsReducer } from "../features/products/productsSlice";
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice";
import { publicRecipesReducer } from "../features/publicRecipes/publicRecipes";

const savedData = localStorage.getItem('reduxState');

const preloadedState = savedData ? JSON.parse(savedData) : undefined;

export const store = configureStore({

    reducer: {
        customRecipes: customRecipesReducer,
        publicRecipes: publicRecipesReducer,
        favoriteRecipes: favoriteRecipesReducer,
        publicProducts: productsReducer,
    },

    preloadedState
});

store.subscribe(() => {
    localStorage.setItem(
        "reduxState",
        JSON.stringify(store.getState())
    );
});