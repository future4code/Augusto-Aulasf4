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
          expense:"Bobeira",
          description: "",
          payments:[],
          window:2,
      }
  }

  ReceiveData = (DataForm) =>{
    this.setState(DataForm)  
  }

  SavePayments = () =>{
    const newPayments = [...this.state.payments, {value: this.state.moneyValue, type: this.state.expense, desc: this.state.description}]
    const newPaymentList = {
      moneyValue: "",
      expense:"bobeira",
      description: "",
      payments:newPayments}
    this.setState(newPaymentList)
  }

  RenderWindow = () =>{
    if(this.state.window===1){
      return <Register ValueState={this.state} ReceiveData={this.ReceiveData} ButtonAdvanced={this.SavePayments}/>
    }else{
      return <Expense ButtonBack={this.ButtonBack} Payments={this.state.payments}/>
    }
  }

  ButtonBack=()=>{
    this.setState({window:1})
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
