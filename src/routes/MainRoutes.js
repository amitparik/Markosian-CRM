import React,{lazy,useState}  from 'react';
import UserList from '../containers/usermanagement/users/userlist';
import Header from '../components/Header/index';
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

            <Route exact path="/" element={<UserList/>}/>

            </Routes>

        </BrowserRouter>

    </>

  )

}
/**
 * Created by Win10 on 05-07-2022.
 */
