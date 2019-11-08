import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled, { keyframes } from "styled-components";



const LogoImg = styled.img`
    width:80px;
    cursor:pointer;
    animation: ${props => props.animation} 1.5s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    :active{
        position:relative;
        top:2px;
    }
`

export function Logo(props) {

  return (
    <LogoImg onClick={props.active} src={require('../../assets/Logo.png')} alt="Logo Icon" />
  )
}

export default Logo
