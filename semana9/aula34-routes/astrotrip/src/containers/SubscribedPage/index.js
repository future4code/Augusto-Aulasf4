import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { routes } from "../Router";
import { getTripDetail } from "../../actions";
import { RocketIcon, swipeToNot, swipeToYes } from "../../components/Rocket";
import { ButtonSpace } from "../HomePage/styled";
import Logo from "../../components/Logo";
import { SubscriberWrapper, ContentContainer, HeaderContent, BodyContent, CandidateContent, SettingContent, ButtonContent } from './styled'
import CardCandites from '../../components/CandidateCard'
import Loader from "../../components/Loader/Loader";

class SubscribersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnimation: null
    };
  }

  chooseOption = (op) => {
    let doAnimation = op === 'like' ? swipeToYes : swipeToNot
    this.setState({ currentAnimation: doAnimation })
  }

  render() {
    console.log(this.props.subscribed.candidates)
    const { currentAnimation } = this.state;

    let ListCandidates
    if (this.props.subscribed.candidates !== undefined) {
      ListCandidates = this.props.subscribed.candidates.map((candidate, index) => {
        return <CardCandites 
        nothing={true}
        key={index} 
        candidateName={candidate.name} 
        candidateAge={candidate.age} 
        candidateCountry={candidate.country} 
        candidateProdission={candidate.profession} 
        candidateText={candidate.applicationText}
        />
      })
    }else{
      ListCandidates = 
      <CardCandites
      nothing={false}
      candidateText= 'Nenhuma Viagem Selecionada.'
      />
    }
    return (
      <SubscriberWrapper>
        <ContentContainer>
          <HeaderContent>
            <Logo active={this.props.goToHomeScreen} />
            <h1>Gerenciamento de Candidatos</h1>
            <ButtonSpace onClick={this.props.goToAdmScreen}>Voltar</ButtonSpace>
          </HeaderContent>
          <BodyContent>
            <CandidateContent>
            
              {ListCandidates}
            </CandidateContent>
            <SettingContent>
              <RocketIcon animation={currentAnimation} src="https://cdn.pixabay.com/photo/2018/04/11/07/08/rocket-3309711_960_720.png" alt="" />
              <ButtonContent>
                <ButtonSpace onClick={() => this.chooseOption('dislike')}>Reprovar</ButtonSpace>
                <ButtonSpace onClick={() => this.chooseOption('like')}>Aprovar</ButtonSpace>
              </ButtonContent>
            </SettingContent>
          </BodyContent>
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
  goToHomeScreen: () => dispatch(push(routes.home)),
  getTripDetail: (id) => dispatch(getTripDetail(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SubscribersPage)

