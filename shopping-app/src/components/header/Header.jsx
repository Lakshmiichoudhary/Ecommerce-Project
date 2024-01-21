import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartContext from '../../utils/CartContext';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../utils/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../../store/Userslice';

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItemCount = cartCtx.items.length; 

  const isAuthenticated = useSelector(state => state.user);

  const handleLogout = () => {
    signOut(auth)
    .then(()=>{
      navigate("/login")
    })
    .catch(()=>{
      navigate("/error")
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(user) {
        const {uid,email} = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
          })
        )
        navigate("/")
      } else {
        dispatch(removeUser());
        navigate("/login")
      }
    })
  },[])
  
  return (
    <div className='flex md:justify-between py-5 bg-slate-900 text-white'>
      <h1 className='md:font-bold md:text-2xl py-2 mx-2 md:mx-10'>Lets Shop</h1>
      <div className='flex my-2 md:mx-4'>
        {isAuthenticated && (
          <>
            <Link to={"/home"} className='px-2 md:px-3'>Home</Link>
            <Link to={"/about"} className='px-2 md:px-3'>About</Link>
            <Link to={"/contact"} className='px-2 md:px-3'>Contact</Link>
            <Link to={"/"} className='px-2 md:px-3'>Store</Link>
            <div className="cursor-pointer px-2 md:px-3" onClick={props.onShowCart}>
              Cart<sup>{cartItemCount}</sup>
            </div>
            <h1 className='px-2 md:px-3 cursor-pointer text-purple-400' onClick={handleLogout}>
              Logout
            </h1>
         </>
          )}
      </div>
    </div>
  );
}


export default Header
