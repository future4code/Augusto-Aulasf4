import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import { HomeContainer, ContentContainer, ImgLogo, TextArea, ButtonSpace, ButtonArea } from './styled'

export function HomePage(props) {

  return (
    <HomeContainer>
      <ContentContainer>
        <ImgLogo src={require('../../assets/Logo.png')} alt="logo" />
        <TextArea>
          <h1>Bem Vindo!</h1>
          <p>Faça parte das melhores viagens espaciais com a maior facilidade possível!</p>
          <ButtonArea>
            <ButtonSpace onClick={props.goToLoginScreen}>Login</ButtonSpace>
            <ButtonSpace onClick={props.goToShowTripsScreen}>Candidatar</ButtonSpace>
          </ButtonArea>
        </TextArea>
      </ContentContainer>
    </HomeContainer>
  );
}


const mapStateToProps = state => ({
  // matches: state.profiles.matches,
})

const mapDispatchToProps = dispatch => ({
  goToLoginScreen: () => dispatch(push(routes.login)),
  goToShowTripsScreen: () => dispatch(push(routes.listTrips)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
