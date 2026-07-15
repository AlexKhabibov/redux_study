import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./recipesSlice";
import { favoritesReducer } from "./favoritesSlice";

const savedData = localStorage.getItem('reduxState');

const preloadedState = savedData ? JSON.parse(savedData) : undefined;

export const store = configureStore({

    reducer: {
        recipes: recipesReducer,
        favorites: favoritesReducer
    },
    preloadedState
});

store.subscribe(() => {
    localStorage.setItem(
        "reduxState",
        JSON.stringify(store.getState())
    );
});