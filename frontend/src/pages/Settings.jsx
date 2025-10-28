import { useDispatch, useSelector } from "react-redux"
import { asyncdeleteuser, asynclogoutuser } from "../store/Actions/UserActions"
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";

const Settings = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const users=useSelector(state=>state.user.user)
    const deleteuserHandler=()=>{
        dispatch(asyncdeleteuser(users.id))
        navigate("/login")
    }
    const logoutHandler=()=>{
        dispatch(asynclogoutuser())
        navigate('/')
    }
    return (
        <div className='settings'>
            <h1>{users?.username}</h1>
            <p>{users?.email}</p><hr />
            <UserProfile/>
            <button onClick={logoutHandler}>Log out</button>
            <button onClick={deleteuserHandler}>Delete Account</button>
        </div>
    )
}

export default Settings
