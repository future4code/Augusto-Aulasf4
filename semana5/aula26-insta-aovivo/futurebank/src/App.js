import React from 'react';
import styled from 'styled-components'
import { Expense } from './Components/Expense';
import { Register } from './Components/Register';

const AppContainer = styled.div`
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`

export class App extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          moneyValue: "",
          expense:"bobeira",
          description: "",
          payments:[],
      }
  }

  ReceiveData = (DataForm) =>{
    this.setState(DataForm)  
  }

  SavePayments = () =>{
    const newPayments = [...this.state.payments, this.state.moneyValue, this.state.expense, this.state.description]
    const newPaymentList = {
      moneyValue: "",
      expense:"bobeira",
      description: "",
      payments:newPayments}
    this.setState(newPaymentList)
    
  }

  SendPayments = () =>{

  }

  render(){
    return (
      <AppContainer>
        <Register ValueState={this.state} ReceiveData={this.ReceiveData} ButtonAdvanced={this.SavePayments}/>
        <Expense Payments={this.state.payments}/>
      </AppContainer>
    );
  }
}

export default App;
