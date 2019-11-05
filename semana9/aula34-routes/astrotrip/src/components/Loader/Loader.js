import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled, {keyframes} from "styled-components";

export const spin = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1) translate(0) rotate(-90deg);
  }
  50% {
    transform: scale(0.8) translate(0) rotate(-180deg);
  }
  75% {
    transform: scale(1.2) translate(0) rotate(-270deg);
  }
  100% {
    transform: scale(1) rotate(-360deg);
  }
`




const Loading = styled.img`
height:70px;
    animation: ${spin} infinite 1.3s  ;
`

export function Loader(props) {

  return (
    <Loading src={require('../../assets/Logo.png')} alt="Loader Icon"/>
  );
}

export default Loader
