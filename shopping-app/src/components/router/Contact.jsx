import React, { useState } from 'react'

const Contact = () => {
    const [userData,setUserData] = useState({
        name:"",
        email:"",
        phoneNo:""
    })

    const postUserdata = (e) => {
        const {name,value} = e.target;
        setUserData({...userData, [name]:value})
    }

    const submitData = async (e) => {
        e.preventDefault();
        const {name,email,phoneNo} = userData;

        if (!name || !email || !phoneNo) {
            alert("Please fill in all fields.");
            return;
        }

        const res = await 
            fetch("https://ecommerce-app-3e89a-default-rtdb.firebaseio.com/UserDataBase.json",
            {method:"POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({
                name,email,phoneNo
            })
        });
        if (res) {
            setUserData({
                name:"",
                email:"",
                phoneNo:""
            })
            alert("Data sucessfully Stored")
        }else {
            alert("Please try again!!..somthing went wrong")
        }

    }

  return (
    <div className='p-2 bg-gradient-to-r from-black h-screen'>
        <h1 className='text-center m-6 font-bold text-2xl text-white'>Contact Us</h1>
        <div className='flex justify-center items-center'>
            <form className='text-center font-bold m-2 p-2'>
            <div className='flex flex-col m-2'>
                <label htmlFor='name'>Name</label>
                <input id='name' 
                    name='name'
                    className='p-2 m-2 rounded-md' 
                    type='text' 
                    placeholder='Name' 
                    value={userData.name}
                    onChange={postUserdata}
                />    
            </div>
            <div className='flex flex-col m-2'>
                <label htmlFor='email'>Email</label>
                <input id='email'
                    name='email' 
                    className='p-2 m-2 rounded-md' 
                    type='text' 
                    placeholder='Email' 
                    value={userData.email}
                    onChange={postUserdata}
                />    
            </div>
            <div className='flex flex-col m-2'>
                <label htmlFor='phone'>Phone Number</label>
                <input id='phone'
                    name='phoneNo' 
                    className='p-2 m-2 rounded-md' 
                    type='tel' 
                    placeholder='Phone Number' 
                    value={userData.phoneNo}
                    onChange={postUserdata}
                />    
            </div>
            <button className='p-4 py-2 m-2 bg-slate-950 text-white rounded-md'
                type='submit' onClick={submitData}>
                Submit
            </button>
            </form>
        </div>
    </div>
  )
}

export default Contact