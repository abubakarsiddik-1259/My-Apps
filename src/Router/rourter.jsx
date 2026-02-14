import { createBrowserRouter } from "react-router";
import MainlayOut from "../LayOut/MainlayOut";
import Home from "../Component/Home";
import ProductDetaila from "../Component/ProductDetaila";
import Products from "../Component/Products";
import Wishlist from "../Component/Wishlist";
import ErrorPage from "../Component/ErrorPage";










export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainlayOut,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
          {
             index: true,
             Component: Home,
             loader: () => fetch('./appsData.json')   
          },
          {
            path: "/product/:id",
            Component: ProductDetaila
          },
           {
        path: "/products",
       Component: Products
      },
       {
        path: "/wishlish",
       Component: Wishlist
      }
        ]
    }
])