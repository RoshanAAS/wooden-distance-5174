import React from 'react'
import { createContext,useState } from 'react'
let getTokenFromLS=localStorage.getItem('token')||null

 export const AuthContex=createContext()
 export const AuthContexProvider = ({children}) => {
     const [isAuth,setIsAuth]=useState(false)
     const [token,setToken]=useState(getTokenFromLS)
     
    const Login=(value)=>{
        setIsAuth(true)
        
        localStorage.setItem('token',value)
        setToken(value)
    }
    const Logout=(value)=>{
        localStorage.setItem('token',value)
        setToken(value)
        setIsAuth(false) 
    }
  return (
    <AuthContex.Provider value={{token,isAuth,setIsAuth,setToken,Login,Logout,getTokenFromLS}}>
        {children}
    </AuthContex.Provider>
  )
}
