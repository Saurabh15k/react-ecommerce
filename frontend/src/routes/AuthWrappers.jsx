import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const AuthWrappers = (props) => {
    const user=useSelector(state=>state?.user?.user)
    return user ? props.children :<Navigate to="/login" />
}

export default AuthWrappers
