import React from 'react';
import styled from 'styled-components'

const UserListContainer = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width:50%;
`

const ListContainer = styled.div`
  background-color: #282c34;
  width: 50%;
  display: flex;
  align-items: center;
  color: white;
  border-bottom: 1px solid white;
  padding:10px;
  justify-content:center;
`

const ImgDel = styled.img`
    width:20px;
    height:20px;
`

const ButtonForm = styled.button`
    background:transparent;
    border:2px solid white;
    margin:15px;
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

const PList = styled.p`
    margin:0 5px;
    padding:0;
`

export class UserList extends React.Component{
  constructor(props){
    super(props)
    this.state={
        inputValue:"",
    }
  }

  componentDidMount(){
    this.props.ListAllUsers()
  }

  ChangeInputValue=(event)=>{
    this.setState({inputValue: event.target.value})
  }

  BackWindow=()=>{
      this.props.Save({window:1})
  }

  DetailThisUser=(UserId)=>{
    this.props.GetUserId(UserId)
    this.props.Save({window:3})
  }

  SearchUser=()=>{
      const inputValue= this.state.inputValue
    this.props.SearchUsers(inputValue)
  }

  DeleteUser=(UserId)=>{
      
      if(window.confirm('Tem certeza que deseja deletar?')){
    this.props.DeleteUser(UserId)
      }
}

  render(){
    const ListUsers = this.props.ReceiveAllUsers.map((User)=>{
        return <ListContainer key={User.id}><PList onClick={()=>this.DetailThisUser(User.id)} >{User.name}</PList><ImgDel onClick={()=>this.DeleteUser(User.id)} src="https://image.flaticon.com/icons/svg/458/458594.svg" alt="icon delete"/></ListContainer>
    })

    return(
      <UserListContainer>
          <InputForm onChange={this.ChangeInputValue} value={this.state.inputValue} placeholder="Buscar pelo usuário..." type="text"/>
          <PList>Nome: {this.props.userSearched.name}</PList>
          <PList>Id: {this.props.userSearched.id}</PList>
          <ButtonForm onClick={this.SearchUser}>Filtrar</ButtonForm>
        <ButtonForm onClick={this.BackWindow}>Registrar Usuário</ButtonForm>
        {ListUsers}
      </UserListContainer>
    )
  }
}

