import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/getProductsAsyncThunk";

function PublicProductsPage() {

    const dispatch = useDispatch();
    const { items, loading, error } = useSelector(state => state.publicProducts);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>{error.message}</p>

    return (
        <>
            <h1>
                Список Продуктов ингредиентов
            </h1>
            {
                items.map(product => (
                    <div key={product.idIngredient}>
                        {product.strIngredient}
                    </div>
                ))
            }
        </>
    )
};

export default PublicProductsPage;