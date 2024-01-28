import React from 'react';

import Login from '../LoginComponent/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';  
import Restaurantdata from '../restaurantComponent/Restaurantdata.js';
import Maincontainer from '../restaurantComponent/Maincontainer.js';

import RestaurantMenu from '../restaurantComponent/RestaurantMenu.js';
import Header from '../LoginComponent/Header.js';


const Body = () => {


    const appRouter = createBrowserRouter(
        [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/restaurant',
                element: 
                <>
                <Restaurantdata />
                <Maincontainer/>
                </>

            },
            {
                path: "/restaurant/:id",
                element: 
                <>
                
                <RestaurantMenu />,
                </>
              },
        ]
    )

    return (
        <RouterProvider router={appRouter} />
    )
}

export default Body;