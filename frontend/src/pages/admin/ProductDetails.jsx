import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import {useForm} from "react-hook-form"
import { asyncdeleteproduct, asyncupdateproduct } from "../../store/Actions/ProductActions"

const ProductDetails = () => {
    const {id}=useParams()
    const user=useSelector(state=> state?.user?.user)
    const products=useSelector((state)=> state?.product?.products)
    const product=products?.find((product)=>product?.id===id)
    const {register,handleSubmit}=useForm({defaultValues:{
        title:product?.title,
        price:product?.price ||"",
        description:product?.description ||"",
        image:product?.image || "",
        category:product?.category ||""
    }})
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const updateProductHandler=(product)=>{
        dispatch(asyncupdateproduct(product,id))
    }
    const deleteHandler=()=>{
        dispatch(asyncdeleteproduct(id))
        navigate("/products")
    }
    return product ? (
        <>
            <div className="update-product">
                {<img src={product?.image ||null} alt="" style={{"width":"18em"}}/>}
                <div className="updateProduct-info">
                <h5>{product?.category}</h5>
                <h2>{product?.title}</h2>
                <h3>${product?.price}</h3>
                <p>{product?.description}</p>
                <button type="button">Add to cart</button>
                </div>
            </div><hr /><hr />
            {user && user?.isAdmin && <form onSubmit={handleSubmit(updateProductHandler)} className="product-form">
                <h2>Update Product Details</h2>
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
                <button type="submit">Update Product</button>
                <button type="button" onClick={deleteHandler}>Delete Product</button>
            </form>}
        </> 
    ) : <p>Loading product details...</p>
}

export default ProductDetails
