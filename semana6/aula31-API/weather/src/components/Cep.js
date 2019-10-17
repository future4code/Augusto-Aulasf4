import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const WeatherContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

const InputForm = styled.input`
    width:100%;
    padding:0;
    margin:0;
    height:30px;
    margin-bottom:10px;
`

const SelectForm = styled.select`
    width:100%;
    padding:0;
    margin:10px;
    height:30px;
    background: lightsteelblue;
`

const ButtonForm = styled.button`
    background: lightsteelblue;
    border: 2px black solid;
    box-shadow:2px 2px 2px black;
`

export class Cep extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cep: "",
            cityWoeid: "",
            cepChecked: []
        }
    }

    onChangeInput = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    SearchCep = async () => {
        const res = await axios.get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
        console.log(res.data)
        this.setState({ cepChecked: res.data })

    }



    render() {

        return (
            <WeatherContainer>
                <label htmlFor="currentCity">Buscar pelo cep:</label>
                <InputForm
                    type="text"
                    value={this.state.cep}
                    onChange={this.onChangeInput}
                    name="cep"
                    placeholder="cep..."
                />
                <ButtonForm onClick={this.SearchCep}>Buscar</ButtonForm>

                <div>
                    <p>Cep: {this.state.cepChecked.cep}</p>
                    <p>Rua: {this.state.cepChecked.logradouro}</p>
                    <p>Bairro: {this.state.cepChecked.bairro}</p>
                    <p>Cidade: {this.state.cepChecked.localidade}</p>
                    <p>Estado: {this.state.cepChecked.uf}</p>
                    <p>Ibge: {this.state.cepChecked.ibge}</p>
                </div>
            </WeatherContainer>
        )
    }
}

