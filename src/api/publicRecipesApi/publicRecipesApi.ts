import { BASE_URL } from "../BASE_URL/BASE_URL";

export const getPublicRecipes = async () => {
    const response = await fetch(`${BASE_URL}/search.php?s=`);

    if (!response.ok) throw new Error('ошибка загрузки')

    return response.json()
}