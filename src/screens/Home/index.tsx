import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";

import Pokebola from '../../assets/icons/pokeball.svg';
import SortAsc from '../../assets/icons/sortasc.svg';
import SortDesc from '../../assets/icons/sortdesc.svg';
import SmallCard from "../../components/SmallCard";
import api from "../../services/api";
import { PokemonDTO } from "../dtos/PokemonDTO";

import{
    Container,
    Header,
    ConteudoTitulo,
    Titulo,
    BotaoOrdenacao,
    InputTexto
}from "./styles"

function Home(){
    /*inicio criação estados*/
    const [decrescente, setDecrescente] = useState(false); // filtro ascendente e decrescente 
    const [nomeFiltro, setNomeFiltro] = useState(''); // filtro nome
    const [pokemons, SetPokemons]= useState<PokemonDTO[]>([]); // criar a lista de pokemons
    const [pokemonsFilter, SetPokemonFiltros]= useState<PokemonDTO[]>([]); // pokemons filtrados
    /*fim criação estados*/



    function alteraTipoFiltro(){
        setDecrescente(estadoAnterior => !estadoAnterior);
    }

    function alteraNomeFiltro(nome: string){
        setNomeFiltro(nome); /* atualiza o nome do filtro, com o nome escrito pelo usuario */
        const filtrados = pokemons.filter( p=> p.name.toLowerCase().includes(nome.toLowerCase())); {/* buscando na lista de pokemons, se existe o pokemon digitado pelo usuario */}
        SetPokemonFiltros(filtrados); /* passando o resultado da pesquisa */

    }

    async function getPokemons(){
        try {
            const filtro = decrescente ? '?_sort=name&_order=desc' : '?_sort=name&_order=asc'
            const resposta = await api.get<PokemonDTO[]>(`/pokemons${filtro}`);
            if(resposta.data && resposta.data.length >0 ){
                SetPokemons(resposta.data)
                SetPokemonFiltros(resposta.data);
            }
        } catch (error) {
            console.log(error);
        }
       
    }

    useEffect(() => { // useEffect para toda vez q entrar na tela, chamar a função getPokemons
        getPokemons();
    }, [decrescente]);
    return (
        /* Inicio criação dos componentes */
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>  
            <Container>
                <Header>
                    <ConteudoTitulo>  
                        <Pokebola width={24} height={24}/>
                        <></> 
                        <Titulo>Pokemon</Titulo>
                    </ConteudoTitulo>

                    <BotaoOrdenacao
                        onPress={() => alteraTipoFiltro()}  /* chamando a função de alterar o tipo do filtro apos o click*/
                    >
                        {
                            decrescente ? <SortAsc/> : <SortDesc/>
                        }
                    </BotaoOrdenacao>
                </Header>
                <InputTexto 
                    placeholder="Procurar"
                    onChangeText={(texto) => alteraNomeFiltro(texto)} // quando mudar, chama função para filtrar pelo nome dos pokemons
                    keyboardAppearance="dark"
                    value={nomeFiltro}
                />
                <FlatList
                    data={pokemonsFilter} //lista dos pokemons que serão passados
                    keyExtractor={(item) => item.id.toString()} // falar o identificador
                    numColumns={3} // quantidade de colunas
                    contentContainerStyle={{ //estilização
                        alignItems : 'center',
                        justifyContent: 'center',
                       
                    }}
                    style={{ //estilização
                        width: '100%'
                    }}
                    // qual componente será renderizado, quando iterarmos a lista
                    renderItem={({item}) => (
                        <SmallCard pokemon={item} />
                    )}
                />
            </Container>
        </TouchableWithoutFeedback>
        
    )
}

export default Home;