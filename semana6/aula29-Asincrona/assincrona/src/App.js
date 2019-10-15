import React from 'react';
import styled from 'styled-components'
import { UserRegister } from './Components/UserRegister';
import { UserList } from './Components/UserList';
import axios from 'axios';
import { UserDetail } from './Components/UserDetail';

const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:"",
      email:"",
      window: 1,
      usersList: [],
      userAtual:{},
      userSearch:"",
    }
  }

  SaveToState = (ItemToSave) =>{
    this.setState(ItemToSave)
  }

  createUser =() =>{
    const data = {
      name: this.state.name,
      email: this.state.email
    }

    const request = axios.post(
      "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser",
      data,
      {
        headers:{
          "api-token": "4a8d7ba3173a0beb026be31b82b0f2f4"
        }
      }
    )

    request.then(response =>{
      window.alert('Registrado com sucesso!')
    }).catch(error=>{
      window.alert(`Algum erro ocorreu! ${error}`)
    })
  }

  deleteUser =(idUser) =>{

    const request = axios.delete(
      `https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${idUser}`,
      {
        headers:{
          "api-token": "4a8d7ba3173a0beb026be31b82b0f2f4"
        }
      }
    )

    request.then(response =>{
      window.alert('Deletado com sucesso!')
      this.getAllUsers()
    }).catch(error=>{
      window.alert(`Algum erro ocorreu: ${error}`)
    })
  }

  getAllUsers =() =>{

    const request = axios.get(
      "https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers",
      {
        headers:{
          "api-token": "4a8d7ba3173a0beb026be31b82b0f2f4"
        }
      }
    )

    request.then(response =>{
      this.setState({usersList: response.data.result})
    }).catch(error=>{
      window.alert(`Algum erro ocorreu: ${error}`)
    })
  }

  getUser =(idUser) =>{

    const request = axios.get(
      `https://us-central1-future4-users.cloudfunctions.net/api/users/getUser/${idUser}`,
      {
        headers:{
          "api-token": "4a8d7ba3173a0beb026be31b82b0f2f4"
        }
      }
    )

    request.then(response =>{
      console.log(response.data.result)
      this.setState({userAtual: response.data.result})
    }).catch(error=>{
      window.alert(`Algum erro ocorreu: ${error}`)
    })
  }

  searchUsers =(email, name) =>{
    
    const request = axios.get(
      `https://us-central1-future4-users.cloudfunctions.net/api/users/searchUsers?email=${email}&name=${name}`,
      {
        headers:{
          "api-token": "4a8d7ba3173a0beb026be31b82b0f2f4"
        }
      }
    )

    request.then(response =>{
      console.log(response)
      this.setState({userSearch: response.data.result})
    }).catch(error=>{
      window.alert(`Algum erro ocorreu: ${error}`)
    })
  }

  editUser =() =>{
    const data ={
      id: this.state.userAtual.id,
      name: this.state.userAtual.name,
      email: this.state.userAtual.email
    }

    const request = axios.put(
      'https://us-central1-future4-users.cloudfunctions.net/api/users/editUser',
      data,
      {
        headers:{
          "api-token": "4a8d7ba3173a0beb026be31b82b0f2f4"
        }
      }
    )

    request.then(response =>{
      window.alert('Editado com sucesso!')
    }).catch(error=>{
      window.alert(`Algum erro ocorreu: ${error}`)
    })
  }


  render(){
    let RenderWindow

    if (this.state.window === 1){
      RenderWindow = <UserRegister ButtonRegister={this.createUser} NameValue={this.state.name} EmailValue={this.state.email} Save={this.SaveToState}/>
    }else if(this.state.window === 2){
      RenderWindow = <UserList SearchUsers={this.searchUsers} GetUserId={this.getUser} DeleteUser={this.deleteUser} ReceiveAllUsers={this.state.usersList} ListAllUsers={this.getAllUsers} Save={this.SaveToState}/>
    }else if(this.state.window === 3){
      RenderWindow = <UserDetail EditUser={this.editUser} DeleteUser={this.deleteUser} UserDetails={this.state.userAtual} Save={this.SaveToState}/>
    }
    return(
      <AppContainer>
        {RenderWindow}
      </AppContainer>
    )
  }
}

export default App;
