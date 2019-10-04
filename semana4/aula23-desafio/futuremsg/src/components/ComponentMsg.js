import React from 'react';
import styled from 'styled-components'

const ContainerMsg = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background: white;
    flex-wrap:wrap;
    padding: 5px;
    color: #6FA8E8;
    
    line-height: 1px;
    margin:20px 30px;
    border-radius: 0 20px 20px 20px;
    border: #4A6FB0 2px solid;
`

export function ComponentMsg(props) {

    return(
        <ContainerMsg onDoubleClick={props.funcao}>
            <h3>{props.nomeUsuarioDaMsg}</h3>
            <p>{props.mensagemUsuarioDaMsg}</p>
        </ContainerMsg>
    )
}


