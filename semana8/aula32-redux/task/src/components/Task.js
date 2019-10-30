import React from 'react'
import styled from 'styled-components'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IndeterminateCheckBox from '@material-ui/icons/IndeterminateCheckBox';
import Send from '@material-ui/icons/Send';
import CheckBox from '@material-ui/icons/CheckBox';
import { connect } from "react-redux";
import { 
	toggleAll,
	toggleToDo,
	deleteToDo,
	fetchTasks, 
	inputTaskName, 
	sendInputTaskNameToArray,
	 checkTask, 
	 checkAllTasks, 
	 filterTasks, 
	 removeAllTasks,
	  removeTask, 
	  createTask, 
	  deleteAllToDo } from "../actions/index";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';



const MainTask = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background:#fb9d54;
`

const TaskContainer = styled.div`
	width:50%;
	display: flex;
	flex-direction: column;
	background:#fdb653;
`
const TaskHeader = styled.div`
	width:100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding:20px;
	border-bottom:2px solid #f7a156;
`
const TaskBody = styled.div`
	width:100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding:20px;
	border-bottom:2px solid #f7a156;
`

const FlexDivText = styled.div`
	width:90%;
	display: flex;
	justify-content: space-between;
	align-items:center;
`

const CheckBoxStyled = styled(Checkbox)`
color: green;
`

const FormControlStyled = styled(FormControl)`
color: green;
`

const IndeterminateCheckBoxStyled = styled(IndeterminateCheckBox)`
cursor:pointer;
:hover{
	color: red;
}
`

const SendStyled = styled(Send)`
cursor:pointer;
:hover{
	color: black;
}
`

const TaskFooter = styled.div`
	width:100%;
	display: flex;
	align-items: center;
	justify-content:space-between;
	padding:20px;
`

const TaskInput = styled.input`
	border:none;
	background:transparent;
	padding:20px;
	width:80%;
	font-size:25px;
	::placeholder{
		color:#7f563d;
	}
	:focus{
		outline:none;
	}
`

const TitleTask = styled.h1`
	color:#fbf5a4;
	font-size: 80px;
`

export function Task(props) {

	function handleInputName(event) {
		props.changeTaskName(event.target.value)
	}

	function ChangeFilter(event) {
		props.changeTaskFilter(event.target.value)
	}

	const addTaskToListEnter = (event) => {
		if (event.key === "Enter" || event.click) {
			props.createTask(props.taskName)
		}
	}

	const addTaskToList = (event) => {
		props.createTask(props.taskName)
	}

	const changeCheckBoxStatus = (el) => {
		props.toggleToDo(el)
	}

	const markAllTasks = () => {
		//vai pegar todos itens do array e passar o check para true
		props.toggleAll(props.checkAllState)
	};

	const deleteAll = () => {
		//vai pegar todos itens do array e passar o check para true
		props.deleteAllToDo()
	};

	const removeTask = (item) => {
		props.deleteToDo(item)
	}

	// props.fetchTasks()
	const filterTasks = props.taskList.filter((filteredTask) => {
		if (props.taskFilter === "todas") {
			return (filteredTask.done === true || filteredTask.done === false)
		} else if (props.taskFilter === "pendentes") {
			return (filteredTask.done === false)
		} else if (props.taskFilter === "marcadas") {
			return (filteredTask.done === true)
		}
	})

	const listTasks = filterTasks.map((taskItem, index) => {
		return (
			<FlexDivText key={index}>
				<FormControlLabel

					control={
						<CheckBoxStyled
							onClick={() => changeCheckBoxStatus(taskItem.id)}
							checked={taskItem.done}
							color="green"
						/>
					}
					label={taskItem.text}
				/>
				<IndeterminateCheckBoxStyled
					onClick={() => removeTask(taskItem)}
					color="secondary"
				/>
			</FlexDivText>
		)
	})

	return (
		<MainTask>
			<TitleTask>Tasks 4U</TitleTask>
			<TaskContainer>
				<TaskHeader>
					<TaskInput
						value={props.taskName}
						onKeyPress={addTaskToListEnter}
						onChange={handleInputName}
						placeholder="O que precisa fazer?"
					/>
					<SendStyled onClick={addTaskToList} fontSize="large" color="action" />
				</TaskHeader>
				<TaskBody>
					{listTasks}
				</TaskBody>

				<TaskFooter>
					<FormControlLabel
						control={
							<CheckBoxStyled
								onClick={markAllTasks}
								checked={props.checkAllState}
								color="green"
							/>
						}
						label={props.checkAllState ? "Desmarcar Todas" : "Marcar Todas"}
					/>

					<FormControlStyled >
						<Select
							value={props.taskFilter}
							onChange={ChangeFilter}
							color="red"
						>
							<MenuItem value="todas">Todas</MenuItem>
							<MenuItem value="marcadas">Marcadas</MenuItem>
							<MenuItem value="pendentes">Pendentes</MenuItem>
						</Select>
					</FormControlStyled>
					<Button onClick={deleteAll} variant="contained" color="secondary">
						<DeleteIcon />
						Todas
							<CheckBox />
					</Button>
				</TaskFooter>
			</TaskContainer>

		</MainTask>
	)
}

const mapStateToProps = state => {
	return {
		taskName: state.tasks.taskName,
		taskList: state.tasks.listTasks,
		taskFilter: state.tasks.taskFilter,
		checkAllState: state.tasks.checkAll,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeTaskName: taskName => dispatch(inputTaskName(taskName)),
		changeTaskFilter: taskName => dispatch(filterTasks(taskName)),
		addTaskToList: taskName => dispatch(sendInputTaskNameToArray(taskName)),
		changeCheckBoxStatus: taskName => dispatch(checkTask(taskName)),
		markAllTasks: taskName => dispatch(checkAllTasks(taskName)),
		deleteAllTasks: taskName => dispatch(removeAllTasks(taskName)),
		removeTask: taskName => dispatch(removeTask(taskName)),
		fetchTasks: taskName => dispatch(fetchTasks(taskName)),
		createTask: taskName => dispatch(createTask(taskName)),
		deleteAllToDo: taskName => dispatch(deleteAllToDo(taskName)),
		deleteToDo: taskName => dispatch(deleteToDo(taskName)),
		toggleToDo: taskName => dispatch(toggleToDo(taskName)),
		toggleAll: taskName => dispatch(toggleAll(taskName)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Task);