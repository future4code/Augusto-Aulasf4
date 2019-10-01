import React from 'react';
import './BigCard.css';
import PropTypes from 'prop-types';

export function BigCard(props){
    return(
        <main>
            <img src={props.imagem} alt="imagem logo"/>
            <div>
                <h3>{props.titulo}</h3>
                <p>{props.paragrafo}</p>
            </div>
        </main>
    )
}

BigCard.propTypes = {
    imagem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    paragrafo: PropTypes.string.isRequired
}