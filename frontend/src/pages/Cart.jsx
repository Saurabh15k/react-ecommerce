import { useDispatch, useSelector } from "react-redux"
import { asyncupdateuser } from "../store/Actions/UserActions"

const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)
    const user = useSelector((state) => state.user.user)
    if (!user || !user.cart || user.cart.length === 0) {
        return <h2 className="emptyCart">Cart is empty!</h2>;
    }
    const increaseQuantity = (index, product) => {
        const copyuser = { ...user, cart: [...user.cart] }
        copyuser.cart[index] = {
            ...copyuser.cart[index],
            quantity: copyuser.cart[index].quantity + 1,
        }
        dispatch(asyncupdateuser(copyuser.id, copyuser))
    }
    const decreaseQuantity = (index, product) => {
        const copyuser = { ...user, cart: [...user.cart] }
        if (user.cart[index].quantity > 1) {
            copyuser.cart[index] = {
                ...copyuser.cart[index],
                quantity: copyuser.cart[index].quantity - 1,
            }
        } else {
            copyuser.cart.splice(index, 1)
        }
        dispatch(asyncupdateuser(copyuser.id, copyuser))
    }
    const cartItems = user?.cart?.map((c, index) => {
        return (
            <li className="cart" key={c.product.id}>
                <img src={c.product.image} alt="" />
                <span>{c.product.title}</span>
                <span>${c.product.price}</span>
                <p>
                    <button onClick={() => decreaseQuantity(index, c)}>-</button>
                    <span >{" "}{c.quantity}{" "}</span>
                    <button onClick={() => increaseQuantity(index, c)}>+</button>
                </p>
            </li>)
    })
    const total = user.cart.reduce(
        (acc, c) => acc + c.product.price * c.quantity,
        0
    );
    return <>
        <ul><h1 style={{ "color": "#182848", "fontSize": "2em", "fontWeight": "500" }}>Your cart is here..</h1>{cartItems}</ul>
        <div className="checkout">
            <h2>Total: ${total.toFixed(2)}</h2>
        <button style={{
            "backgroundColor": "black", "color": "white", "border": "none", "padding": "1em 2em"
            , "fontSize": "1em", "fontWeight": "500", "borderRadius": "1em", "cursor": "pointer"
        }}>Checkout</button>
        </div>
    </>
}

export default Cart
