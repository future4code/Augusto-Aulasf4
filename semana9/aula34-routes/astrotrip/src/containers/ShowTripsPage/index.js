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
import { createTrip, getTrips, applyToTrip } from "../../actions";
import { SelectCountries } from "./countries";
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';

const TextFieldStyled = styled(TextField)`
div{
  margin-bottom:5%;
}
`

const SelectStyled = styled(Select)`
div{
  margin-bottom:5%;
}
`

const SnackbarSuccess = styled(Snackbar)`
  background:green;
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
      age: "",
      applicationText: "",
      profession: "",
      country: "",
      tripId: ""
    };
  }

  componentDidMount() {
    this.props.getTrips()
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();

    const { name, age, applicationText, profession, country, tripId } = this.state;

    this.props.applyToTrip(name, age, applicationText, profession, country, tripId)

    this.setState({
      name: "",
      age: "",
      applicationText: "",
      profession: "",
      country: "",
      tripId: "",
      open: true
    })
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { name, age, applicationText, profession, country, tripId } = this.state;
    const { allTrips } = this.props;

    const tripOptions = allTrips.map((trip, index) => {
      return <MenuItem value={trip.id}>{trip.name} - {trip.planet}</MenuItem>
    })


    let countryOptions = SelectCountries.map((country, index) => {
      return <MenuItem key={index} value={country.nome}>{country.nome}</MenuItem>
    })


    return (
      <HomeContainer>
        <ContentContainer>
          <ImgLogo src={require('../../assets/Logo.png')} alt="logo" />
          <TextArea>
            <h2>Dados do Candidato:</h2>
            <form onSubmit={this.submitForm} autoComplete="off">
              <FormControl>
                <TextFieldStyled
                  onChange={this.handleFieldChange}
                  name="name"
                  type="text"
                  label="Nome"
                  value={name}
                  inputProps={{ title: "É necessário ter ao menos 3 letras", pattern: "[a-zA-Z]{3,}" }}
                  required
                />
                <TextFieldStyled
                  onChange={this.handleFieldChange}
                  name="age"
                  type="text"
                  label="Idade"
                  value={age}
                  inputProps={{ min: "18" }}
                  required
                />
                <TextFieldStyled
                  onChange={this.handleFieldChange}
                  name="applicationText"
                  type="text"
                  label="Motivo"
                  value={applicationText}
                  inputProps={{ title: "É necessário ter ao menos 30 letras", minlength: "30" }}
                  required
                />
                <TextFieldStyled
                  onChange={this.handleFieldChange}
                  name="profession"
                  type="text"
                  label="Profissão"
                  value={profession}
                  inputProps={{ title: "É necessário ter ao menos 10 letras", minlength: "10" }}
                  required
                />
                <FormControl>
                  <InputLabel htmlFor="country">Seu País</InputLabel>
                  <SelectStyled
                    value={country}
                    onChange={this.handleFieldChange}
                    inputProps={{
                      name: 'country',
                      id: 'country'
                    }}
                    required
                  >
                    {countryOptions}
                  </SelectStyled>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="country">Viagem</InputLabel>
                  <SelectStyled
                    value={tripId}
                    onChange={this.handleFieldChange}
                    inputProps={{
                      name: 'tripId',
                      id: 'country'
                    }}
                    required
                  >
                    {tripOptions}

                  </SelectStyled>
                </FormControl>
                <SnackbarSuccess
                  open={this.state.open}
                  onClose={this.handleClose}
                  TransitionComponent={Fade}
                  ContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<span id="message-id">Cadastrado com sucesso!</span>}
                />
                <ButtonArea>
                  <ButtonSpace onClick={this.props.goToHomeScreen}>Voltar</ButtonSpace>
                  <ButtonSpace type="submit" >Candidatar</ButtonSpace>
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
  allTrips: state.trips.allTrips,
})

const mapDispatchToProps = dispatch => ({
  goToHomeScreen: () => dispatch(push(routes.home)),
  createTrip: (name, planet, date, description, durationInDays) => dispatch(createTrip(name, planet, date, description, durationInDays)),
  applyToTrip: (name, age, applicationText, profession, country, tripId) => dispatch(applyToTrip(name, age, applicationText, profession, country, tripId)),
  getTrips: () => dispatch(getTrips()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateTrip)