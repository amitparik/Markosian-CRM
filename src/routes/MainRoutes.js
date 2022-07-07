import React,{lazy,useState}  from 'react';
import UserList from '../containers/layout';

import Button from '../containers/uipage';

import {

    BrowserRouter,

    Routes,

    Route,

  } from "react-router-dom";



//  const UserList = lazy(() => import('../containers/layout'))

// const Registration = lazy(() => import('../Container/LoginRegistration/Registration/Registration'))



export default function MainRoutes() {

  return (

    <>  

        <BrowserRouter>

            <Routes>

            <Route exact path="/" element={<UserList pageName="userslist"/>}/>
            <Route exact path="/ui" element={<Button/>}/>

            </Routes>

        </BrowserRouter>

    </>

  )

}
/**
 * Created by Win10 on 05-07-2022.
 */
