import React from 'react';
import './ImageButton.css';
import PropTypes from 'prop-types'

export function ImageButton(props){
    return(
        <button>
            <img src={props.imagem} alt="imagem logo"/>
            <p>{props.paragrafo}</p>
        </button>
    )
}

ImageButton.propTypes = {
    imagem: PropTypes.string.isRequired,
    paragrafo: PropTypes.string.isRequired
}