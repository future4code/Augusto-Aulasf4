import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { routes } from "../Router";
import { getTripDetail } from "../../actions";
import { RocketIcon, swipeToNot, swipeToYes } from "../../components/Rocket";
import { ButtonSpace } from "../HomePage/styled";
import Logo from "../../components/Logo";
import { SubscriberWrapper, ContentContainer } from './styled'

class SubscribersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnimation: null
    };
  }

  chooseOption=(op)=>{
    let doAnimation = op === 'like' ? swipeToYes : swipeToNot
    this.setState({currentAnimation: doAnimation})
  }

  render() {
    console.log(this.props.subscribed.candidates)
    const { currentAnimation } = this.state;
    
    let ListCandidates
    if (this.props.subscribed.candidates!==undefined) { 
      ListCandidates = this.props.subscribed.candidates.map((candidate, index)=>{
      return <p key={index}>{candidate.name}</p>
    })
   }else{
      ListCandidates = null
   }

    return (
      <SubscriberWrapper>
        <ContentContainer>
        <Logo active={this.props.goToHomeScreen} />
        <RocketIcon animation={currentAnimation} src="https://cdn.pixabay.com/photo/2018/04/11/07/08/rocket-3309711_960_720.png" alt="" />
        <ButtonSpace >Criar</ButtonSpace>
        <ButtonSpace >Criar</ButtonSpace>
        {ListCandidates}
        <ButtonSpace onClick={this.props.goToAdmScreen}>Voltar</ButtonSpace>
        </ContentContainer>
      </SubscriberWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(SubscribersPage)

