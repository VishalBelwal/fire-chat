import React, { useState } from 'react'
import "./login.css"
import { toast } from 'react-toastify'

const LoginPage = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url:""
    })
    
    const handleAvatar = e => {
        if (e.target.files[0]) {
            
        }
        setAvatar({
            file: e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        toast.warn("Hello")
    }

  return (
    <div className='login'>
        <div className="item">
            <h2 className='font-bold text-xl'>Welcome Back, </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="example@domain.com" name='Email' />
                <input type="password" placeholder="password" name='Password' />
                <button>Log In</button>
            </form>
        </div>
        <div className="seprator"></div>
        <div className="item">
        <h2 className='font-bold text-xl'>Create an Account</h2>
            <form>
                <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png"} />
                    Upload an Image
                </label>
                <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder="username" name='UserName' />
                <input type="text" placeholder="example@domain.com" name='Email' />
                <input type="password" placeholder="password" name='Password' />
                <button>sign In</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage
