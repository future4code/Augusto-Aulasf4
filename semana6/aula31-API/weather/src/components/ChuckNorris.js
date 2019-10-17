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
const TalkDiv = styled.div`
    border: 3px solid black;
    border-radius: 10px 10px 0 10px;
    padding:10px;
    margin-right: 10px;
`
const FlexDiv = styled.div`
    display:flex;
`

const ButtonForm = styled.button`
    background: lightsteelblue;
    border: 2px black solid;
    box-shadow:2px 2px 2px black;
    margin:10px;
`

export class ChuckNorris extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chuckTalked: "E ai!!"
        }
    }

    onChangeInput = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    Searchcpf = async () => {
        const res = await axios.get(`https://api.chucknorris.io/jokes/random`,
        )
        this.setState({ chuckTalked: res.data.value })
    }

    render() {
        return (
            <WeatherContainer>
                <h1>Verdades sobre Chuck Norris</h1>
                <ButtonForm onClick={this.Searchcpf}>Sortear</ButtonForm>
                <FlexDiv>
                    <TalkDiv>{this.state.chuckTalked}</TalkDiv> <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="" />
                </FlexDiv>
            </WeatherContainer>
        )
    }
}

