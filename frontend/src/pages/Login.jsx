import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom"
import { asyncloginuser } from "../store/Actions/UserActions";

const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {register,handleSubmit,formState:{errors}}=useForm();
  const submitHandler=(user)=>{
    dispatch(asyncloginuser(user))
    navigate('/');
  }
  return (
    <div className="register-container">
      <div className='register'>
      <h2>Welcome Back!</h2>
      <p>Log in below to continue where you left off.</p>
      <form onSubmit={handleSubmit(submitHandler)} className='register-form'>
        <div className="input-field">
          <label htmlFor="email" id='email'>Email :</label>
          <input {...register('email',{required:"Email is required"})} type="email" placeholder='Enter your email' name='email'/>
        </div>
        <small>{errors?.email?.message}</small>
        <div className="input-field">
          <label htmlFor="password" id='password'>Password :</label>
          <input {...register('password',{required:"Incorrect password!"})} type="password" placeholder='Enter your password' name='password'/>
        </div>
        <small>{errors?.password?.message}</small>
        <button type='submit'>Continue</button>
      </form>
      <p style={{display:'flex',justifyContent:"center",alignItems:"center",gap:"1em"}}>Don't have an account?
        <span>
          <NavLink style={{color:"blue",textDecoration:"none"}} to="/register">Sign up</NavLink>
        </span>
      </p>
    </div>
    </div>
  )
}

export default Login
