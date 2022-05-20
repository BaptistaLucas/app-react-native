import styled from "styled-components/native";
import { PokemonName } from "../../screens/dtos/PokemonDTO";

interface Props{
    type: PokemonName
}
export const Container = styled.View`        
    flex-direction: row;
    background-color: ${({theme}) => theme.white};
    border-radius: 8px;
    align-items: center;
    margin-bottom: 41px;
    justify-content: space-around;
    elevation: 4; // android  
    position: absolute;
    /* shadow-color:  ${({theme}) => theme.dark_gray};
    shadow-offset: 0px 4px;
    shadow-opacity: 0.25;
    shadow-radius: 4px; IOS */ 
    margin-left: 18px;
`;

export const ConteudoSvg = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    margin-left: -37px;    
    
`;

export const ConteudoTexto = styled.View`
    align-items: flex-start;
    justify-content: center;    
    padding-top: 8px;
    padding-bottom: 8px;
    margin-left: 80px;
`;

export const Descricao = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LabelBold = styled.Text<Props>`
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.BOLD};
    color:${({theme, type }) => theme[type]};
`;

export  const Tipos= styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 8px;
`;

export const Opcao = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Botao = styled.TouchableOpacity`
        width: 40px;
        height: 40px;
        align-items: flex-start;
        justify-content: flex-start;
`;