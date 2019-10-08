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

export class Superior extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ListaMsg: [],
        }
    }

    render(){
        return(
            <HomeDiv>
                <h1>ETAPA 2 - INFORMAÇÕES DE ENSINO SUPERIOR</h1>
                <div>
                    <label>5. Qual Curso: </label>
                    <InputStyle value={this.state.nomeValue} type="text"/>
                </div>
                <div>
                    <label>6. Qual a unidade de ensino: </label>
                    <InputStyle value={this.state.nomeValue} type="text"/>
                </div>
                <button>Finalizar</button>
            </HomeDiv>
        )
    }

}