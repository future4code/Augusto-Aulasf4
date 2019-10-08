import React from 'react';
import styled from 'styled-components'
import {HomeForm} from './Components/HomeForm'
import { Fim } from './Components/Fim';
import {  Medio } from './Components/Medio';
import { Superior } from './Components/Superior';

const AppDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: darkslategray;
  color: white;
`

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          nomeValue: "",
          idadeValue: "",
          emailValue: "",
          ensinoValue: "",
          cursoValue:"",
          unValue:"",
          etapa: 1,
        }
    }

    Renderiza = () =>{
      if(this.state.etapa===1){
        return (<HomeForm RecebeR1={this.RecebeR1}/>) 
      }else if(this.state.etapa===2){
        
        return <Superior RecebeR={this.RecebeR}/>
        
      }else if(this.state.etapa===3){
        return <Medio RecebeR={this.RecebeR}/> 
      }else{
        return <Fim/> 
      }
    }

    RecebeR = (Respostas)=>{
      this.setState({
        cursoValue: Respostas.cursoValue,
        unValue: Respostas.unValue,
        etapa:4
      })
    }

    RecebeR1=(Respostas1)=>{
      this.setState({
        nomeValue: Respostas1.nomeValue,
          idadeValue:Respostas1.idadeValue ,
          emailValue:Respostas1.emailValue ,
          ensinoValue:Respostas1.ensinoValue ,
      })

      if(Respostas1.ensinoValue==='mincompleto' || Respostas1.ensinoValue==='mcompleto') {
        this.setState({etapa: 3})
      } else{
        console.log('ensino superior')
        this.setState({etapa: 2})
      }
    }
    // <Completo/>
    // <Incompleto/>
    // <Fim/>

    
    render(){
console.log(this.state)
        return(
          <AppDiv>
            {this.Renderiza()}
          </AppDiv>
        )
    }

}

export default App;
