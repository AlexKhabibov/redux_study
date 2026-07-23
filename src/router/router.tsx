import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import CustomRecipesPage from "../pages/CustomRecipesPage/CustomRecipesPage";
import PublicRecipesPage from "../pages/PublicRecipesPage/PublicRecipesPage";
import PublicProductsPage from "../pages/PublicProductsPage/PublicProductsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        
    children: [
            {
                index: true,
                element: <CustomRecipesPage />
            },
            {
                path: "public-recipes",
                element: <PublicRecipesPage />
            },
            {
                path: "products",
                element: <PublicProductsPage />
            }
        ]
    }
])