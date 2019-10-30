import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from "react-redux";
import styled from 'styled-components'
import { handleSearchTask,fetchTasks } from "../../actions/index";


const ToolbarStyled = styled(Toolbar)`
display: flex;
justify-content:flex-end;
`
const InputBaseStyled = styled(InputBase)`
color:white;
`


	export class AppBarComponent extends React.Component {
		constructor(props) {
			super(props)
		}

		handleSearchTaskName=(event)=>{
			this.props.handleSearchTask(event.target.value)
		}
		
		// const changeSearchTask = (e)=>{
		// 	props.searchInputTaskName(e.target.value)
		// }
	
		componentDidMount(){
			this.props.fetchAllTasks()
		}
	
		render() {	return (
		<AppBar position="static">
			<ToolbarStyled>
				<SearchIcon />
				<InputBaseStyled
					value={this.props.searchTaskNameInput}
					onChange={this.handleSearchTaskName}
					placeholder="Search…"
				/>
			</ToolbarStyled>
		</AppBar>
	)

}
	}
const mapStateToProps = state => {
	return {
		searchTaskNameInput: state.tasks.searchTaskName,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleSearchTask: taskName => dispatch(handleSearchTask(taskName)),
		fetchAllTasks: taskName => dispatch(fetchTasks(taskName)),
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppBarComponent);

