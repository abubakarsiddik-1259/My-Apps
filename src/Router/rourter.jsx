import { createBrowserRouter } from "react-router";
import MainlayOut from "../LayOut/MainlayOut";
import Home from "../Component/Home";










export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainlayOut,
        children:[
          {
             index: true,
             Component: Home,   
          }
        ]
    }
])