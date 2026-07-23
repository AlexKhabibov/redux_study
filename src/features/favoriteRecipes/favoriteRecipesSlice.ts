import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: []
}

const favoriteRecipesSlice = createSlice({
    name: 'favoriteRecipes',
    initialState,
    reducers: {
        toggleToFavoriteRecipes: (state, action) => {

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

export const favoriteRecipesReducer = favoriteRecipesSlice.reducer;
export const { toggleToFavoriteRecipes } = favoriteRecipesSlice.actions