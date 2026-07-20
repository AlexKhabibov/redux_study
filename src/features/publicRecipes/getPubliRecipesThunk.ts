import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPublicRecipes = createAsyncThunk(
    'publicRecipes/fetchPublicRecipes',
    async () => {
        const response = await fetch(' https://api.spoonacular.com/food/recipes');

        if (!response.ok) throw new Error('ошибка загрузки с сервера')

        const data = await response.json();
        return data;
    }
)