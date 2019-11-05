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
import TripDetail from "./TripDetail";
import TripLoading from "./TripLoading";

class AdmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getTrips()
  }

  showTripDetail=(id)=>{
    this.props.getTripDetail(id)
  }

  render() {

    const { allTrips, actualTrip } = this.props;

    const listTrips = allTrips.map((trip,index)=>{
      return (<MenuItems onClick={()=>this.showTripDetail(trip.id)} key={index}>{trip.name}</MenuItems>)
    })

    return (
      <AdmWrapper>
        <ContentContainer>
          <HeaderContent>
            <Logo active={this.props.goToHomeScreen} />
            <h1>Painel Administrativo</h1>
            <span></span>
          </HeaderContent>
          <BodyContent>
            <MenuContent>
              <ButtonMenu onClick={this.props.goToCreateTripScreen}>Criar Viagem</ButtonMenu>
              <MenuTitle>Sua Viagens</MenuTitle>
              {allTrips===[] ? <Loader/> : listTrips}
            </MenuContent>
            {actualTrip ? <TripDetail/> : <TripLoading/>}
          </BodyContent>
        </ContentContainer>
      </AdmWrapper>
    );
  }
}

const mapStateToProps = state => ({
  allTrips: state.trips.allTrips,
  actualTrip: state.trips.actualTrip,
})

const mapDispatchToProps = dispatch => ({
  goToCreateTripScreen: () => dispatch(push(routes.createTrips)),
  goToSubsScreen: () => dispatch(push(routes.subscribed)),
  goToHomeScreen: () => dispatch(push(routes.home)),
  getTrips: () => dispatch(getTrips()),
  getTripDetail: (id) => dispatch(getTripDetail(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdmPage)

