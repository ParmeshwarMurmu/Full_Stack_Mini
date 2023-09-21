import React, { useContext } from 'react'
import { appContent } from '../ContextApi/ContextApi'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {

    const {isAuth} = useContext(appContent)

    if(isAuth){
        return children
    }
    else{
        return <Navigate to={'/login'}/>
    }


}
