import { Route } from "react-router-dom";
import AdminLayout from "../admin/AdminLayout";
import DashBoard from "../admin/pages/Dashboard";
import AdminLogin from "../admin/pages/AdminLogin";

const AdminRoutes=()=>(
    <>
    <Route path="/admin" element={<AdminLayout/>}>
        <Route index element={<AdminLogin/>} />
    </Route>
    </>
)

export default AdminRoutes;