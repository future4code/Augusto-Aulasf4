import React from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  min-height:100vh;
  flex-direction:column;
  align-items:center;
  background: linear-gradient(rgb(221, 133, 8), rgb(111, 66, 4));
`

const NewButton = styled.button`
  margin:10px;
`

const ContainerdivColumn = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
`

const ContainerdivRow = styled.div`
  display: flex;
  align-items:center;
`

const EditImg = styled.img`
  margin:0 10px;
  width: 20px;
`

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: "",
      inputFilter:"",
      inputFilterDone: "", 
      listToDo: [],
      listDone: [],
    }
  }

  InputChanged = (event) =>{
    this.setState({inputValue: event.target.value})
  }

  InputFilterChanged = (event) =>{
    this.setState({inputFilter: event.target.value})
    
  }

  InputFilterChangedDone = (event) =>{
    this.setState({inputFilterDone: event.target.value})
    
  }

  AddListToDo = () =>{
    if(this.state.inputValue !== ""){
      const NewToDoList = [...this.state.listToDo, this.state.inputValue]
      this.setState({listToDo: NewToDoList,
                  inputValue:""})
    }
  }

  EditItem = (Index, event) =>{
    const newItemList = [...this.state.listToDo]
    newItemList[Index] = event.target.value
    this.setState({listToDo: newItemList})
  }

  EditItemDone = (Index, event) =>{
    const newItemList = [...this.state.listDone]
    newItemList[Index] = event.target.value
    this.setState({listDone: newItemList})
  }

  CheckedItemToDo = (toDoItems, Index) =>{
    const NewDoneList = [...this.state.listDone, toDoItems]

    const NewListToDo = [...this.state.listToDo]
    NewListToDo.splice(Index, 1)

    const UpdateState = {listDone:NewDoneList,listToDo:NewListToDo}

    this.setState(UpdateState)

  }

  UnCheckedItem = (DoneItems, Index) =>{
    const NewListToDo2 = [...this.state.listToDo, DoneItems]

    const NewDoneList2 = [...this.state.listDone]
    NewDoneList2.splice(Index, 1)

    const UpdateState2 = {listDone: NewDoneList2, listToDo: NewListToDo2}

    this.setState(UpdateState2)

  }


  DeleteItemToDo = (Index) =>{
    const NewListToDo = [...this.state.listToDo]
    NewListToDo.splice(Index, 1)

    this.setState({listToDo: NewListToDo})

  }

  DeleteItemDone = (Index) =>{
    const NewlistDone = [...this.state.listDone]
    NewlistDone.splice(Index, 1)

    this.setState({listDone: NewlistDone})

  }

  DeleteAll = () =>{
    this.setState({      inputValue: "",
    listToDo: [],
    listDone: [],})
  }

  Descending=()=>{
    const ordem = this.state.listToDo.sort(function (b, a) {

      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });

    this.setState({listToDo: ordem})


    const ordem2 = this.state.listDone.sort(function (b, a) {

      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });

    this.setState({listDone: ordem2})
  }

  Alphabetical =()=>{
    const ordem = this.state.listToDo.sort(function (a, b) {

      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });

    this.setState({listToDo: ordem})


    const ordem2 = this.state.listDone.sort(function (a, b) {

      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });

    this.setState({listDone: ordem2})
  }

  componentDidMount() {
    const storedState = JSON.parse(window.localStorage.getItem("Saved State"));
    this.setState(storedState);
  }

  componentDidUpdate() {
    const stateAsString = JSON.stringify(this.state);
    window.localStorage.setItem("Saved State", stateAsString);
  }

  render(){

    let FilterListToDo = this.state.listToDo.filter((toDoItem) => {
      return toDoItem === this.state.inputFilter
    })

    const NewListToDoFilter = FilterListToDo.map((toDoItems,Index) => {
      return  <ContainerdivRow key={Index}> 
      <input onChange={(event)=>this.EditItem(Index, event)} value={toDoItems} />
    <EditImg onClick={() => this.CheckedItemToDo(toDoItems, Index)} src="https://image.flaticon.com/icons/svg/907/907830.svg" alt="editar"/> 
    <EditImg onClick={() => this.DeleteItemToDo(Index)} src="https://image.flaticon.com/icons/svg/149/149343.svg" alt="editar"/> 
  </ContainerdivRow>
})


    let FilterListDone = this.state.listDone.filter((DoneItem) => {
      return DoneItem === this.state.inputFilterDone
    })

    const NewFilterListDone = FilterListDone.map((DoneItems,Index) => {
      return  <ContainerdivRow key={Index}>
                  <input onChange={(event)=>this.EditItemDone(Index, event)} value={DoneItems} />
                  <EditImg onClick={() => this.UnCheckedItem(DoneItems, Index)} src="https://image.flaticon.com/icons/svg/907/907881.svg" alt="editar"/> 
                  <EditImg onClick={() => this.DeleteItemDone(Index)} src="https://image.flaticon.com/icons/svg/149/149343.svg" alt="editar"/> 
              </ContainerdivRow>
    })

    const NewListToDo = this.state.listToDo.map((toDoItems,Index) => {
      return  <ContainerdivRow key={Index}> 
                  <input onChange={(event)=>this.EditItem(Index, event)} value={toDoItems} />
                <EditImg onClick={() => this.CheckedItemToDo(toDoItems, Index)} src="https://image.flaticon.com/icons/svg/907/907830.svg" alt="editar"/> 
                <EditImg onClick={() => this.DeleteItemToDo(Index)} src="https://image.flaticon.com/icons/svg/149/149343.svg" alt="editar"/> 
              </ContainerdivRow>
    })

    const NewDoneList = this.state.listDone.map((DoneItems,Index) => {
      return  <ContainerdivRow key={Index}>
                  <input onChange={(event)=>this.EditItemDone(Index, event)} value={DoneItems} />
                <EditImg onClick={() => this.UnCheckedItem(DoneItems, Index)} src="https://image.flaticon.com/icons/svg/907/907881.svg" alt="editar"/> 
                <EditImg onClick={() => this.DeleteItemDone(Index)} src="https://image.flaticon.com/icons/svg/149/149343.svg" alt="editar"/> 
              </ContainerdivRow>
    })
      
    return (
      <AppContainer>
        <ContainerdivRow>
          <input onChange={this.InputChanged} placeholder="Nova Tarefa" value={this.state.inputValue} type="text"/>
          <NewButton onClick={this.AddListToDo}>Adicionar</NewButton>
        </ContainerdivRow>
        <ContainerdivColumn>

          <h2>Lista de Tarefas</h2>
          <input onChange={this.InputFilterChanged} placeholder="Procurar Tarefa" value={this.state.inputFilter} type="text"/>
          {NewListToDoFilter}
          <ContainerdivRow>
          <NewButton onClick={this.Alphabetical}>Ordem Alfabética</NewButton><NewButton onClick={this.Descending}>Ordem Alfabética Decrescente</NewButton>
          </ContainerdivRow>
          <hr/>
          {NewListToDo}
        </ContainerdivColumn>
        <ContainerdivColumn>
          <h2>Lista de Concluidas</h2>
          <input onChange={this.InputFilterChangedDone} placeholder="Procurar Tarefa" value={this.state.inputFilterDone} type="text"/>
          {NewFilterListDone}
          <hr/>
          {NewDoneList}
        </ContainerdivColumn>
        <ContainerdivRow>
          <NewButton onClick={this.DeleteAll}>Limpar Tudo</NewButton>
        </ContainerdivRow>
      </AppContainer>
    );
  }
}
export default App;
