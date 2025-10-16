import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { asyncregisteruser } from '../store/Actions/UserActions'

const Register = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const {register,handleSubmit,reset,formState:{errors}}=useForm({})
  const submitHandler=(user)=>{
    user.id=nanoid()
    user.isAdmin=false
    dispatch(asyncregisteruser(user))
    reset()
    navigate('/');
  }
  return (
    <div className="register-container">
      <div className='register'>
      <h2>Register Your Account</h2>
      <p>We're excited to have you here. Sign up in just a few seconds and start your journey with us.</p>
      <form onSubmit={handleSubmit(submitHandler)} className='register-form'>
        <div className="input-field">
          <label htmlFor="username" id='username'>Username :</label>
          <input {...register('username')} type="text" placeholder='Enter your username' name='username'/>
        </div>
        <div className="input-field">
          <label htmlFor="email" id='email'>Email :</label>
          <input {...register('email',{required:"Email is required"})} type="email" placeholder='Enter your email' name='email'/>
        </div>
        <small>{errors?.email?.message}</small>
        <div className="input-field">
          <label htmlFor="password" id='password'>Password :</label>
          <input {...register('password',{required:"Createa strong password!"})} type="password" placeholder='Enter your password' name='password'/>
        </div>
        <small>{errors?.password?.message}</small>
        <button type='submit'>Sign in</button>
      </form>
      <p style={{display:'flex',justifyContent:"center",alignItems:"center",gap:"1em"}}>Already have an account?
        <span>
          <NavLink style={{color:"blue",textDecoration:"none"}} to="/login">Login</NavLink>
        </span>
      </p>
    </div>
    </div>
  )
}

export default Register
