import Cart from './components/Cart'
import Navbar from './components/Navbar'
import ProductList from './components/Productlist'
import './App.css'
import { useState } from 'react'

function App() {
  const [cart,setCart] = useState([]);
  const [Delete, deleteCart] = useState([]);

  const addToCart = (product) => setCart([...cart,product]) 
  const deleteToCart = (product) => {
    const product_item = cart.filter((e) => e.product != product )
    console.log(product_item)
    deleteCart(product_item)
  }
  return (
    <>
     <div className='App'>
      <Navbar/> 
        <div className='container'>
          <ProductList addToCart={addToCart} deleteToCart={deleteToCart}/>
          <Cart cart={cart}/>
        </div>
     </div>
    </>
  )
}

export default App
