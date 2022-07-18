import React,{lazy}  from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const LoginRegistration = lazy(() => import('../containers/LoginRegistrationLayout/index'))

export default function MainRoutes() {
  return (
    <>  
        <BrowserRouter>
            <Routes>
                
                <Route exact path="/"  element={<LoginRegistration pageName="login" />} />
                <Route exact path="/login"  element={<LoginRegistration pageName="login" />} />
                <Route exact path="/registration" element={<LoginRegistration pageName="registration" />} />
                <Route exact path="/data-table" element={<UserList pageName="userslist"/>}/>
                <Route exact path="/ui" element={<Button/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
