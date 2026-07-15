import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const favoritesRecipesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleToFavorites: (state, action) => {

            const recipeId = action.payload;

            if (state.items.includes(recipeId)) {
                state.items = state.items.filter(
                    id => id !== recipeId
                );
            } else {
                state.items.push(recipeId);
            }
        }
    }
})

export const favoritesReducer = favoritesRecipesSlice.reducer;
export const { toggleToFavorites } = favoritesRecipesSlice.actions