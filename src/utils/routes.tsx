/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from "react-router-dom";
import { DashbordCompnent } from "../components/DashbordComponent/DashbordComponent";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashbordCompnent />
    },
    {
        path: "/home",
        element: <DashbordCompnent />
    }
])