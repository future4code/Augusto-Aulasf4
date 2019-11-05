import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import { getTrips } from "../../actions";
import Logo from "../../components/Logo";

const LoginWrapper = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  width:100%;
  height:100vh;
  background:url('https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5d7ebf13cb34e44fada5540c_estrelas_fundo4.png'), linear-gradient(360deg, #3068d0, #692b90 50%, #120f33 80%, #050505);

`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    this.props.getTrips()
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {

    const { email, password } = this.state;

    return (
      <LoginWrapper>
        <Logo active={this.props.goToHomeScreen}/>
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
        <Button onClick={this.props.goToHomeScreen}>Home</Button>
        <Button onClick={this.props.goToCreateTripScreen}>Criar Viagem</Button>
        <Button onClick={this.props.goToSubsScreen}>Inscritos</Button>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => ({
  // matches: state.profiles.matches,
})

const mapDispatchToProps = dispatch => ({
  goToCreateTripScreen: () => dispatch(push(routes.createTrips)),
  goToSubsScreen: () => dispatch(push(routes.subscribed)),
  goToHomeScreen: () => dispatch(push(routes.home)),
  getTrips: () => dispatch(getTrips()),
})

export default connect(null, mapDispatchToProps)(LoginPage)

