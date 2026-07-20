import { BASE_URL } from "../BASE_URL/BASE_URL";

export const getPublicProducts = async () => {
    const response = await fetch(`${BASE_URL}/list.php?i=list`);

    if (!response.ok) throw new Error('ошибка загрузки')

    return response.json()
}