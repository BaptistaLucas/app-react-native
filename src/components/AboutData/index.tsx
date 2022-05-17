import React from "react";
import { Acoes, Container, Dados, Medidas, Nome, Valor } from "./styles";
import Peso from "../../assets/icons/weight.svg"
import Altura from "../../assets/icons/height.svg"
import { PokemonMove } from "../../screens/dtos/PokemonDTO";
interface AboutDataProps{
    weigth: string;
    heigth: string;
    moves: PokemonMove[];

}

function AboutData({weigth, heigth, moves}: AboutDataProps){

    return(
        <Container>
            <Dados>
                <Medidas>
                    <Peso width={19} height={19} style={{marginRight:8}}/>
                    <Valor>{weigth}</Valor>
                </Medidas>
                <Nome>Weight</Nome>
            </Dados>
            <Dados>
                <Medidas>
                    <Altura width={19} height={19} style={{marginRight:8}}/>
                    <Valor>{heigth}</Valor>
                </Medidas>
                <Nome>Height</Nome>
            </Dados>
            <Dados
                naoExibirBorda
            >
                <Acoes>
                    {
                        moves.map(m => (
                            <Valor key={m.id}>{m.name}</Valor>
                        ))
                    }
                    
                </Acoes>
                <Nome>Moves</Nome>
            </Dados>
        </Container>

    )
}

export default AboutData