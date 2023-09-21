import React, { createContext, useState } from 'react'


export const appContent = createContext()

export const ContextApi = ({children}) => {

  const [isAuth, setIsAuth] = useState(false)

  const loginHandler = ()=>{
    setIsAuth(true)
  }

  const logoutHandler = ()=>{
    setIsAuth(false)
  }



  return <appContent.Provider value={{isAuth, setIsAuth,  loginHandler, logoutHandler}}>{children}</appContent.Provider>
  
}
