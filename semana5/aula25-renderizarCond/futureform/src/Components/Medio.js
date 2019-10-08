import React from 'react';
import styled from 'styled-components'

const HomeDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: darkslategray;
color: white;
`

const InputStyle = styled.input`
  margin: 5px;
`

const SelectStyle = styled.select`
  margin: 5px;
`

export class Medio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                    ListaMsg: [],
                    }
    }
        
    render(){
        return(
            <HomeDiv>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <div>
                <label>5. Por que você não terminou um curso de graduação: </label>
                <InputStyle value={this.state.nomeValue} type="text"/>
            </div>
            <div>
                <label>5. Você fez algum curso complementar: </label>
                <SelectStyle>
                    <option value="cursoTecnico">Curso Técnico</option>
                    <option value="cursoIngles">Curso de inglês</option>
                    <option value="cursoNenhum">Nunca fiz nenhum</option>
                </SelectStyle>
            </div>
                <button>Finalizar</button>
        </HomeDiv>
        )
    }

}
    