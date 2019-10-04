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
            post: [{
                fotoUrlPost:"urlzinha",
                nomeUsuarioPost:"nomezinho",
                urlImagemPost:"imagezinha",
            }],
            fotoUrlForm: "",
            nomeUsuarioForm: "",
            urlImagemForm:"",
        }
    }

    
    InputFotoUsuarioModificado = (event) =>{
        this.setState({fotoUrlForm: event.target.value})
    }

    InputUrlFotoUsuarioModificado = (event) =>{
        this.setState({nomeUsuarioForm: event.target.value})
    }

    InputUrlPostModificado = (event) =>{
        this.setState({urlImagemForm: event.target.value})
    }


    NovoPost = (event) =>{         
        event.preventDefault()

        const fotoUsuario = this.state.fotoUrlForm
        const nomeUsuario = this.state.nomeUsuarioForm
        const imagemPost = this.state.urlImagemForm

        const novoComment={
                fotoUrlPost: fotoUsuario,
                nomeUsuarioPost: nomeUsuario,
                urlImagemPost: imagemPost,
            }

        
        
        this.state.post.push(novoComment)

        const apagaForm = {
            fotoUrlForm: "",
            nomeUsuarioForm: "",
            urlImagemForm: "",
        }

        this.setState(apagaForm)
    }

    Apagaform = () =>{

    }



    render(){


        const listaDePosts = this.state.post.map((item, index) => {
            return <CaixaInsta key={index} imgPessoa= {item.fotoUrlPost} nomePessoa= {item.nomeUsuarioPost} imgFeed= {item.urlImagemPost} />

        })

        return (
            <div className="App">
                <FormContainer>
                    <FormInput type="text" value={this.state.fotoUrlForm} onChange={this.InputFotoUsuarioModificado} placeholder="Foto do Usuário"></FormInput>
                    <FormInput type="text" value={this.state.nomeUsuarioForm} onChange={this.InputUrlFotoUsuarioModificado} placeholder="Nome do Usuário"></FormInput>
                    <FormInput type="text" value={this.state.urlImagemForm} onChange={this.InputUrlPostModificado} placeholder="Url da Imagem"></FormInput>
                    <FormButton onClick={this.NovoPost}>Adicionar</FormButton>
                </FormContainer>
                <h1>{this.state.urlImagem}</h1>
                <h1>{this.state.post.urlImagemPost}</h1>
                {listaDePosts}
            </div>
        );
    }
}
export default App;
