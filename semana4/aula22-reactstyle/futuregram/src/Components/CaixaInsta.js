import React from 'react';
import PropTypes from 'prop-types';
import './CaixaInsta.css'
// import styled from 'styled-components';


export class CaixaInsta extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numeroCurtida:0,
            numeroComentario:0,
            mostraComment:false,
            imagemSeCurtiu: false, 
            novoComentario: "",
            comentarios: [],
            fotoUrl: "",
            nomeUsuario: "",
            urlImagem:"",       
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
        console.log(this.state.mostraComment)
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

        let linkDaImagem = require('../icones/favorite.svg');

        if(this.state.imagemSeCurtiu === true) {
            linkDaImagem = require('../icones/favorite.svg');
          }else{
            linkDaImagem = require('../icones/favorite-white.svg')
          }

        const post1 = {
            imgPessoa: this.props.imgPessoa, //"https://picsum.photos/200/200?e=1",
            nomePessoa: this.props.nomePessoa,  //"Augusto",
            imgFeed: this.props.imgFeed, //"https://picsum.photos/200/200?e=2",
            imgCurtida: linkDaImagem,
            numeroCurtida: this.state.numeroCurtida,
            imgComentario: require('../icones/comment_icon.svg'),
            numeroComentario: this.state.numeroComentario
        }

        return (
        <main onDoubleClick={this.alterarIMGCurtir}>
            <header>
                <img src={post1.imgPessoa} alt="imagem da pessoa"/>
                <h4>{post1.nomePessoa}</h4>
            </header>
            <img className="img-post" src={post1.imgFeed} alt="imagem do feed"/>
            <footer>
                <div className="curtida">
                    <img onClick={this.alterarIMGCurtir} src={post1.imgCurtida} alt="curtidas"/>
                    <p>{post1.numeroCurtida}</p>
                </div>
                <div className="comentario">
                    <p>{post1.numeroComentario}</p>
                    <img onClick={this.onClickButtonComment} src={post1.imgComentario} alt="comentarios"/>
                </div>
            </footer>
            <section>{this.state.comentarios.map(comentar => <p>{comentar}</p>)}</section>
            <article>
                {titulo}
            </article>
            {post1.caixadecomentario}
        </main>
    )
}
}

CaixaInsta.propTypes = {
    imgPessoa: PropTypes.string.isRequired,
    nomePessoa: PropTypes.string.isRequired,
    imgFeed: PropTypes.string.isRequired,
}