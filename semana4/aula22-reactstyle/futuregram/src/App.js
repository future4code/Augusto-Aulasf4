import React from 'react';
import {CaixaInsta} from './Components/CaixaInsta';
import './App.css';
import styled from 'styled-components';

const FormContainer = styled.form`
    display:flex;
    flex-direction:column;
    border: 1px solid;
    padding: 1%;
`

const FormInput = styled.input`
margin:5px;
`
const FormButton = styled.button`
margin:5px;
`


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            post:{
                fotoUrlPost:"https://picsum.photos/200/200?e=1",
                nomeUsuarioPost:"Augusto",
                urlImagemPost:"https://picsum.photos/200/200?e=2",
            },
            fotoUrl: "",
            nomeUsuario: "",
            urlImagem:"",       
        }
    }

    NovoPost = () =>{
        const fotoUsuario = this.state.post.fotoUrl
        const nomeUsuario = this.state.post.nomeUsuario
        const imagemPost = this.state.post.urlImagem

        const novoComment={
            post:{...this.state.post,
                fotoUrlPost: fotoUsuario,
                nomeUsuarioPost: nomeUsuario,
                urlImagemPost: imagemPost}
        }

        this.setState(novoComment)

    }

    InputFotoUsuarioModificado = (event) =>{
        this.setState({post:{fotoUrlPost: event.target.value}})
    }

    InputUrlFotoUsuarioModificado = (event) =>{
        this.setState({fotoUrl: event.target.value})
    }

    InputUrlPostModificado = (event) =>{
        this.setState({imagemPost: event.target.value})
    }

    render(){

        return (
            <div className="App">
                <FormContainer>
                    <FormInput type="text" onChange={this.InputFotoUsuarioModificado} placeholder="Foto do Usuário"></FormInput>
                    <FormInput type="text" onChange={this.InputUrlFotoUsuarioModificado} placeholder="Nome do Usuário"></FormInput>
                    <FormInput type="text" onChange={this.InputUrlPostModificado} placeholder="Url da Imagem"></FormInput>
                    <FormButton onClick={this.NovoPost}>Adicionar</FormButton>
                </FormContainer>
                <h1>{this.state.post.fotoUrlPost}</h1>
                <CaixaInsta/>
                <CaixaInsta 
                    imgPessoa= {this.state.post.fotoUrlPost}
                    nomePessoa= {this.state.post.nomeUsuarioPost}
                    imgFeed= {this.state.post.urlImagemPost}
                />
            </div>
        );
    }
}
export default App;
