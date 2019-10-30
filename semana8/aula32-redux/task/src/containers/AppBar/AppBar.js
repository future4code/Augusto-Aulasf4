import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from "react-redux";
import styled from 'styled-components'
import { handleSearchTask } from "../../actions/index";


const ToolbarStyled = styled(Toolbar)`
display: flex;
justify-content:flex-end;
`
const InputBaseStyled = styled(InputBase)`
color:white;
`
export function AppBarComponent(props) {

	function handleSearchTask(event){
		props.handleSearchTask(event.target.value)
	}
	
	// const changeSearchTask = (e)=>{
	// 	props.searchInputTaskName(e.target.value)
	// }

	return (
		<AppBar position="static">
			<ToolbarStyled>
				<SearchIcon />
				<InputBaseStyled
					value={props.searchTask}
					onChange={handleSearchTask}
					placeholder="Search…"
				/>
			</ToolbarStyled>
		</AppBar>
	)

}
const mapStateToProps = state => {
	return {
		searchTask: state.tasks.searchTaskName,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleSearchTask: taskName => dispatch(handleSearchTask(taskName)),
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppBarComponent);

