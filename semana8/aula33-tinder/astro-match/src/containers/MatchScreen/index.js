import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AppBar} from '../../components/AppBar'
import {mdiAccountSwitch} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import {getMatches} from '../../actions'
import {Loader} from '../../components/Loader/index'
import {MatchContainer, DivOver, Avatar, List, ListItem, ListText, MatchIcon, swipeRightToInit, swipeLeftToClose} from './styled'

class MatchScreen extends Component {
	constructor(props){
		super(props)
		this.state={
			closeWindowAnimation:null
		}
	}

	componentDidMount() {
		this.setState({closeWindowAnimation: swipeRightToInit})
		if (this.props.getMatches) {
			this.props.getMatches()
		}
	}

	closeWindowAndChange = () =>{
		this.setState({closeWindowAnimation:swipeLeftToClose})

		setTimeout(
			() => this.props.goToSwipeScreen(),
			600
		  );
	}

	render() {

		const {goToSwipeScreen, matches} = this.props

		return (
			<MatchContainer closeWindowWithAnimation={this.state.closeWindowAnimation}>
				<AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={this.closeWindowAndChange}
					/>}
				/>
				<DivOver>
				<List>
			{matches.length>0 ?  matches && matches.map((match) => (
				<ListItem key={match.name}>
					<Avatar src={match.photo}/>
					<ListText>{match.name}</ListText>
				</ListItem>
			)): <Loader/> }
		</List>
				</DivOver>
			</MatchContainer>
		)
	}
}

MatchScreen.propTypes = {
	goToSwipeScreen: PropTypes.func.isRequired,
	getMatches: PropTypes.func.isRequired,
	matches: PropTypes.array
}

const mapStateToProps = state => ({
	matches: state.profiles.matches
})

const mapDispatchToProps = dispatch => ({
	goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
	getMatches: () => dispatch(getMatches()),

})

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen)