import {Route} from 'react-router-dom';
import ClientLayout from '../client/ClientLayout';
import HomePage from '../client/pages/HomePage';
import About from '../client/pages/About';

const ClientRoutes=()=>(
    <>
    <Route path='/' element={<ClientLayout/>}>
       <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
    </Route>
    </>
)

export default ClientRoutes;