import { createContext } from "react"
import { UsuarioDTO } from "../screens/dtos/UsuarioDTO";
interface IAuthContext{
    usuario : UsuarioDTO | null;
    autenticarComIAS(): Promise<void>;
    logoff(): Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);