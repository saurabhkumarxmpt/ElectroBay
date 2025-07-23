import { Routes, Route } from "react-router-dom";
import ClientRoutes from "./ClientRoutes";
import AdminRoutes from "./AdminRoutes";


const AppRoutes=()=>{
    return ( 
        <>
      <Routes>
        {ClientRoutes()}
        {AdminRoutes()}
      </Routes>
      </>
  );
}

export default AppRoutes;