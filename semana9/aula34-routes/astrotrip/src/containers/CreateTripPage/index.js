import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { routes } from "../Router";
import { HomeContainer, ContentContainer, ImgLogo, TextArea, ButtonSpace, ButtonArea } from '../HomePage/styled'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createTrip } from "../../actions";

const TextFieldStyled = styled(TextField)`
div{
  margin-bottom:5%;
}
`
const InputLabelStyled = styled(InputLabel)`
  margin-right:5%;
  width:100%;
`

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      planet: "Terra",
      date: "",
      description: "",
      durationInDays: "",
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();

    const { name, planet, date, description, durationInDays } = this.state;

    this.props.createTrip(name, planet, date, description, durationInDays)
  }

  render() {

    const { name, planet, date, description, durationInDays } = this.state;

    return (
      <HomeContainer>
        <ContentContainer>
          <ImgLogo src={require('../../assets/Logo.png')} alt="logo" />
          <TextArea>
            <h2>Dados da Viagem:</h2>
            <form onSubmit={this.submitForm} autoComplete="off">
              <FormControl>
                <TextFieldStyled
                  onChange={this.handleFieldChange}
                  name="name"
                  type="text"
                  label="Nome"
                  value={name}
                  inputProps={{ title: "É necessário ter ao menos 5 letras", pattern: "[a-zA-Z]{5,}" }}
                  required
                />
                
                <Select
                  value={planet}
                  onChange={this.handleFieldChange}
                  inputProps={{
                    name: 'planet',
                  }}
                  required
                >
                  <MenuItem value="Mercurio">Mercurio</MenuItem>
                  <MenuItem value="Venus">Venus</MenuItem>
                  <MenuItem value="Terra">Terra</MenuItem>
                  <MenuItem value="Marte">Marte</MenuItem>
                  <MenuItem value="Jupiter">Jupiter</MenuItem>
                  <MenuItem value="Saturno">Saturno</MenuItem>
                  <MenuItem value="Urano">Urano</MenuItem>
                  <MenuItem value="Netuno">Netuno</MenuItem>
                </Select>
                <TextFieldStyled
                  onChange={this.handleFieldChange}
                  name="date"
                  type="text"
                  label="Data"
                  value={date}
                  required
                />
                <TextFieldStyled
                  onChange={this.handleFieldChange}
                  name="description"
                  type="text"
                  label="Descrição"
                  value={description}
                  inputProps={{ title: "É necessário ter ao menos 30 letras", pattern: "[a-zA-Z]{30,}" }}
                  required
                />
                
                <TextFieldStyled
                  onChange={this.handleFieldChange}
                  name="durationInDays"
                  type="number"
                  label="Duração em dias"
                  value={durationInDays}
                  inputProps={{ min: "50" }}
                  required
                />
                <ButtonArea>
                  <ButtonSpace onClick={this.props.goToAdmScreen}>Voltar</ButtonSpace>
                  <ButtonSpace type="submit" >Criar</ButtonSpace>
                </ButtonArea>
              </FormControl>
            </form>
          </TextArea>
        </ContentContainer>
      </HomeContainer>

    );
  }
}

const mapStateToProps = state => ({
  // matches: state.profiles.matches,
})

const mapDispatchToProps = dispatch => ({
  goToAdmScreen: () => dispatch(push(routes.admin)),
  createTrip: (name, planet, date, description, durationInDays) => dispatch(createTrip(name, planet, date, description, durationInDays)),
})

export default connect(null, mapDispatchToProps)(CreateTrip)

