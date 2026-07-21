import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublicRecipes } from "../../features/publicRecipes/getPubliRecipesThunk";

function PublicRecipesPage() {

    const dispatch = useDispatch();
    const { items, loading, error } = useSelector(state => state.publicRecipes);

    useEffect(() => {
        dispatch(fetchPublicRecipes())
    }, [dispatch])

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>{error.message}</p>

    return (
        <>
            <div>
                <h1>
                    Публичные рецепты
                </h1>
                {
                    items.map(recipe => (
                        <div key={recipe.idMeal}>
                            {recipe.strMeal}
                        </div>
                    ))
                }
            </div>
        </>
    )
};

export default PublicRecipesPage;