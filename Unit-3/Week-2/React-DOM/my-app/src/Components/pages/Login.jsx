import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../ContextApi/AuthContexzt/AuthContextProvider';
import { Navigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [isAuth, Login, Logout,token] = useContext(AuthContext)


    const [password, setPassword] = useState("cityslicka")
    const [email, setEmail] = useState("eve.holt@reqres.in")

    const handleClick = () => {
         
        axios.post('https://reqres.in/api/login',{ 
           email,
          password
        })
        .then((res)=> Login(token))
        .catch(error => {
                console.log(error)
             })
    }

    if (isAuth) {
        return <Navigate to={'/product'} />
    }

    return (
        <div>
            <h1>Login Page</h1>
            <br /><br />
            UserName:- <input type="email" placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <br /><br />
            Password:- <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <br /><br />
            <button onClick={handleClick}>Login</button>
        </div>
    );
}

export default Login;
