import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
const Nav = () => {
    const user=useSelector(state=>state.user.user)
    return (
        <nav className="nav">
            <NavLink to="/" style={{textDecoration:"none",color:"black",fontWeight:"500"}}>HOME</NavLink>
            <NavLink to="/products" style={{textDecoration:"none",color:"black",fontWeight:"500"}}>PRODUCTS</NavLink>
            <NavLink to="/settings" style={{textDecoration:"none",color:"black",fontWeight:"500"}}>SETTINGS</NavLink>
            {user? <>
            </>:<>
            <NavLink to="/register" style={{textDecoration:"none",color:"black",fontWeight:"500"}}>Sign up</NavLink>
            </>}
        </nav>
    )
}

export default Nav
