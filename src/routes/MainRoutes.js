import React,{lazy,useState}  from 'react';
import UserList from '../container/usermanagement/users/list';
import {

    BrowserRouter,

    Routes,

    Route,

  } from "react-router-dom";



// const LoginRegistration = lazy(() => import('../Container/LoginRegistration/LoginRegistration'))

// const Registration = lazy(() => import('../Container/LoginRegistration/Registration/Registration'))



export default function MainRoutes() {

  return (

    <>  

        <BrowserRouter>

            <Routes>

            <Route exact path="/"  element={<UserList/>} />

            </Routes>

        </BrowserRouter>

    </>

  )

}