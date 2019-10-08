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

const MsgAlert = styled.p`
    color:red;
    display:${props=>props.display};
`

export class Superior extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cursoValue: "",
            unValue:"",
            displayValue:"none",
            displayUn:"none",
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
            if(this.state.unValue === ""){
                this.setState({displayUn:"flex"})
            }else{
                this.setState({displayUn:"none"})
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
                <h1>ETAPA 2 - INFORMAÇÕES DE ENSINO SUPERIOR</h1>
                <div>
                    <label>5. Qual Curso: </label>
                    <InputStyle onChange={this.TrocouCurso} value={this.state.cursoValue} type="text"/>
                    <MsgAlert display={this.state.displayValue}>Preencha seu curso.</MsgAlert>
                </div>
                <div>
                    <label>6. Qual a unidade de ensino: </label>
                    <InputStyle onChange={this.TrocouN} value={this.state.unValue} type="text"/>
                    <MsgAlert display={this.state.displayUn}>Preencha a unidade.</MsgAlert>
                </div>
                <button onClick={this.Finalizar} >Finalizar</button>
            </HomeDiv>
        )
    }

}