import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import { getTrips, getTripDetail } from "../../actions";
import Logo from "../../components/Logo";
import Loader from "../../components/Loader/Loader";
import { ButtonSpace } from "../HomePage/styled";
import { AdmWrapper, ContentContainer, HeaderContent, BodyContent, MenuContent, ButtonMenu, MenuTitle, MenuItems } from "./styled";

const TripContent = styled.div`
background:white;
margin:5%;
border-radius:20px;
width:70%;
border:2px solid black;
display:flex;
align-items:center;
flex-direction:column;
justify-content:space-evenly;
`

function TripLoading (props) {

    const { idTrip, subscribed } = props;

    return (
      <TripContent>
        <Loader></Loader>
        <h2>Selecione alguma viagem do menu para ver os detalhes.</h2>
      </TripContent>
    );
  }

const mapStateToProps = state => ({
  subscribed: state.trips.actualTrip,
})

const mapDispatchToProps = dispatch => ({
  goToCreateTripScreen: () => dispatch(push(routes.createTrips)),
  goToSubsScreen: () => dispatch(push(routes.subscribed)),
  goToHomeScreen: () => dispatch(push(routes.home)),
  getTrips: () => dispatch(getTrips()),
  getTripDetail: (id) => dispatch(getTripDetail(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TripLoading)

