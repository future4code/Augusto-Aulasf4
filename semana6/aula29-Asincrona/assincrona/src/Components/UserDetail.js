import React from 'react';
import styled from 'styled-components'

const UserDetailContainer = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width:80%;
`

const ListContainer = styled.div`
  background-color: #282c34;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  border: 1px solid white;
  padding:10px;
  justify-content:center;
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

const PList = styled.p`
    margin:10px 5px;
    padding:0;
`

const PListEdit = styled.p`
    margin:10px 5px;
    padding:0;
    display:${props=>props.Display};
`

export class UserDetail extends React.Component{
  constructor(props){
    super(props)
    this.state={
        statusEdit:"block-inline",
        inputStatus: true
    }
  }

  BackWindow=()=>{
      this.props.Save({window:2})
  }

  ChangeName=(event)=>{
    const AtualItems = this.props.UserDetails
    AtualItems.name = event.target.value
    this.props.Save({userAtual: AtualItems})
  }

  ChangeEmail=(event)=>{
    const AtualItems = this.props.UserDetails
    AtualItems.email = event.target.value
    
    this.props.Save({userAtual: AtualItems})
  }

  OnClickEditUser=()=>{
      this.setState({
          inputStatus: false,
          statusEdit:'none'
    })

  }

  EditUser=()=>{
    this.props.EditUser()
  }

  DeleteUser=(UserId)=>{
      
      if(window.confirm('Tem certeza que deseja deletar?')){
    this.props.DeleteUser(UserId)
    this.props.Save({window:2})
      }
}

  render(){

    return(
      <UserDetailContainer>
        <ListContainer>
            <div>
            <PList>Delete: <ImgDel onClick={()=>this.DeleteUser(this.props.UserDetails.id)} src="https://image.flaticon.com/icons/svg/458/458594.svg" alt="Delete icon"/></PList>
            <PListEdit Display={this.state.statusEdit}>Edite: <ImgDel onClick={this.OnClickEditUser} src="https://image.flaticon.com/icons/svg/1160/1160758.svg" alt="Edit icon"/></PListEdit>
            </div>
            <PList>Nome: </PList><InputForm onChange={this.ChangeName} value={this.props.UserDetails.name} disabled={this.state.inputStatus}/>
            <PList>Email: </PList><InputForm onChange={this.ChangeEmail} value={this.props.UserDetails.email} disabled={this.state.inputStatus}/>
        </ListContainer>
        <ButtonForm onClick={this.EditUser}>Salvar</ButtonForm>
        <ButtonForm onClick={this.BackWindow}>Lista de Usuários</ButtonForm>
      </UserDetailContainer>
    )
  }
}

