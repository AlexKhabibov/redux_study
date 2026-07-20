import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favoriteRecipesItems: []
}

const favoriteRecipesSlice = createSlice({
    name: 'favoriteRecipes',
    initialState,
    reducers: {
        toggleToFavoriteRecipes: (state, action) => {

            const recipeId = action.payload;

            if (state.favoriteRecipesItems.includes(recipeId)) {
                state.favoriteRecipesItems = state.favoriteRecipesItems.filter(
                    id => id !== recipeId
                );
            } else {
                state.favoriteRecipesItems.push(recipeId);
            }
        }
    }
})

export const favoriteRecipesReducer = favoriteRecipesSlice.reducer;
export const { toggleToFavoriteRecipes } = favoriteRecipesSlice.actions