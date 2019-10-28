import React from 'react'
import styled from 'styled-components'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding:20px;
	border-bottom:2px solid #f7a156;
`
const TaskBody = styled.div`
	width:100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding:20px;
	border-bottom:2px solid #f7a156;
`

const CheckBoxStyled = styled(Checkbox)`
color: green;
`

const FormControlStyled = styled(FormControl)`
color: green;
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


	return (
		<MainTask>
			<TitleTask>Tasks 4U</TitleTask>
			<TaskContainer>
				<TaskHeader>
					<TaskInput placeholder="O que precisa fazer?"/>	
				</TaskHeader>
				<TaskBody>
					<FormControlLabel
          			control={
            		<CheckBoxStyled
					  value="checked"	
					  color="green[700]"	
            		/>
          			}
          			label="Beber Água"
        			/>
				</TaskBody>
				<TaskFooter>
				<FormControlLabel
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
