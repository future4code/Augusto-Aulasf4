import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled, {keyframes} from "styled-components";
import { rocketAnimationDuration } from "../../constants";

export const swipeToYes = keyframes`
  0% {
    transform: scale(1);
  }
  5% {
    transform:scale(1) translate(0) rotate(-15deg);
  }
  39% {
    transform: scale(1) translate(0) rotate(15deg);
  }
  45% {
    transform: scale(1) translate(0) rotate(-10deg);
  }
  60% {
    transform: scale(1) translate(0) rotate(10deg);
  }
  100% {
    transform: scale(1) translate(100px,-100vh);
  }
`
export const swipeToNot = keyframes`
  0% {
    transform: scale(1);
  }
  5% {
    transform:scale(1) translate(0) rotate(15deg);
  }
  39% {
    transform: scale(1) translate(0) rotate(-15deg);
  }
  45% {
    transform: scale(1) translate(0) rotate(30deg);
  }
  60% {
    transform: scale(1) translate(0) rotate(-30deg);
  }
  70% {
    transform: scale(1) translate(0,50px) rotate(90deg);
  }
  80% {
    transform: scale(1) translate(0,30px) rotate(45deg);
  }
  100% {
    transform: scale(1) translate(0,50px) rotate(105deg);
  }
`



const Rocket = styled.img`
    width:150px;
animation: ${props => props.animation} forwards ${rocketAnimationDuration}ms ;
`

export function RocketIcon(props) {

  return (
    <Rocket animation={props.animation} src="https://cdn.pixabay.com/photo/2018/04/11/07/08/rocket-3309711_960_720.png" alt="Rocket Icon"/>
  );
}

export default RocketIcon
