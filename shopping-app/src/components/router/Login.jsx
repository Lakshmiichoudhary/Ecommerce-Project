import React, { useRef, useState } from 'react'
import { Validation } from '../../utils/Validation'
import { auth } from '../../utils/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [isLogin,setIsLogin] = useState(true)
    const [errormsg,setErrorMsg] = useState("")
    const email = useRef(null)
    const password = useRef(null)

    const handleLogin = (e) => {
        e.preventDefault()

        const message = Validation(email.current.value,password.current.value)
        setErrorMsg(message)

        if(message) return

        if(!isLogin){
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user
                })
                .catch(() => {
                    const errorCode = "failed"
                    const errorMessage = "email all ready exits"
                    setErrorMsg(errorCode+" /"+errorMessage)
                })
        }else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user
                })
                .catch((error) => {
                    const errorCode = "User not Found"
                    const errorMessage = "incorrrect Password"
                    setErrorMsg(errorCode+ "/" + errorMessage)
                } )
        }
    }

    const toggleLogin = () => {
        setIsLogin(!isLogin)
    }
  return (
    <div className='text-center bg-gradient-to-t from-black h-screen '>
        <div className='p-2 font-bold text-3xl'>
            <h1 className='mt-10'>{isLogin ?"Login" : "SignUp"}</h1>
        </div>
        <form className='font-bold'>
            <div className='m-3'>
                <label>Email</label>
                <input ref={email} className='p-2 m-2 ml-10' type='text' placeholder='Email' />
            </div>
            <div className='m-3'>
                <label>Password</label>
                <input ref={password} className='p-2 mx-2' type='Password' placeholder='password' />
            </div>
            <p className='p-2 text-1xl text-red-700  m-2 font-bold'>{errormsg}</p>
            <button className='p-3 px-7 rounded-lg bg-slate-950 m-2 text-white'
            onClick={handleLogin}>
                {isLogin ? "Login" : "SignUp"}
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleLogin}>
                {isLogin ? "new User ?? lets signUp Now" : "already registered ?? Login" }</p>
        </form>
    </div>
  )
}

export default Login
