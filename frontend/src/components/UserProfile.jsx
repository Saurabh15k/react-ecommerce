import {useDispatch, useSelector} from 'react-redux';
import { useForm } from "react-hook-form"
import {asyncupdateuser } from '../store/Actions/UserActions';
import {toast,Bounce} from "react-toastify"
const UserProfile = () => {
    const users=useSelector(state=>state?.user?.user)
    const dispatch=useDispatch()
    const {register,handleSubmit}=useForm({
        defaultValues:{
            username:users?.username ||"",
            email:users?.email ||"",
            password:users?.password ||""
        }
    })
    const updateProfileHandler=(user)=>{
        dispatch(asyncupdateuser(users?.id,user))
        toast.success("Profile updated successfully!",{
            position:"bottom-right",
            autoClose:1000,
            hideProgressBar:true,
            pauseOnHover:true,
            transition:Bounce,
            theme:"dark",
            draggable:false,
            closeOnClick:true
        });
    }
    return users ?(
        <div>
            <form onSubmit={handleSubmit(updateProfileHandler)}>
                <h3>Update Profile</h3>
                <div className="pair">
                    <label htmlFor="username">Username :</label>
                    <input {...register("username")} type='text' />
                </div>
                <div className="pair">
                    <label htmlFor="email">Email :</label>
                    <input type="email" {...register("email")} />
                </div>
                <div className="pair">
                    <label htmlFor="password">Password :</label>
                    <input {...register("password")} type='password' />
                </div>
                <button>Update</button>
            </form>
        </div>
    ) : <h2>Fetching user profile...</h2>
}

export default UserProfile;