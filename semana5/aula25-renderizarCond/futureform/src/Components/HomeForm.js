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

export class HomeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nomeValue: "",
            idadeValue: "",
            emailValue: "",
            ensinoValue: "mincompleto",
                    }
    }
        
    TrocaNome=(event)=>{
        this.setState({nomeValue: event.target.value});
    }

    TrocaEscolaridade=(event)=>{
        this.setState({ensinoValue: event.target.value});
    }

    TrocaIdade=(event)=>{
        this.setState({idadeValue: event.target.value});
    }

    TrocaEmail=(event)=>{
        this.setState({emailValue: event.target.value});
    }

    ContinuarForm = () =>{
        const Respostas1 = {
            nomeValue: this.state.nomeValue,
            idadeValue: this.state.idadeValue,
            emailValue: this.state.emailValue,
            ensinoValue: this.state.ensinoValue,
        }

        this.props.RecebeR1(Respostas1)
    }


    render(){
        return(
            <HomeDiv>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <div>
                    <label>Qual seu nome: </label>
                    <InputStyle onChange={this.TrocaNome} value={this.state.nomeValue} type="text"/>
                </div>
                <div>
                    <label>Qual sua idade: </label>
                    <InputStyle onChange={this.TrocaIdade} value={this.state.idadeValue} type="number"/>
                </div>
                <div>
                    <label>Qual seu email: </label>
                    <InputStyle onChange={this.TrocaEmail} value={this.state.emailValue} type="email"/>
                </div>
                <div>
                    <label>Qual sua escolaridade: </label>
                    <SelectStyle onChange={this.TrocaEscolaridade} value={this.state.ensinoValue}>
                        <option value="mincompleto">Ensino Médio Incompleto</option>
                        <option value="mcompleto">Ensino Médio Completo</option>
                        <option value="sincompleto">Ensino Superior Incompleto</option>
                        <option value="scompleto">Ensino Superior Completo</option>
                    </SelectStyle>
                </div>
                    <button onClick={this.ContinuarForm}>Continuar</button>
            </HomeDiv>
        )
    }

}
    