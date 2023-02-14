import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";


const Cart = (image, price) => {
    const [cartItemImage, setCartItemImage] = useState([]);
    const [cartItemPrice, setCartItemPrice] = useState([]);

    console.log(cartItemImage, cartItemPrice)
    console.log(image, price)

    //works but causes infinite loop
    setCartItemImage(cartItemImage.concat(1));
    setCartItemPrice(cartItemPrice.concat(1));

    useEffect(
        () => {
            return () => {

            };
        },
        [cartItemImage, cartItemPrice],
    );

    return (
        <div className="cart">

            <button id="checkout-button">Checkout</button>
        </div>
    );


}
export default Cart;