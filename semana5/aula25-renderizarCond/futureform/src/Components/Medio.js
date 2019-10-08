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

const MsgAlert = styled.p`
    color:red;
    display:${props=>props.display};
`

export class Medio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cursoValue:"",
            unValue: "cursoTecnico",
            displayValue:"none",
                    }
    }

    TrocouCurso = (event) =>{
        this.setState({cursoValue:event.target.value})
    }

    TrocouN = (event) =>{
        this.setState({unValue:event.target.value})
    }

    Finalizar = () =>{
        if (this.state.cursoValue === "" || this.state.unValue === ""){
            alert('Preencha todos os campos para continuar!')
            if(this.state.cursoValue === ""){
                this.setState({displayValue:"flex"})
            }else{
                this.setState({displayValue:"none"})
            }
        }else{
            const Respostas = {
                cursoValue: this.state.cursoValue,
                unValue: this.state.unValue,
            }

            this.props.RecebeR(Respostas)
        }
    }
        
    render(){
        return(
            <HomeDiv>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <div>
                <label>5. Por que você não terminou um curso de graduação: </label>
                <InputStyle onChange={this.TrocouCurso} value={this.state.cursoValue} type="text"/>
                <MsgAlert display={this.state.displayValue}>Preencha o porquê.</MsgAlert>
            </div>
            <div>
                <label>5. Você fez algum curso complementar: </label>
                <SelectStyle onChange={this.TrocouN} value = {this.state.unValue}>
                    <option value="cursoTecnico">Curso Técnico</option>
                    <option value="cursoIngles">Curso de inglês</option>
                    <option value="cursoNenhum">Nunca fiz nenhum</option>
                </SelectStyle>
            </div>
                <button onClick={this.Finalizar}>Finalizar</button>
        </HomeDiv>
        )
    }

}
    