import { Route } from "react-router-dom";
import AdminLayout from "../admin/AdminLayout";
import DashBoard from "../admin/pages/Dashboard";
import About from "../admin/pages/About";

const AdminRoutes=()=>(
    <>
    <Route path="/admin" element={<AdminLayout/>}>
        <Route index element={<DashBoard/>} />
        <Route path="about" element={<About/>} />
    </Route>
    </>
)

export default AdminRoutes;