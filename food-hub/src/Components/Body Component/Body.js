import React from 'react';

import Login from '../LoginComponent/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';  

import RestaurantMenu from '../restaurantComponent/restaurantMenu';

const Body = () => {


    const appRouter = createBrowserRouter(
        [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/restaurant',
                element: <RestaurantMenu />
            },
        ]
    )

    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body;
