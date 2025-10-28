import { Fragment, useEffect } from 'react'
import Nav from './components/Nav'
import MainRoutes from './routes/MainRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { asynccurrentuser } from './store/Actions/UserActions'
import { asyncloadproducts } from './store/Actions/ProductActions'

const App = () => {
  const dispatch=useDispatch();
  const products=useSelector((state)=>state?.product?.products)
  const user=useSelector((state)=>state?.user?.user)
  useEffect(()=>{
    !user && dispatch(asynccurrentuser())
  },[user])
  useEffect(()=>{
    products.length===0 && dispatch(asyncloadproducts())
  },[products])
  return (
    <Fragment>
      <Nav/>
      <MainRoutes/>
    </Fragment>
  )
}

export default App

