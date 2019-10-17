import React from 'react';
import styled from 'styled-components';
import { Weather } from './components/Weather';
import { Cep } from './components/Cep';
import { ChuckNorris } from './components/ChuckNorris';

const AppContainer = styled.div`
  background: lightgoldenrodyellow;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SelectForm = styled.select`
    width:100%;
    padding:0;
    margin:10px;
    height:30px;
    background: lightsteelblue;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      window:"",
    }
  }

  onChangeInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
}

  render() {

    let RenderApi

    if(this.state.window==="1"){
      RenderApi = <ChuckNorris/>
    }else if(this.state.window==="2"){
      RenderApi = <Weather/>
    }else if(this.state.window==="3"){
      RenderApi = <Cep/>
    }

    return (
      <AppContainer>
        <SelectForm name="window" onChange={this.onChangeInput} value={this.state.window}>
          <option value="1">Frases de ChuckNorris</option>
          <option value="2">Ver Clima</option>
          <option value="3">Busca de Cep</option>
        </SelectForm>
        {RenderApi}
      </AppContainer>
    )
  }
}

export default App;
