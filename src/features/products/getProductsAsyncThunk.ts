import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch(' https://api.spoonacular.com/food/products');

        if (!response.ok) throw new Error('ошибка загрузки с сервера')

        const data = await response.json();
        return data;
    }
)