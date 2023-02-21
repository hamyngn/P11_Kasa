import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from './components/Layout';
import ProposedPage from './pages/ProposedPage';
import NoPage from './pages/NoPage';
import HomePage from "./pages/HomePage";

const routes = createBrowserRouter([
    {
        path:"/", 
        element: <Layout />,
        errorElement: <NoPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/a-propose",
                element: <ProposedPage />
            },
        ]
    }
])
export default routes;
