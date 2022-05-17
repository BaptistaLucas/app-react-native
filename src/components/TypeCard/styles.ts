import styled from "styled-components/native";
import { PokemonName } from "../../screens/dtos/PokemonDTO";


interface Props {
    type: PokemonName
}

export const Container = styled.View<Props>`
    padding: 4px 8px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: ${({theme, type}) => theme[type]};
`;


export const Tipo = styled.Text`
    font-family: ${({theme}) => theme.fonts.BOLD};
    color: ${({theme}) => theme.white};
    font-size: 12px;

`;