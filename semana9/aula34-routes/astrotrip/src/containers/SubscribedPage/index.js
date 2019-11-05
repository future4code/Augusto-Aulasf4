import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import { getTripDetail } from "../../actions";
import { RocketIcon, swipeToNot } from "../../components/Rocket";

const LoginWrapper = styled.form`

  width: 100%;
  min-height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class Subscribers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount(){
    this.props.getTripDetail(this.props.subscribed.id)
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log(this.props.subscribed)
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
        <RocketIcon animation={swipeToNot} src="https://cdn.pixabay.com/photo/2018/04/11/07/08/rocket-3309711_960_720.png" alt=""/>
        <Button >Criar</Button>
        <Button onClick={this.props.goToAdmScreen}>Voltar</Button>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => ({
	subscribed: state.trips.actualTrip,
})

const mapDispatchToProps = dispatch => ({
	goToAdmScreen: () => dispatch(push(routes.admin)),
	getTripDetail: (id) => dispatch(getTripDetail(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)

