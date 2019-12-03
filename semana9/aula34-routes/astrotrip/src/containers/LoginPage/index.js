import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { routes } from "../Router";
import { HomeContainer, ContentContainer, ImgLogo, TextArea, ButtonSpace, ButtonArea } from '../HomePage/styled'
import { login } from '../../actions/auth'


const ErrorMsg = styled.p`
  width: 100%;
  background:lightcoral;
  color:white;
  text-align:center;
`

const ButtonAreaStyled = styled(ButtonArea)`
  margin-top:10%;
`

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClickLogin = event => {
    event.preventDefault()
    const { email, password } = this.state;
    this.props.doThisLogin(email, password)
  }



  render() {

    let msgError
    if (this.props.setErrorMsg === 'errorToken') {
      msgError = <ErrorMsg>Usuário não autenticado.</ErrorMsg>
    } else if (this.props.setErrorMsg === 'errorLogin') {
      msgError = <ErrorMsg>Usuário ou senha incorretos.</ErrorMsg>
    } else {
      msgError = null
    }
    const { email, password } = this.state;

    return (
      <HomeContainer>
        <ContentContainer>
          <ImgLogo src={require('../../assets/Logo.png')} alt="logo" />
          <TextArea>
            <h2>Dados para login:</h2>
            {msgError}
            <form onSubmit={this.onClickLogin} >
              <TextField
                onChange={this.handleFieldChange}
                name="email"
                type="email"
                label="E-mail"
                value={email}
              />
              <TextField
                onChange={this.handleFieldChange}
                name="password"
                type="password"
                label="Password"
                value={password}
              />
              <ButtonAreaStyled>
                <ButtonSpace>Login</ButtonSpace>
                <ButtonSpace onClick={this.props.goToHomeScreen}>Voltar</ButtonSpace>
              </ButtonAreaStyled>
            </form>
          </TextArea>

        </ContentContainer>
      </HomeContainer>

    );
  }
}

const mapStateToProps = state => ({
  setErrorMsg: state.auth.errorMsg,
})

const mapDispatchToProps = dispatch => ({
  goToHomeScreen: () => dispatch(push(routes.home)),
  goToAdmScreen: () => dispatch(push(routes.admin)),
  doThisLogin: (email, password) => dispatch(login(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)