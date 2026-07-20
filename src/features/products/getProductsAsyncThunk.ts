import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPublicProducts } from "../../api/publicProductsApi/publicProductsApi";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const data = await getPublicProducts();
        return data.meals;
    }
)