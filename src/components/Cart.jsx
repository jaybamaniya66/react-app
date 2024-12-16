import React from "react";

const Cart = ({ cart }) => (
    <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? <p>Cart is empty</p> : (
            cart.map((item, index) => (
                <div key={index}>
                    <h4>{item.name}</h4>
                    <p>Price: ${item.price}</p>
                </div>
            ))
        )}
    </div>
);

export default Cart;
