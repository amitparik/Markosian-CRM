import React,{lazy,useState}  from 'react';

import {

    BrowserRouter,

    Routes,

    Route,

  } from "react-router-dom";

 const UserList = lazy(() => import('../containers/layout'))


export default function MainRoutes() {

  return (

    <>  

        <BrowserRouter>

            <Routes>

            <Route exact path="/" element={<UserList pageName='userslist'/>}/>

            </Routes>

        </BrowserRouter>

    </>

  )

}
/**
 * Created by Win10 on 05-07-2022.
 */
