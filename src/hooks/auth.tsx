import { ReactNode, useContext, useState } from "react";
import React from "react";
import { AuthContext } from "../contexts/AurhContext";

interface AuthProviderProps{

    children: ReactNode;
}
function AuthProvider({children}: AuthProviderProps){
    const [usuario , setUsuario] = useState('fisguinha');

    function autenticarComIAS(){
        console.log('IAS');
    }
    function logoff(){
        console.log('SAIU');
    }
    


    return (
    <AuthContext.Provider value={{
        usuario,
        autenticarComIAS,
        logoff
    }} >
        {children}
    </AuthContext.Provider>
    )

}

function useAuth(){
    const context = useContext(AuthContext);
    return context;

}

export {AuthProvider, useAuth};