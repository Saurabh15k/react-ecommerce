import { useForm } from "react-hook-form"

const UpdateProduct = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const createproductHandler=(product)=>{
        product.id=nanoid()
    }
    /*const renderupdateproduct=products.map((product)=>{
        return <div key={product.key}>
            <div className="update-product">
            <h2>Update Product Details</h2>
            <form onSubmit={handleSubmit(createproductHandler)} className="product-form">
                <label htmlFor="image">Image :</label>
                <input type="url" {...register("image")} name="image"/>
                <label htmlFor="title">Title :</label>
                <input type="text" {...register("title")} placeholder="title" name="title"/>
                <label htmlFor="price">Price :</label>
                <input type="price" {...register("price")} placeholder="0.00" name="price"/>
                <label htmlFor="description">Description :</label>
                <textarea {...register("description")} placeholder="Enter description here..." name="description">
                </textarea>
                <label htmlFor="category">Category :</label>
                <input type="text" {...register("category")} name="category"/>
                <button type="submit">Update Product</button>
            </form>
        </div>
        </div>
    })*/
    return (
        <div></div>
    )
}

export default UpdateProduct
