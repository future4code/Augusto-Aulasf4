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
        }
    }

    RecebeR1=(Respostas1)=>{
      if(Respostas1.ensinoValue===''){
        return <HomeForm RecebeR1={this.RecebeR1}/> 
      }else if(Respostas1.ensinoValue==='mincompleto' || Respostas1.ensinoValue==='mcompleto') {
        console.log('ensino medio')
        return <Medio/>
      } else{
        return <Superior/>
      }
    }
    // <Completo/>
    // <Incompleto/>
    // <Fim/>

    
    render(){

        return(
          <AppDiv>
            {this.RecebeR1}
          </AppDiv>
        )
    }

}

export default App;
