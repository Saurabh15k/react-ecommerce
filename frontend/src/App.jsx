import { Fragment, useEffect } from 'react'
import Nav from './components/Nav'
import MainRoutes from './routes/MainRoutes'
import { useDispatch } from 'react-redux'
import { asynccurrentuser } from './store/Actions/UserActions'

const App = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(asynccurrentuser())
  },[])
  return (
    <Fragment>
      <Nav/>
      <MainRoutes/>
    </Fragment>
  )
}

export default App

