import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './login.css'


function Login() {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // setUser(user);
        {
            user === "admin" && password === "admin" ?
                navigate("../home", { replace: true })
                :
                alert("Contact developer for login details")
        }

    }

    return (
        <div className='login'>
            <form className='' action="">
                <div className='content'>
                    <input className="username" type="text" placeholder='Enter username'
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <input className="password" type="password" placeholder='Enter password' required onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className='sub-btn' onClick={handleSubmit}> Sign in</button>
                </div>
            </form>

        </div>
    )
}

export default Login 