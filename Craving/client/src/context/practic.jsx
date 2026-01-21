import { Children } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext()

export const AppProvider = (props) =>{
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("Craving")) || []
  )
const [isLogin, setLogin] = useState()

useEffect(()=>{
    setLogin(!!user)
},[user])
const value = {user, setUser, isLogin, setLogin} 

return (

    <AuthContext.Provider value={value}>
        {Children}
    </AuthContext.Provider>
)


} 
export const Auth = () =>{
    return useContext(AuthContext)
}
