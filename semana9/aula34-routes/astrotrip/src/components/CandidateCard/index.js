import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled, { keyframes } from "styled-components";

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
    width:80%;
    height:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    color: white;
`

export function CardCandites(props) {

    return (
        <Card>
            <InCard>
                <h2>Nome : {props.candidateName}</h2>
                <p>Idade : {props.candidateAge}</p>
                <p>País : {props.candidateCountry}</p>
                <p>Profissão : {props.candidateProdission}</p>
                <p>Motivo : {props.candidateText}</p>
            </InCard>
        </Card>
    );
}

export default CardCandites

