import React from 'react';
import './Container.css';
import PropTypes from 'prop-types';

export function Container(props){
    return(
      <div>
        <h1>{props.titulo}</h1>
        {props.children}
      </div>
    )
  }

  Container.propTypes = {
    titulo: PropTypes.string.isRequired

}