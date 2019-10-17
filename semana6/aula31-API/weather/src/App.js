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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <AppContainer>
        <ChuckNorris/>
      </AppContainer>
    )
  }
}

export default App;
