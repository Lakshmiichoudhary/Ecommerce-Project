import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"
import Cart from "./components/cart/cart"
import { useEffect, useState } from "react"
import CartProvider from "./utils/CartProvider"
import { useDispatch } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./utils/Firebase"
import { addUser, removeUser } from "./store/Userslice"

function App() {
  const [showCart,setShowCart] = useState(false)
  const dispatch = useDispatch()

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }

  useEffect(()=> {
    onAuthStateChanged(auth,(user) => {
      if (user){
        const {uid,email} = user
          dispatch(addUser({uid:uid,email:email}))
      }else{
          dispatch(removeUser())
      }
  })
  },[])
  
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {showCart && <Cart onClose={hideCartHandler} />}
      <Outlet />
    </CartProvider>

  )
}

export default App
