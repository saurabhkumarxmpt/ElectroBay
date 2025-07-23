import React from "react";
import { Outlet } from "react-router-dom";
import ClientNavbar from "./components/ClientNavbar";
import Footer from "./components/ClientFooter";

const ClientLayout=()=>{
    return(
        <div className="flex flex-col min-h-screen font-Lato">
            <ClientNavbar/>
            <Outlet />
            <Footer/> 
        </div>
    )
}

export default ClientLayout;