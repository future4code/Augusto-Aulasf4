import React from 'react';
import './App.css';
import {ComponentInput} from './components/ComponentInput'
import {ComponentMsg} from './components/ComponentMsg'
import {ComponentMsgEu} from './components/ComponentMsgEu'
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
    const novaLista = [...this.state.ListaMsg]
    novaLista.splice(Index, 1)
    const MsgApagadas = {ListaMsg: novaLista}

    this.setState(MsgApagadas)
}

  render(){
    const ApareceMsgs = this.state.ListaMsg.map((postMsg,Index) => {
      if(postMsg.nome!=='eu' && postMsg.nome!=='Eu'){
        return <ComponentMsg funcaoApaga={() => this.ApagaEstaMsg(Index)} key={Index} nomeUsuarioDaMsg={postMsg.nome} mensagemUsuarioDaMsg={postMsg.mensagem} />
      }else{
        return <ComponentMsgEu onDoubleClick={() => this.ApagaEstaMsg(Index)} key={Index} mensagemUsuarioDaMsg={postMsg.mensagem} />

      }
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
