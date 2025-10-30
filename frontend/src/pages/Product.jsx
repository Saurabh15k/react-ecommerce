import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { asyncupdateuser } from "../store/Actions/UserActions"
import InfiniteScroll from "react-infinite-scroll-component"
import { Suspense, useEffect, useState } from "react"
import axios from "../api/AxiosConfig"
import {Bounce, toast} from "react-toastify"

const Product = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.user)
    const [products, setproducts] = useState([])
    const [hasMore, sethasMore] = useState(true)
    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(`/products?_limit=6&_start=${products.length}`)
            if (data.length === 0) {
                sethasMore(false)
            } else {
                sethasMore(true)
                setproducts([...products, ...data])
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    const addToCartHandler = (product) => {
        const copyuser = { ...user, cart: [...user.cart] }
        const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id)
        if (x == -1) {
            copyuser.cart.push({ product, quantity: 1 })
            toast.success("Added to cart.",{
            position:"bottom-right",
            autoClose:1000,
            hideProgressBar:true,
            pauseOnHover:true,
            transition:Bounce,
            theme:"dark",
            draggable:false,
            closeOnClick:true
        })
        } else {
            copyuser.cart[x] = { product, quantity: copyuser.cart[x].quantity + 1 }
        }
        dispatch(asyncupdateuser(copyuser.id, copyuser))
        navigate("/cart")
    }

    const renderProducts = products.map((product) => {
        return <div key={product?.id} className="product-details">
            <img src={product?.image} alt="" />
            <h2>{product?.title}</h2>
            <p>{product?.description.slice(0, 60)} <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>More info..</Link></p>
            <h3>${product?.price}</h3>
            <button onClick={() => addToCartHandler(product)} >Add to cart</button>
        </div>
    })

    return <InfiniteScroll
            dataLength={products.length}
            next={fetchProducts}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>}>
            <div className="product-showcase">
                <Suspense fallback={<h1 style={{"color":"yellow"}}>Loading....</h1>}> {renderProducts} </Suspense></div></InfiniteScroll>
}

export default Product
