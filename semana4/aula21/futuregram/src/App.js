import React from 'react';
import {CaixaInsta} from './Components/CaixaInsta'
import './App.css';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numeroCurtida:0,
            numeroComentario:0,
            mostraComment:false,
            imagemSeCurtiu: false, 
            novoComentario:"",
            comentarios: [],         
            numeroCurtida2:0,
            numeroComentario2:0,
            mostraComment2:false,
            imagemSeCurtiu2: false,
            comentarios2: [],  
            numeroCurtida3:0,
            numeroComentario3:0,
            mostraComment3:false,
            imagemSeCurtiu3: false,
            comentarios3: [],  
        }
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


    aumentaComment2 = () =>{
        const mostraQntCommentAtual = this.state.numeroComentario2
        const novoComment={
            numeroComentario2: (mostraQntCommentAtual + 1)
        }

        this.setState(novoComment)
    }

    onClickButtonComment2 = () => {

        const abreCaixa = {
            mostraComment2: true
        }
        
        this.setState(abreCaixa)
    }

    alterarQntCurtir2 = () =>{

        if(this.state.imagemSeCurtiu2 === true) {
            const mostraCurtidaAtual = this.state.numeroCurtida2;
            const novaCurtida={
                numeroCurtida2: (mostraCurtidaAtual - 1)
            }
    
            this.setState(novaCurtida)
    
          }else{
            const mostraCurtidaAtual = this.state.numeroCurtida2;
            const novaCurtida={
                numeroCurtida2: (mostraCurtidaAtual + 1)
            }
    
            this.setState(novaCurtida)
    
          }
    }

    alterarIMGCurtir2 = () => {
        const imagemSeCurtiuAtual = this.state.imagemSeCurtiu2;
    
        const novoEstado = {
          imagemSeCurtiu2: !imagemSeCurtiuAtual
        }
    
        this.setState(novoEstado)
        this.alterarQntCurtir2()
        
      }







      aumentaComment3 = () =>{
        const mostraQntCommentAtual = this.state.numeroComentario3
        const novoComment={
            numeroComentario3: (mostraQntCommentAtual + 1)
        }

        this.setState(novoComment)
    }

    onClickButtonComment3 = () => {

        const abreCaixa = {
            mostraComment3: true
        }
        
        this.setState(abreCaixa)


    }

    alterarQntCurtir3 = () =>{

        if(this.state.imagemSeCurtiu3 === true) {
            const mostraCurtidaAtual = this.state.numeroCurtida3;
            const novaCurtida={
                numeroCurtida3: (mostraCurtidaAtual - 1)
            }
    
            this.setState(novaCurtida)
    
          }else{
            const mostraCurtidaAtual = this.state.numeroCurtida3;
            const novaCurtida={
                numeroCurtida3: (mostraCurtidaAtual + 1)
            }
    
            this.setState(novaCurtida)
    
          }
    }

    alterarIMGCurtir3 = () => {
        const imagemSeCurtiuAtual = this.state.imagemSeCurtiu3;
    
        const novoEstado = {
          imagemSeCurtiu3: !imagemSeCurtiuAtual
        }
    
        this.setState(novoEstado)
        this.alterarQntCurtir3()
        
      }



    render(){
        let titulo;
        if(this.state.mostraComment === true){
            titulo = (<div id="textoComentario"><input onKeyPress={this.onChangeValue} type="text"  placeholder="Escreva seu comentário"/><button onClick={this.aumentaComment}>Comentar</button></div>)
        }

        let titulo2
        if(this.state.mostraComment2 === true){
            titulo2 = (<div id="textoComentario"><input type="text" placeholder="Escreva seu comentário"/><button onClick={this.aumentaComment2}>Comentar</button></div>)
        }

        let titulo3;
        if(this.state.mostraComment3 === true){
            titulo3 = (<div id="textoComentario"><input type="text" placeholder="Escreva seu comentário"/><button onClick={this.aumentaComment3}>Comentar</button></div>)
        }

        let linkDaImagem = require('./icones/favorite.svg');
        let linkDaImagem2 = require('./icones/favorite.svg');
        let linkDaImagem3 = require('./icones/favorite.svg');


        if(this.state.imagemSeCurtiu === true) {
            linkDaImagem = require('./icones/favorite.svg');
          }else{
            linkDaImagem = require('./icones/favorite-white.svg')
          }

          if(this.state.imagemSeCurtiu2 === true) {
            linkDaImagem2 = require('./icones/favorite.svg');
          }else{
            linkDaImagem2= require('./icones/favorite-white.svg')
          }

          if(this.state.imagemSeCurtiu3 === true) {
            linkDaImagem3 = require('./icones/favorite.svg');
          }else{
            linkDaImagem3 = require('./icones/favorite-white.svg')
          }

        const post1 = {
            imgPessoa: 'https://picsum.photos/200/200?e=1',
            nomePessoa: 'Augusto',
            imgFeed: 'https://picsum.photos/200/200?e=2',
            imgCurtida: linkDaImagem,
            numeroCurtida: this.state.numeroCurtida,
            imgComentario: require('./icones/comment_icon.svg'),
            numeroComentario: this.state.numeroComentario
        }

        const post2 = {
            imgPessoa: 'https://picsum.photos/200/200?e=3',
            nomePessoa: 'Darvas',
            imgFeed: 'https://picsum.photos/200/200?e=4',
            imgCurtida: linkDaImagem2,
            numeroCurtida: this.state.numeroCurtida2,
            imgComentario: require('./icones/comment_icon.svg'),
            numeroComentario: this.state.numeroComentario2
        }

        const post3 = {
            imgPessoa: 'https://picsum.photos/200/200?e=5',
            nomePessoa: 'Soter',
            imgFeed: 'https://picsum.photos/200/200?e=6',
            imgCurtida: linkDaImagem3,
            numeroCurtida: this.state.numeroCurtida3,
            imgComentario: require('./icones/comment_icon.svg'),
            numeroComentario: this.state.numeroComentario3
        }

        return (
            <div className="App">
                <CaixaInsta 
                    addcomentario={this.comentario}
                    apareceCaixaComment = {this.onClickButtonComment}
                    curtir = {this.alterarIMGCurtir}
                    imgPessoa = {post1.imgPessoa}
                    nomePessoa = {post1.nomePessoa}
                    imgFeed = {post1.imgFeed}
                    imgCurtida = {post1.imgCurtida}
                    numeroCurtida = {post1.numeroCurtida}
                    imgComentario = {post1.imgComentario}
                    numeroComentario = {post1.numeroComentario}
                    caixadecomentario={titulo}
                />
                <div>{this.state.comentarios.map(comentar => <p>{comentar}</p>)}</div>
                <CaixaInsta 
                    apareceCaixaComment = {this.onClickButtonComment2}
                    curtir = {this.alterarIMGCurtir2}
                    imgPessoa = {post2.imgPessoa}
                    nomePessoa = {post2.nomePessoa}
                    imgFeed = {post2.imgFeed}
                    imgCurtida = {post2.imgCurtida}
                    numeroCurtida = {post2.numeroCurtida}
                    imgComentario = {post2.imgComentario}
                    numeroComentario = {post2.numeroComentario}
                    caixadecomentario={titulo2}
                />
                <CaixaInsta 
                    apareceCaixaComment = {this.onClickButtonComment3}
                    curtir = {this.alterarIMGCurtir3}
                    imgPessoa = {post3.imgPessoa}
                    nomePessoa = {post3.nomePessoa}
                    imgFeed = {post3.imgFeed}
                    imgCurtida = {post3.imgCurtida}
                    numeroCurtida = {post3.numeroCurtida}
                    imgComentario = {post3.imgComentario}
                    numeroComentario = {post3.numeroComentario}
                    caixadecomentario={titulo3}
                />

            </div>
        );
    }
}
export default App;
