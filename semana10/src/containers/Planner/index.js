import React from "react";
import { connect } from "react-redux";
import { getTasks, createTask } from '../../actions'
import { PlannerContainer, InputsContainer, Title, Day, Activity, IncludeButton } from './styled'

export class Planner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: "",
      selectText: "seg",
    }
  }

  componentDidMount() {
    this.props.getTasks()
  }

  handleState = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  includeActivity = () => {
    const { createTask } = this.props
    const { inputText, selectText } = this.state
    createTask(inputText, selectText)
    this.setState({
      inputText: "",
      selectText: "seg",
    })
  }

  render() {
    const { inputText, selectText } = this.state
    const { allTasks } = this.props

    const listSegFilter = allTasks.filter(elem => {
      return elem.day === 'seg'
    })
    const listTerFilter = allTasks.filter(elem => {
      return elem.day === 'ter'
    })
    const listQuaFilter = allTasks.filter(elem => {
      return elem.day === 'qua'
    })
    const listQuiFilter = allTasks.filter(elem => {
      return elem.day === 'qui'
    })
    const listSexFilter = allTasks.filter(elem => {
      return elem.day === 'sex'
    })
    const listSabFilter = allTasks.filter(elem => {
      return elem.day === 'sab'
    })
    const listDomFilter = allTasks.filter(elem => {
      return elem.day === 'dom'
    })
    const listSeg = listSegFilter.map((elem, index) => {
      return <Activity key={index}>{elem.text}</Activity>
    })
    const listTer = listTerFilter.map((elem, index) => {
      return <Activity key={index}>{elem.text}</Activity>
    })
    const listQua = listQuaFilter.map((elem, index) => {
      return <Activity key={index}>{elem.text}</Activity>
    })
    const listQui = listQuiFilter.map((elem, index) => {
      return <Activity key={index}>{elem.text}</Activity>
    })
    const listSex = listSexFilter.map((elem, index) => {
      return <Activity key={index}>{elem.text}</Activity>
    })
    const listSab = listSabFilter.map((elem, index) => {
      return <Activity key={index}>{elem.text}</Activity>
    })
    const listDom = listDomFilter.map((elem, index) => {
      return <Activity key={index}>{elem.text}</Activity>
    })
    return (
      <PlannerContainer>
        <Title>Segunda</Title>
        <Title>Terça</Title>
        <Title>Quarta</Title>
        <Title>Quinta</Title>
        <Title>Sexta</Title>
        <Title>Sábado</Title>
        <Title>Domingo</Title>
        <Day>{listSeg}</Day>
        <Day>{listTer}</Day>
        <Day>{listQua}</Day>
        <Day>{listQui}</Day>
        <Day>{listSex}</Day>
        <Day>{listSab}</Day>
        <Day>{listDom}</Day>
        <InputsContainer>
          <input type="text" name="inputText" value={inputText} onChange={this.handleState} />
          <select name="selectText" value={selectText} onChange={this.handleState}>
            <option value="seg">Segunda</option>
            <option value="ter">Terça</option>
            <option value="qua">Quarta</option>
            <option value="qui">Quinta</option>
            <option value="sex">Sexta</option>
            <option value="sab">Sábado</option>
            <option value="dom">Domingo</option>
          </select>
          <IncludeButton onClick={this.includeActivity}>Incluir</IncludeButton>
        </InputsContainer>

      </PlannerContainer>
    );
  }
}

const mapStateToProps = state => ({
  allTasks: state.tasks.allTasks,
})

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasks()),
  createTask: (text, day) => dispatch(createTask(text, day)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
