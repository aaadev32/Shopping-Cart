import { render } from "@testing-library/react";
import React, { useState } from "react";

const addToCart = (e) => {

    //const [cartNode, setCartNode] = useState()

    //TODO get the associated img src and price to be added to the shopping cart
    console.log(e.target);
    console.log(e.target.parentNode.children);
    let itemToCart = e.target.parentNode.children[0].cloneNode(true);
    let addPrice = e.target.parentNode.children[2].cloneNode(true);


} 
const Cart = () => {

    const [cartItemImage, setCartItemImage] = useState();
    const [cartItemPrice, setCartitemPrice] = useState();

    return (
        <div>test</div>
    );


}
export default Cart;