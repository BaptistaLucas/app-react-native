import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import FavoriteCard from "../../components/FavoriteCard";
import { FavoritosDTO } from "../dtos/FavoritosDTO";
import { PokemonDTO } from "../dtos/PokemonDTO";
import {
    Container,
    Header,
    Titulo,
}from  './styles'

const FAVORITOS_KEY ="@pokedex:favoritos";
function Favoritos(){
    const [favoritos, setFavoritos] = useState<FavoritosDTO[]>([]);
   const isFocused = useIsFocused();


async function getFavoritos() {
    const favoritosStorage = await AsyncStorage.getItem(FAVORITOS_KEY);
    if(favoritosStorage){
        const favoritosParse = JSON.parse(favoritosStorage) as FavoritosDTO[];
        setFavoritos(favoritosParse)
    }
}

async function removeStorage(id: number){
    const favoritos = await AsyncStorage.getItem(FAVORITOS_KEY);        
    if(favoritos){
        const favoritosParse = JSON.parse(favoritos) as FavoritosDTO[];
        const filtrados = favoritosParse.filter(f => f.pokemon.id !== id);
        await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(filtrados));
        getFavoritos();
    }
}

    useEffect(() => {
        getFavoritos();
    }, [isFocused])
    return(
        <Container>
            <Header>
                <Titulo>
                    Favoritos
                </Titulo>
            </Header>
            {/* <FavoriteCard pokemon={pokemon}/> */}
            <FlatList
                data={favoritos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <FavoriteCard pokemon={item.pokemon} funcaoRemover = {()=>removeStorage(item.pokemon.id)}/>
                )}
                style={{
                    flex:1,
                    paddingTop:33,
                    paddingRight: 0,
                    paddingBottom:0,
                   
                }}
                contentContainerStyle ={{
                    alignItems: "center",
                    
                }}
            />
        </Container>
        
    )
}

export default Favoritos;