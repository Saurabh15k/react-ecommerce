import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Settings from '../pages/Settings';
import Login from '../pages/Login';
import Register from '../pages/Register';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Product/>} />
            <Route path='/settings' element={<Settings/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
    )
}

export default MainRoutes
