import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"
import Cart from "./components/cart/cart"
import { useState } from "react"
import CartProvider from "./utils/CartProvider"

function App() {
  const [showCart,setShowCart] = useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {showCart && <Cart onClose={hideCartHandler} />}
      <Outlet />
    </CartProvider>

  )
}

export default App
