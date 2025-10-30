import {Routes,Route} from 'react-router-dom';
import { lazy } from 'react';
import UnauthWraper from './UnauthWraper';
const PageNotFound=lazy(()=>import( '../pages/PageNotFound'))
const Home=lazy(()=>import("../pages/Home"))
const Product=lazy(()=>import("../pages/Product"))
const Settings=lazy(()=>import("../pages/Settings"))
const Register=lazy(()=>import("../pages/Register"))
const CreateProduct=lazy(()=>import("../pages/admin/CreateProduct"))
const ProductDetails=lazy(()=>import("../pages/admin/ProductDetails"))
const Login=lazy(()=>import("../pages/Login"))
const AuthWrappers=lazy(()=>import("./AuthWrappers"))
const Cart=lazy(()=>import("../pages/Cart"))

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Product/>} />
            <Route path='/settings' element={<Settings/>} />
            <Route path='/login' element={<UnauthWraper><Login/></UnauthWraper>} />
            <Route path='/register' element={<UnauthWraper><Register/></UnauthWraper>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/admin/create-product' element={<AuthWrappers><CreateProduct/></AuthWrappers>} />
            <Route path='/product/:id' element={<ProductDetails/>} />
            <Route path='*' element={<PageNotFound/>} />
        </Routes>
    )
}

export default MainRoutes
