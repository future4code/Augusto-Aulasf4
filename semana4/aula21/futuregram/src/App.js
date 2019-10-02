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
        }
    }

    onClickButtonComment = () => {
        const mostraCommentAtual = this.state.mostraComment;

        const abreCaixa = {
            mostraComment: !mostraCommentAtual
        }
      
        this.setState(abreCaixa)
    }

    render(){
        let titulo;
        if(this.state.mostraComment === true){
            titulo = (<div><input type="text" placeholder="Escreva seu comentário"/><button >Comentar</button></div>)
        }

        const post1 = {
            imgPessoa: 'https://picsum.photos/200/200',
            nomePessoa: 'Augusto Telles',
            imgFeed: 'https://picsum.photos/200/200?e=',
            imgCurtida: require('./icones/favorite-white.svg'),
            numeroCurtida: this.state.numeroCurtida,
            imgComentario: require('./icones/comment_icon.svg'),
            numeroComentario: this.state.numeroComentario
        }
    
        return (
            <div className="App">
                <CaixaInsta 
                    imgPessoa = {post1.imgPessoa}
                    nomePessoa = {post1.nomePessoa}
                    imgFeed = {post1.imgFeed}
                    imgCurtida = {post1.imgCurtida}
                    numeroCurtida = {post1.numeroCurtida}
                    imgComentario = {post1.imgComentario}
                    numeroComentario = {post1.numeroComentario}
                >
                
                    {titulo}
                
                </CaixaInsta>


            </div>
        );
    }
}
export default App;
