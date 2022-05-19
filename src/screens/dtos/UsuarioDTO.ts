export interface UsuarioDTO {
    acess_token: string;
    token: string;
    expirationDate: Date;
    refreshToken: string;
    login: string;
    usuarioId: number;
    usuarioNome: string;
}