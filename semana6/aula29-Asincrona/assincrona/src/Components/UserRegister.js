import React from 'react';
import styled from 'styled-components'

const RegisterContainer = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border: white solid 2px;
  border-radius: 20px 0;
  padding: 20px;
`

const ButtonForm = styled.button`
    background:transparent;
    border:2px solid white;
    margin:5px;
    border-radius:5px;
    color: white;
    padding: 5px;
    box-shadow: 1px 1px 2px white;
    :focus{
        outline:none;
        background: yellow;
        color:#282c34;
    }
`

const InputForm = styled.input`
    background:transparent;
    border:none;
    margin:5px;
    border-bottom:2px solid white;
    color:white;

    :focus{
        outline:none;
        border-bottom:2px solid yellow;
    }
`

export class UserRegister extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

  ChangeName =(event)=>{
    this.props.Save({name: event.target.value})
  }

  ChangeEmail =(event)=>{
    this.props.Save({email: event.target.value})
  }

  Register = () =>{
      this.props.ButtonRegister()
  }

  ShowList =() =>{
    this.props.Save({window:2})
  }
  render(){
    return(
      <RegisterContainer>
        <h3>Registrar Novo Usuário</h3>
        <InputForm onChange={this.ChangeName} value={this.props.NameValue} placeholder="Nome" type="text"/>
        <InputForm onChange={this.ChangeEmail} value={this.props.EmailValue} placeholder="Email" type="email"/>
        <ButtonForm onClick={this.Register}>Registrar</ButtonForm>
        <ButtonForm onClick={this.ShowList}>Lista de Usuários</ButtonForm>
      </RegisterContainer>
    )
  }
}
