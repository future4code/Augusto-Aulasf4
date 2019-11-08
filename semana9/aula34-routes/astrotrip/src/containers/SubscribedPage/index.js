import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { getTripDetail, decideCandidate } from '../../actions'
import { RocketIcon, swipeToNot, swipeToYes } from '../../components/Rocket'
import { ButtonSpace } from '../HomePage/styled'
import Logo from '../../components/Logo'
import { SubscriberWrapper, ContentContainer, HeaderContent, BodyContent, CandidateContent, SettingContent, ButtonContent } from './styled'
import CardCandites from '../../components/CandidateCard'
import Loader from '../../components/Loader/Loader'
import { boardRocket } from '../../components/CandidateCard/index'
import { rocketAnimationDuration } from '../../constants'

class SubscribersPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentAnimation: null,
			cardAnimation: null,
			cardList: [],
		}
	}

	componentDidMount() {
		const { setErrorMsg, goToLoginScreen, subscribed } = this.props

		if (subscribed.candidates) {
			this.setState({ cardList: subscribed.candidates })
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevState.cardList.length !== this.state.cardList.length) {
			this.setState({ currentAnimation: null, cardAnimation: null })
		}
	}

	chooseOption = (op) => {

		const { subscribed, decideCandidate } = this.props
		const { cardList, cardAnimation } = this.state

		let doAnimation = op === 'like' ? swipeToYes : swipeToNot

		if (cardAnimation === null) {
			this.setState({ currentAnimation: doAnimation, cardAnimation: boardRocket })
		}

		const newCardList = [...cardList]

		if (subscribed.id!==undefined || newCardList.id!==undefined) {
			if (op === 'like') {
				decideCandidate(subscribed.id, newCardList[0].id, true)
			} else {
				decideCandidate(subscribed.id, newCardList[0].id, false)
			}
		}

		newCardList.splice(0, 1)

		setTimeout(() => {
			this.setState({ cardList: newCardList })
		}, rocketAnimationDuration); //extrai o valor para uma constante em oturo arquivo, pois o mesmo tambem altera o tempo da animação
	}

	render() {
		const { currentAnimation, cardAnimation, cardList } = this.state
		let ListCandidates
		if (this.props.subscribed.candidates !== undefined) {

			ListCandidates = cardList.map((candidate, index) => {
				return <CardCandites
					zIndex={cardList.length - index}
					animation={cardAnimation}
					nothing={true}
					key={index}
					candidateName={candidate.name}
					candidateAge={candidate.age}
					candidateCountry={candidate.country}
					candidateProdission={candidate.profession}
					candidateText={candidate.applicationText}
				/>
			})
		} else {
			ListCandidates =
				<CardCandites
					animation={cardAnimation}
					nothing={false}
					candidateText='Nenhuma Viagem Selecionada.'
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
		)
	}
}

const mapStateToProps = state => ({
	subscribed: state.trips.actualTrip,
})

const mapDispatchToProps = dispatch => ({
	goToAdmScreen: () => dispatch(push(routes.admin)),
	goToHomeScreen: () => dispatch(push(routes.home)),
	getTripDetail: (id) => dispatch(getTripDetail(id)),
	decideCandidate: (tripId, candidateId, approve) => dispatch(decideCandidate(tripId, candidateId, approve)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SubscribersPage)