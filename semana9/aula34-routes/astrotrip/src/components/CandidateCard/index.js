import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled, { keyframes } from "styled-components";
import Loader from "../Loader/Loader";

const Card = styled.div`
    position:absolute;
    width:70%;
    height:80%;
    display:flex;
    flex-direction:column;
    background:#7b1fa2;
    align-items:center;
    justify-content:space-evenly;
    border:2px solid black;
    border-radius: 20px;
`

const InCard = styled.div`
    position:absolute;
    width:75%;
    height:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    color: white;
`

export function CardCandites(props) {

    let LoadingTrue
    
    if(props.nothing){
        LoadingTrue= <InCard>
        <h2>Nome : {props.candidateName}</h2>
        <h3>Idade : {props.candidateAge}</h3>
        <h3>País : {props.candidateCountry}</h3>
        <h3>Profissão : {props.candidateProdission}</h3>
        <h3>Motivo : {props.candidateText}</h3>
    </InCard>
    }else{ LoadingTrue =<InCard><Loader/><h3>Nenhuma Viagem foi selecionada.</h3></InCard> }


    return (
        <Card>
            {LoadingTrue}
        </Card>
    )
}

export default CardCandites
