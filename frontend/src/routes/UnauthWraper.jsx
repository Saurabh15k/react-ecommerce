import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const UnauthWraper = (props) => {
    const users=useSelector((state)=>state?.user?.user)
    return !users ? props.children :<Navigate to="/" />;
}

export default UnauthWraper
