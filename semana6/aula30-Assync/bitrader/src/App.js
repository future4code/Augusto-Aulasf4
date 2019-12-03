import React from 'react';
import styled from 'styled-components'
import { Trader } from './Components/Trader';
import now from 'performance-now';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:lightblue;
`

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  background:lightcoral;
  width:100%;
  padding: 20px 0;
`

const ButtonForm = styled.button`
  background: transparent;
  border:2px solid white;
  padding:15px;
  color:white;
  box-shadow:-2px 2px 3px black;

  :focus{
    outline:none;
    background: coral;
    box-shadow:-2px 2px 0px white;
  }
`

const InputForm = styled.input`
  width:20%;
  height:30px;
  background:transparent;
  border:none;
  color:white;
  border-bottom: 2px solid white;
  border-left: 2px solid white;
  :focus{
    outline:none;
  }

`

const SelectForm = styled.select`
  width:20%;
  height:30px;
  background:transparent;
  border:none;
  color:white;
  border-bottom: 2px solid white;
  border-left: 2px solid white;
  :focus{
    outline:none;
  }
`

const NothingDiv = styled.div`
  flex-grow:1;
`

const OptionForm = styled.option`
  color:black;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      finalDate: "",
      inicialDate: "",
      selectedCoin: "BTC",
      selectedType: "buy",
      chart: false
    }
  }

  ChangeSelectedCoin = (event) => {
    this.setState({ selectedCoin: event.target.value, chart: false })
  }

  ChangeSelectedType = (event) => {
    this.setState({ selectedType: event.target.value, chart: false })
  }

  ChangeInicialDate = (event) => {
    this.setState({ inicialDate: event.target.value, chart: false })
  }

  ChangeFinalDate = (event) => {
    this.setState({ finalDate: event.target.value, chart: false })
  }

  SearchResults = () => {
    this.setState({ chart: true })
  }

  render() {
    let renderChart
    if (this.state.chart) {
      renderChart = <Trader SelectedType={this.state.selectedType} InicialDate={this.state.inicialDate} FinalDate={this.state.finalDate} SelectedCoin={this.state.selectedCoin} />
    } else {
      renderChart = <NothingDiv />
    }
    return (
      <AppContainer>
        {renderChart}
        <FormContainer>
          <SelectForm onChange={this.ChangeSelectedCoin} value={this.state.selectedCoin}>
            <OptionForm value="BTC">Bitcoin</OptionForm>
            <OptionForm value="LTC">Litecoin</OptionForm>
            <OptionForm value="BCH">BCash</OptionForm>
            <OptionForm value="XRP">XRP (Ripple)</OptionForm>
            <OptionForm value="ETH">Ethereum</OptionForm>
          </SelectForm>
          <SelectForm onChange={this.ChangeSelectedType} value={this.state.selectedType}>
            <OptionForm value="buy">Compra</OptionForm>
            <OptionForm value="sell">Venda</OptionForm>
          </SelectForm>
          <InputForm onChange={this.ChangeInicialDate} value={this.state.inicialDate} placeholder="Data inicial" type="date" />
          <InputForm onChange={this.ChangeFinalDate} value={this.state.finalDate} placeholder="Data final" type="date" />
          <ButtonForm onClick={this.SearchResults}>Buscar</ButtonForm>
        </FormContainer>
      </AppContainer>
    );
  }
}

export default App;
