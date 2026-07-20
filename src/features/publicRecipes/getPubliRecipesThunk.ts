import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPublicRecipes } from "../../api/publicRcipesApi/publicRcipesApi";

export const fetchPublicRecipes = createAsyncThunk(
    'publicRecipes/fetchPublicRecipes',
    async () => {
        const data = await getPublicRecipes();
        return data.meals;
    }
)