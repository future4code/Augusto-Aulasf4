import React from 'react'
import styled from 'styled-components'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IndeterminateCheckBox from '@material-ui/icons/IndeterminateCheckBox';
import Send from '@material-ui/icons/Send';
import { connect } from "react-redux";
import { inputTaskName } from "../actions/index";


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
	handleInput=(event)=>{
		props.changeTaskName({taskName: event.target.value})
	}
	// markAllTasks = () =>{
	// 	//vai pegar todos itens do array e passar o check para true
	// 	tasks.forEach(task => {
	// 		task.check = true
	// 	});
	// }

	// removeTask=(item)=>{
	// 	const itemId = array.findIndex(item)
	// 	tasks.splice(itemId,1)
	// }


	const tasks = [{ id: Date.now(), taskName: 'beba agua', check: false }, { id: Date.now(), taskName: 'coma coxinha', check: true }, { id: Date.now(), taskName: 'tome café', check: false }]

	const filterTasks = tasks.filter((filteredTask) => {
		return (filteredTask.check === false) //filtrar pelo escolhido no select
	})

	const listTasks = filterTasks.map((taskItem, index) => {
		return (
			<FlexDivText key={index}>
				<FormControlLabel
					control={
						<CheckBoxStyled
							value="checked"
							color="green[700]"
						/>
					}
					label={taskItem.taskName}
				/>
				<IndeterminateCheckBoxStyled
					//onClick={()=>removeTask(taskItem)} 
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
						onChange={handleInput}
						placeholder="O que precisa fazer?"
					/>
					<SendStyled fontSize="large" color="action" />
				</TaskHeader>
				<TaskBody>
					{listTasks}
				</TaskBody>

				<TaskFooter>
					<FormControlLabel
						// onClick={markAllTasks}
						control={
							<CheckBoxStyled
								value="checked"
								color="green[700]"
							/>
						}
						label="Marcar Todas"
					/>

					<FormControlStyled >
						<Select
							value="todas"
							color="red"
						// value={this.state.age}
						// onChange={this.handleChange}
						// inputProps={{
						//   name: 'age',
						//   id: 'age-simple',
						// }}
						>
							<MenuItem value="todas">Todas</MenuItem>
							<MenuItem value="marcadas">Marcadas</MenuItem>
							<MenuItem value="pendentes">Pendentes</MenuItem>
						</Select>
					</FormControlStyled>
					<FormControlLabel
						control={
							<CheckBoxStyled
								value="checked"
								color="green[700]"
							/>
						}
						label="Remover Todas"
					/>
				</TaskFooter>
			</TaskContainer>

		</MainTask>
	)
}

const mapStateToProps = state => {
	return {
		taskName: state.tasks.taskName
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeTaskName: taskName => dispatch(inputTaskName(taskName))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Task);