import React,{lazy}  from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
//import Login from '../containers/Login/Login';

const Login = lazy(() => import('../containers/Login/Login'));
// const Registration = lazy(() => import('../Container/LoginRegistration/Registration/Registration'))

export default function MainRoutes() {
  return (
    <>  
        <BrowserRouter>
            <Routes>
                <Route exact path="/"  element={<Login />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
