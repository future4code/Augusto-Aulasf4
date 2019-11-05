import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";

const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class ShowTrips extends Component {
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

    console.log(this.props.goToHomeScreen)
    
    const { email, password } = this.state;

    return (
      <LoginWrapper>
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
        <Button >Criar</Button>
        <Button onClick={this.props.goToHomeScreen}>Voltar</Button>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => ({
	// matches: state.profiles.matches,
})

const mapDispatchToProps = dispatch => ({
	goToHomeScreen: () => dispatch(push(routes.home)),
})

export default connect(null, mapDispatchToProps)(ShowTrips)

