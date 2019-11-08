import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { routes } from "../Router";
import { getTrips, getTripDetail, deleteTrip } from "../../actions";
import { setErrorMsg, setErrorIfNotAdminMsg } from "../../actions/auth";
import Logo from "../../components/Logo";
import Loader from "../../components/Loader/Loader";
import { ButtonSpace } from "../HomePage/styled";
import { AdmWrapper, ContentContainer, HeaderContent, BodyContent, MenuContent, ButtonMenu, MenuTitle, MenuItems, MenuItemsContent } from "./styled";
import TripDetail from "./TripDetail";
import TripLoading from "./TripLoading";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Cancel from '@material-ui/icons/Cancel';

export const DeleteForeverIconStyled = styled(DeleteForeverIcon)`
  cursor:pointer;
  :hover{
    color: red;
  }
`;

export const CancelIconStyled = styled(Cancel)`
  cursor:pointer;
`;

const ErrorMsg = styled.p`
  width: 100%;
  background:lightcoral;
  color:white;
  text-align:center;
`

class AdmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getTrips()
  }

  showTripDetail = (id) => {
    this.props.getTripDetail(id)
  }

  deleteThisTrip = (id) => {
    this.props.deleteTrip(id)
  }

  closeAlertMsg = () => {
    this.props.setErrorIfNotAdminMsg(false)
  }

render() {

  const { allTrips, actualTrip, deleteTrip, goToSignUpScreen, goToCreateTripScreen, goToHomeScreen, errorAdmin } = this.props;

  const listTrips = allTrips.map((trip, index) => {
    return (<MenuItemsContent><MenuItems onClick={() => this.showTripDetail(trip.id)} key={index}>{trip.name}</MenuItems> <DeleteForeverIconStyled onClick={() => this.deleteThisTrip(trip.id)} /></MenuItemsContent>)
  })

  return (
    <AdmWrapper>
      <ContentContainer>
        {errorAdmin === "errorAdmin" ? <ErrorMsg>'Você é um revisor, apenas admin tem acesso a esta página.'<CancelIconStyled onClick={this.closeAlertMsg} /></ErrorMsg> : null}
        <HeaderContent>
          <Logo active={goToHomeScreen} />
          <h1>Painel Administrativo</h1>
          <ButtonSpace onClick={goToSignUpScreen}>Novo Admin</ButtonSpace>
        </HeaderContent>
        <BodyContent>
          <MenuContent>
            <ButtonMenu onClick={goToCreateTripScreen}>Criar Viagem</ButtonMenu>
            <MenuTitle>Suas Viagens</MenuTitle>
            {allTrips === [] ? <Loader /> : listTrips}
          </MenuContent>
          {actualTrip ? <TripDetail /> : <TripLoading />}
        </BodyContent>
      </ContentContainer>
    </AdmWrapper>
  );
}
}

const mapStateToProps = state => ({
  allTrips: state.trips.allTrips,
  actualTrip: state.trips.actualTrip,
  errorAdmin: state.auth.errorNotAdminMsg
})

const mapDispatchToProps = dispatch => ({
  goToCreateTripScreen: () => dispatch(push(routes.createTrips)),
  goToSubsScreen: () => dispatch(push(routes.subscribed)),
  goToHomeScreen: () => dispatch(push(routes.home)),
  goToLoginScreen: () => dispatch(push(routes.login)),
  goToSignUpScreen: () => dispatch(push(routes.signup)),
  getTrips: () => dispatch(getTrips()),
  getTripDetail: (id) => dispatch(getTripDetail(id)),
  deleteTrip: (id) => dispatch(deleteTrip(id)),
  setErrorMsg: (errorMsg) => dispatch(setErrorMsg(errorMsg)),
  setErrorIfNotAdminMsg: (errorMsg) => dispatch(setErrorIfNotAdminMsg(errorMsg)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdmPage)

