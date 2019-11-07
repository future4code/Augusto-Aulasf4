import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { routes } from "../Router";
import { HomeContainer, ContentContainer, ImgLogo, TextArea, ButtonSpace, ButtonArea } from '../HomePage/styled'
import { signUp , setErrorAdminMsg } from '../../actions/auth'


const SuccessMsg = styled.p`
  width: 100%;
  background:lightgreen;
  color:white;
  text-align:center;
`

const ErrorMsg = styled.p`
  width: 100%;
  background:lightcoral;
  color:white;
  text-align:center;
`;

const ButtonAreaStyled = styled(ButtonArea)`
  margin-top:10%;
`;

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount(){
    const token = window.localStorage.getItem("token");

    if (!token) {
      this.props.setErrorMsg('errorToken')
      this.props.goToLoginScreen();
    }
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClickRegister = event => {
    event.preventDefault()
    const { email, password } = this.state;
    this.props.signUp(email, password)
    this.setState({email: "",
    password: ""})
  }



  render() {

    let msgError
    if (this.props.setErrorMsg === 'successRegister') {
      msgError = <SuccessMsg>Admin Cadastrado.</SuccessMsg>
    } else if (this.props.setErrorMsg === 'errorRegister') {
      msgError = <ErrorMsg>Admin não cadastrado.</ErrorMsg>
    } else {
      msgError = null
    }
    const { email, password } = this.state;

    return (
      <HomeContainer>
        <ContentContainer>
          <ImgLogo src={require('../../assets/Logo.png')} alt="logo" />
          <TextArea>
            <h2>Registrar novo Admin:</h2>
            {msgError}

            <form onSubmit={this.onClickRegister} >
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
                <ButtonSpace>Criar</ButtonSpace>
                <ButtonSpace onClick={this.props.goToAdmScreen}>Voltar</ButtonSpace>
              </ButtonAreaStyled>
            </form>
          </TextArea>

        </ContentContainer>
      </HomeContainer>

    );
  }
}

const mapStateToProps = state => ({
  setErrorMsg: state.auth.errorAdminMsg,
})

const mapDispatchToProps = dispatch => ({
  goToHomeScreen: () => dispatch(push(routes.home)),
  goToAdmScreen: () => dispatch(push(routes.admin)),
  signUp: (email, password) => dispatch(signUp(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)

