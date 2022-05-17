import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import Charmander from '../../assets/pokemons/Charmander.svg'
import { PokemonDTO } from "../../screens/dtos/PokemonDTO";
import retornaSvg from "../../utils/retornaSvg";
import { Codigo, Container, ConteudoCodigo, ConteudoNome, ConteudoSvg, Nome } from "./styles";

interface SmallCardsProps { 
    pokemon: PokemonDTO
}
function SmallCard({pokemon,...rest}:SmallCardsProps){

    const navigation = useNavigation();
    
    function navegarParaDetalhes(pokemon: PokemonDTO){
        navigation.navigate('Detalhes' as never,{
            pokemon
        } as never);
    }
    return(
        <Container
            type = {pokemon.types[0].name}
            onPress={() => navegarParaDetalhes(pokemon)}
            { ...rest}
                
        >
            <ConteudoCodigo>
                <Codigo
                type={pokemon.types[0].name}>{pokemon.code}</Codigo>
            </ConteudoCodigo>
            <ConteudoSvg>
                {
                    retornaSvg(pokemon.name)
                }
            </ConteudoSvg>
            <ConteudoNome type = {pokemon.types[0].name}>
                <Nome> {pokemon.name}</Nome>
            </ConteudoNome>
        </Container>
    )
}

export default SmallCard;