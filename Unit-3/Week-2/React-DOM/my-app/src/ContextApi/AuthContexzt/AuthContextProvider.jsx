import React, { createContext, useState } from 'react';

export const AuthContext=createContext()

const AuthContextProvider = ({children}) => {
    const [token,setToken]=useState(null)
    const [isAuth,setIsAuth]=useState(false)
    const Login=(token)=>{
        setIsAuth(true)
        setToken(token)
    }

    const Logout=()=>{
        setIsAuth(false)
        setToken(false)
    }
    return (
       <AuthContext.Provider value={[isAuth,Login,Logout,token]}>{children}</AuthContext.Provider>
    );
}

export default AuthContextProvider;
