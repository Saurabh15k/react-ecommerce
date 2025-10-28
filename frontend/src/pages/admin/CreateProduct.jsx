import React from 'react'
import { useForm } from "react-hook-form"
import {nanoid} from "nanoid"
import {useDispatch} from "react-redux"
import { asynccreateproduct } from '../../store/Actions/ProductActions'
import {Bounce, toast} from "react-toastify"

const CreateProduct = () => {
    const dispatch=useDispatch()
    const {register,handleSubmit,reset,formState:{errors}}=useForm()
    const createproductHandler=(product)=>{
        product.id=nanoid()
        dispatch(asynccreateproduct(product))
        reset()
        toast.success("New product is created sucessfully.",{
            position:"bottom-right",
            autoClose:1000,
            hideProgressBar:true,
            pauseOnHover:true,
            transition:Bounce,
            theme:"dark",
            draggable:false,
            closeOnClick:true
        })
    }
    return (
        <div className="create-product">
            <h2>Create Product</h2><hr />
            <form onSubmit={handleSubmit(createproductHandler)} className="product-form">
                <div className="form-group">
                <label htmlFor="image">Image :</label>
                <input type="url" {...register("image")} name="image"/>
                </div>
                <div className="form-group">
                <label htmlFor="title">Title :</label>
                <input type="text" {...register("title")} placeholder="title" name="title"/>
                </div>
                <div className="form-group">
                <label htmlFor="price">Price :</label>
                <input type="price" {...register("price")} placeholder="0.00" name="price"/>
                </div>
                <div className="form-group">
                <label htmlFor="description">Description :</label>
                <textarea {...register("description")} placeholder="Enter description here..." name="description">
                </textarea>
                </div>
                <label htmlFor="category">Category :</label>
                <input type="text" {...register("category")} name="category"/>
                <button type="submit">Create Product</button>
            </form>
        </div>
    )
}

export default CreateProduct
