import { Outlet } from "react-router-dom"
import AdminNavbar from "./components/AdminNavbar";

const AdminLayout=()=>{
    return(
         <div className="flex flex-col min-h-screen font-Lato">
            <Outlet /> 
         </div>
    )
}


export default AdminLayout;