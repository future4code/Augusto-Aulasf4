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
    align-self:flex-end;
    line-height: 1px;
    margin:20px 30px;
    border-radius: 20px 0 20px 20px;
    border: #4A6FB0 2px solid;
`



export function ComponentMsgEu(props) {

    return(
        <ContainerMsg>
            <p>{props.mensagemUsuarioDaMsg}</p>
        </ContainerMsg>
    )
}


