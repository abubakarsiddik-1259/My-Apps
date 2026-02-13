import { createBrowserRouter } from "react-router";
import MainlayOut from "../LayOut/MainlayOut";
import Home from "../Component/Home";
import ProductDetaila from "../Component/ProductDetaila";










export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainlayOut,
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
        ]
    }
])