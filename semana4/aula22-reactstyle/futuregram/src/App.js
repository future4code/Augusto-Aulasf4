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
                numeroCurtida:0,
                numeroComentario:0,
                mostraComment:false,
                imagemSeCurtiu: false, 
                comentarios: [],
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

        this.setState({post:{fotoUrlPost:fotoUsuario, nomeUsuarioPost:nomeUsuario, urlImagemPost:imagemPost}})

    }

    InputFotoUsuarioModificado = (event) =>{
        this.setState({fotoUsuario: event.target.value})
    }

    InputUrlFotoUsuarioModificado = (event) =>{
        this.setState({fotoUrl: event.target.value})
    }

    InputUrlPostModificado = (event) =>{
        this.setState({imagemPost: event.target.value})
    }

    aumentaComment = () =>{
        const mostraQntCommentAtual = this.state.numeroComentario
        const novoComment={
            numeroComentario: (mostraQntCommentAtual + 1)
        }

        this.setState(novoComment)
    }

    onClickButtonComment = () => {

        const abreCaixa = {
            mostraComment: true
        }
        
        this.setState(abreCaixa)

    }

    onChangeValue = (event) => {
        if(event.key==='Enter'){
            
            const valorEscrito = event.target.value;
            const colocaValor = {
                novoComentario: valorEscrito
            }
            this.state.comentarios.push(valorEscrito)
            this.setState(colocaValor)
        }
        
    }

    alterarQntCurtir = () =>{

        if(this.state.imagemSeCurtiu === true) {
            const mostraCurtidaAtual = this.state.numeroCurtida;
            const novaCurtida={
                numeroCurtida: (mostraCurtidaAtual - 1)
            }
    
            this.setState(novaCurtida)
    
          }else{
            const mostraCurtidaAtual = this.state.numeroCurtida;
            const novaCurtida={
                numeroCurtida: (mostraCurtidaAtual + 1)
            }
    
            this.setState(novaCurtida)
    
          }
    }

    alterarIMGCurtir = () => {
        const imagemSeCurtiuAtual = this.state.imagemSeCurtiu;
    
        const novoEstado = {
          imagemSeCurtiu: !imagemSeCurtiuAtual
        }
    
        this.setState(novoEstado)
        this.alterarQntCurtir()
        
      }

    render(){
        let titulo;
        if(this.state.mostraComment === true){
            titulo = (<div id="textoComentario"><input onKeyPress={this.onChangeValue} type="text"  placeholder="Escreva seu comentário"/><button onClick={this.aumentaComment}>Comentar</button></div>)
        }

        let linkDaImagem = require('./icones/favorite.svg');

        if(this.state.imagemSeCurtiu === true) {
            linkDaImagem = require('./icones/favorite.svg');
          }else{
            linkDaImagem = require('./icones/favorite-white.svg')
          }

        const post1 = {
            imgPessoa: this.state.post.fotoUrlPost,
            nomePessoa: this.state.post.nomeUsuarioPost,
            imgFeed: this.state.post.urlImagemPost,
            imgCurtida: linkDaImagem,
            numeroCurtida: this.state.post.numeroCurtida,
            imgComentario: require('./icones/comment_icon.svg'),
            numeroComentario: this.state.post.numeroComentario
        }

        return (
            <div className="App">
                <FormContainer>
                    <FormInput type="text" onChange={this.InputFotoUsuarioModificado} placeholder="Foto do Usuário"></FormInput>
                    <FormInput type="text" onChange={this.InputUrlFotoUsuarioModificado} placeholder="Nome do Usuário"></FormInput>
                    <FormInput type="text" onChange={this.InputUrlPostModificado} placeholder="Url da Imagem"></FormInput>
                    <FormButton onClick={this.NovoPost}>Adicionar</FormButton>
                </FormContainer>
                <h1>{this.state.post.fotoUrlPost}</h1>
                <CaixaInsta 
                    addcomentario={this.comentario}
                    apareceCaixaComment = {this.onClickButtonComment}
                    curtir = {this.alterarIMGCurtir}
                    curtiduplo = {this.alterarIMGCurtir}
                    imgPessoa = {post1.imgPessoa}
                    nomePessoa = {post1.nomePessoa}
                    imgFeed = {post1.imgFeed}
                    imgCurtida = {post1.imgCurtida}
                    numeroCurtida = {post1.numeroCurtida}
                    imgComentario = {post1.imgComentario}
                    numeroComentario = {post1.numeroComentario}
                    caixadecomentario={titulo}
                    comentar={this.state.post.comentarios.map(comentar => <p key = {comentar}>{comentar}</p>)}
                />
            </div>
        );
    }
}
export default App;
