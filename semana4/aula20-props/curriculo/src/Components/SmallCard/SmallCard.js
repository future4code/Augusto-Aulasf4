import React from 'react';
import './SmallCard.css';
import PropTypes from 'prop-types'

export function SmallCard(props){
    return(
        <article>
            <img src={props.imagem} alt="imagem logo"/>
            <h3>{props.titulo}</h3>
            <p>{props.paragrafo}</p>
        </article>
    )
}

SmallCard.propTypes = {
    imagem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    paragrafo: PropTypes.string.isRequired
}