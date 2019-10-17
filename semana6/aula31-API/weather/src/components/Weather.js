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

export class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCity: "",
            cityWoeid: "",
            cityWeather: []
        }
    }

    onChangeInput = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    SearchWoeid = async () => {
        const res = await axios.get(`https://www.metaweather.com/api/location/search/?query=${this.state.currentCity}`)
        this.setState({ cityWoeid: res.data[0].woeid })

    }

    searchWeather = async () => {
        const res = await axios.get(`https://www.metaweather.com/api/location/${this.state.cityWoeid}`)
        this.setState({ cityWeather: res.data.consolidated_weather })
    }

    componentDidUpdate(inutil, prevState) {
        if (prevState !== this.state.cityWoeid) {
            this.searchWeather()
        }
    }


    render() {

        const listWeather = this.state.cityWeather.map(elem => {
            const url = `https://www.metaweather.com/static/img/weather/${elem.weather_state_abbr}.svg`
            return <div>
                <p>Dia: {elem.created}</p>
                <p>Clima: {elem.weather_state_name} <img src={url} alt="" /></p>
                <p>Minima: {elem.min_temp}</p>
                <p>Máxima: {elem.max_temp}</p>
                <p>Temperatura no Momento: {elem.the_temp}</p>
            </div>
        })
        return (
            <WeatherContainer>
                <label htmlFor="currentCity">Tempo no estado:</label>
                <SelectForm
                    type="text"
                    value={this.state.currentCity}
                    onChange={this.onChangeInput}
                    name="currentCity"
                    placeholder="estado..."
                >
                    <option value="rio de janeiro">Rio de Janeiro</option>
                    <option value="são paulo">São Paulo</option>
                    <option value="salvador">Salvador</option>
                    <option value="brasília">Brasília</option>
                </SelectForm>
                <ButtonForm onClick={this.SearchWoeid}>Buscar</ButtonForm>

                {listWeather}
            </WeatherContainer>
        )
    }
}

