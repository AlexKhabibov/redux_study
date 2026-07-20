import { createSlice } from "@reduxjs/toolkit";
import { fetchPublicRecipes } from "./getPubliRecipesThunk";

const publicRecipesSlice = createSlice({
    name: "publicRecipes",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchPublicRecipes.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(fetchPublicRecipes.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchPublicRecipes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    }
});

export const publicRecipesReducer = publicRecipesSlice.reducer;