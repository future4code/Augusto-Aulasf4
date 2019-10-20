import React from 'react';
import styled from 'styled-components'
import { Expense } from './Components/Expense';
import { Register } from './Components/Register';
import { Detail } from './Components/Detail';

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
          expense:"Bobeira",
          description: "",
          payments:[],
          window:1,
          objectTarget: ""
      }
  }

  ReceiveData = (DataForm) =>{
    this.setState(DataForm)  
  }

  SavePayments = () =>{
    const newPayments = [...this.state.payments, {id:Date.now(), value: this.state.moneyValue, type: this.state.expense, desc: this.state.description}]
    const newPaymentList = {
      moneyValue: "",
      expense:"Bobeira",
      description: "",
      payments:newPayments}
    this.setState(newPaymentList)
  }

  RenderWindow = () =>{
    if(this.state.window===1){
      return <Register ValueState={this.state} ReceiveData={this.ReceiveData} ButtonAdvanced={this.SavePayments}/>
    }else if(this.state.window===2){
      return <Expense ReceiveData={this.ReceiveData} Payments={this.state.payments}/>
    }else{
      return <Detail ReceiveData={this.ReceiveData} Payments={this.state.payments} PaymentObject={this.state.objectTarget}/>
    }
  }

  render(){
    return (
      <AppContainer>
        {this.RenderWindow()}
      </AppContainer>
    );
  }
}

export default App;
