import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { routes } from "../Router";
import { HomeContainer, ContentContainer, ImgLogo, TextArea, ButtonSpace, ButtonArea } from '../HomePage/styled'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createTrip } from "../../actions";
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';

const TextFieldStyled = styled(TextField)`
div{
  margin-bottom:5%;
}
`
const SnackbarSuccess = styled(Snackbar)`
  background:green;
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
      open: ""
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

    const dateToBack =  (new Date(date).getDate()+1) +'/'+ (new Date(date).getMonth()+1)+'/'+(new Date(date).getFullYear())

    this.props.createTrip(name, planet, dateToBack, description, durationInDays)

    this.setState({
      name: "",
      planet: "Terra",
      date: "",
      description: "",
      durationInDays: "",
      open: true
    })
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    const todayDay = new Date().getDate() < 10 ? "0" + (Number(new Date().getDate()) + Number(1)) : (Number(new Date().getDate()) + Number(1))
    const todayMonth = (Number(new Date().getMonth()) + Number(1))
    const todayYear = new Date().getFullYear()

    const todayDate = todayYear + '-' + todayMonth + '-' + todayDay

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
                  inputProps={{ title: "É necessário ter ao menos 5 letras", minlength: "5" }}
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
                  type="date"
                  value={date}
                  inputProps={{ min: todayDate }}
                  required
                />
                <TextFieldStyled
                  onChange={this.handleFieldChange}
                  name="description"
                  type="text"
                  label="Descrição"
                  value={description}
                  inputProps={{ title: "É necessário ter ao menos 30 letras", minlength: "30" }}
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

const mapDispatchToProps = dispatch => ({
  goToAdmScreen: () => dispatch(push(routes.admin)),
  createTrip: (name, planet, date, description, durationInDays) => dispatch(createTrip(name, planet, date, description, durationInDays)),
})

export default connect(null, mapDispatchToProps)(CreateTrip)

