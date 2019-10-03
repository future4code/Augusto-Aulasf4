import React from 'react';
import './CaixaInsta.css';
import PropTypes from 'prop-types';

export function CaixaInsta(props){
    return(
        <main>
            <header>
                <img src={props.imgPessoa} alt="imagem da pessoa"/>
                <h4>{props.nomePessoa}</h4>
            </header>
            <img className="img-post" src={props.imgFeed} alt="imagem do feed"/>
            <footer>
                <div className="curtida">
                    <img onClick={props.curtir} src={props.imgCurtida} alt="curtidas"/>
                    <p>{props.numeroCurtida}</p>
                </div>
                <div className="comentario">
                    <p>{props.numeroComentario}</p>
                    <img onClick={props.apareceCaixaComment} src={props.imgComentario} alt="comentarios"/>
                </div>
            </footer>
            <article>
                {props.addcomentario}
            </article>
            <section>{props.comentar}</section>
            {props.caixadecomentario}
        </main>
    )
}

CaixaInsta.propTypes = {
    comentar: PropTypes.object,
    apareceCaixaComment: PropTypes.func.isRequired,
    curtir: PropTypes.func.isRequired,
    imgPessoa: PropTypes.string.isRequired,
    caixadecomentario: PropTypes.object,
    addcomentario: PropTypes.object,
    nomePessoa: PropTypes.string.isRequired,
    imgFeed: PropTypes.string.isRequired,
    imgCurtida: PropTypes.string.isRequired,
    numeroCurtida: PropTypes.number.isRequired,
    imgComentario: PropTypes.string.isRequired,
    numeroComentario: PropTypes.number.isRequired
}