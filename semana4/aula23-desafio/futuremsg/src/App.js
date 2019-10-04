import React from 'react';
import './App.css';
import {ComponentInput} from './components/ComponentInput'
import {ComponentMsg} from './components/ComponentMsg'
import styled from 'styled-components'

const TeladeMsgs = styled.div`
  background: #6FA8E8;
  flex-grow:1;
  align-items: flex-start;
  display:flex;
  flex-direction:column;
  `

const TelaConversa=styled.div`
  display:flex;
  flex-direction:column; 
  min-height:100vh;
`

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                    ListaMsg: [],
                    }
    }

  RecebeMsg = (MsgPronta) => {
    console.log(MsgPronta)
    const TodasMsg = {ListaMsg: [...this.state.ListaMsg, MsgPronta]}
    console.log(TodasMsg)
    this.setState(TodasMsg)
    
  }

  ApagaEstaMsg = (Index) =>{

    console.log(Index)
    const MsgApagadas = {ListaMsg: this.state.ListaMsg.splice(Index,1)}

    this.setState(MsgApagadas)
}

  render(){
    const ApareceMsgs = this.state.ListaMsg.map((postMsg,Index) => {
      return <ComponentMsg onDoubleClick={() => this.ApagaEstaMsg(Index)} key={Index} nomeUsuarioDaMsg={postMsg.nome} mensagemUsuarioDaMsg={postMsg.mensagem} />
    })

    return (
      <TelaConversa>
        <TeladeMsgs>
          {ApareceMsgs}        
        </TeladeMsgs>
        <ComponentInput RecebeMsg={this.RecebeMsg} />
      </TelaConversa>
    );
  }
}

export default App;
