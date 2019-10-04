import React from 'react';
import styled from 'styled-components'

const ContainerInput = styled.div`
    display:flex;
    justify-content: space-evenly;
    background: #6FA8E8;
    padding: 20px;
    border-top: 2px solid white;
`

const InputMsg = styled.input`
    background:transparent;
    border:none;
    border-bottom: 1px solid white;
    width:50%;
    color: white;
    ::placeholder{
        color:white;
    }
`

const InputNome = styled.input`
    background:transparent;
    border:none;
    border-bottom: 1px solid white;
    width:30%;
    color: white;
    ::placeholder{
        color:white;
    }
`

const BotaoEnviar = styled.button`
    background:white;
    color: #6FA8E8;
    padding: 10px;
    border-radius:10px;
    border: none;

    :hover{
    box-shadow: 2px 2px 2px gray;
    }
`

export class ComponentInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                    nomeUsuario: "",
                    mensagemUsuario: "",
                    }
    }

    CapturaMsgUsuario = (event) =>{
        this.setState({mensagemUsuario: event.target.value})
    }

    CapturaNomeUsuario = (event) =>{
        this.setState({nomeUsuario: event.target.value})
    }

    EnviaMsg = () =>{
        const MsgPronta = {
            nome: this.state.nomeUsuario,
            mensagem: this.state.mensagemUsuario,
        }
    this.props.RecebeMsg(MsgPronta)

    
    this.setState({
        nomeUsuario:"",
        mensagemUsuario:"",
    })

    }

    EnviaMsgEnter = (event) =>{
        if(event.key === 'Enter'){
            const MsgPronta = {
                nome: this.state.nomeUsuario,
                mensagem: this.state.mensagemUsuario,
            }
        
            this.props.RecebeMsg(MsgPronta)


            this.setState({
                nomeUsuario:"",
                mensagemUsuario:"",
            })
        }
    }

    render(){
        return(
            <ContainerInput>
                <InputNome onChange={this.CapturaNomeUsuario} value={this.state.nomeUsuario} type="text" placeholder="Nome"/>
                <InputMsg onKeyPress={this.EnviaMsgEnter} onChange={this.CapturaMsgUsuario} value={this.state.mensagemUsuario} type="text" placeholder="Mensagem"/>
                <BotaoEnviar onClick={this.EnviaMsg} >Enviar</BotaoEnviar>
            </ContainerInput>
        )
    }
}

