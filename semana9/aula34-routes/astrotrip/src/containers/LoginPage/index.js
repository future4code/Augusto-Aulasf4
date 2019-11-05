import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import { HomeContainer, ContentContainer, ImgLogo, TextArea, ButtonSpace, ButtonArea } from '../HomePage/styled'


const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

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

  render() {
    
    const { email, password } = this.state;

    return (
      <HomeContainer>
      <ContentContainer>
        <ImgLogo src={require('../../assets/Logo.png')} alt="logo" />
        <TextArea>
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
          <ButtonArea>
            <ButtonSpace onClick={this.props.goToAdmScreen}>Login</ButtonSpace>
            <ButtonSpace onClick={this.props.goToHomeScreen}>Voltar</ButtonSpace>
          </ButtonArea>
        </TextArea>
      </ContentContainer>
    </HomeContainer>
     
    );
  }
}

const mapStateToProps = state => ({
	// matches: state.profiles.matches,
})

const mapDispatchToProps = dispatch => ({
	goToHomeScreen: () => dispatch(push(routes.home)),
	goToAdmScreen: () => dispatch(push(routes.admin)),
})

export default connect(null, mapDispatchToProps)(LoginPage)

