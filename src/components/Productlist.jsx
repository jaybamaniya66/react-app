import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = ({ addToCart,deleteToCart}) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('/api/list')
            .then(res =>{
            console.log(res.data)
             setProducts(res.data)
    })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                    <br/>
                    <br/>
                    <button onClick={()=> deleteToCart(product)}>Remove the Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
