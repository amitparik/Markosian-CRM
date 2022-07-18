import React from "react";
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import Footer from '../components/Footer/index';

import UserList from "./usermanagement/users/userlist";

function Layout(props)
{
    return(
        <>
        <div className="page">
            <div className="page-main">

            <Header/>
            <Sidebar/>

            {(props.pageName === "userslist") ? <UserList /> : ""}

            </div>

            <Footer />
        </div>


        </>

    )
}

export default Layout;