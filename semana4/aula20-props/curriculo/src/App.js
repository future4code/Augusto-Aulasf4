import React from 'react';
import {BigCard} from './Components/BigCard/BigCard';
import {SmallCard} from './Components/SmallCard/SmallCard';
import {ImageButton} from './Components/ImageButton/ImageButton';
import {Container} from './Components/Container/Container';
import './App.css';

function App() {
  const principal = {
    imagem: 'https://media.licdn.com/dms/image/C4D03AQHmoJPE73k9EQ/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=AduImc1jsE13fJpv4ixP9EwGBK2-sjXIimmi7YtO2Ys',
    titulo: 'Augusto Telles',
    paragrafo: 'Oi, eu sou o Augusto Telles. Sou aluno da Future4. Adoro desafios e programar. No meu tempo ocioso, programo.'
  }

  const email = {
    imagem: require('./img/email.svg'),
    titulo: 'Email: ',
    paragrafo: 'augustotf93@gmail.com'
  }

  const endereco = {
    imagem: require('./img/house.svg'),
    titulo: 'Endereço: ',
    paragrafo: 'R. Sen. Irineu Machado, n 10, VR/RJ'
  }

  const trampo1 = {
    imagem: 'https://media.licdn.com/dms/image/C4D0BAQHp6kJU2k5a7Q/company-logo_400_400/0?e=1577923200&v=beta&t=N-pIjOqbEJ2iWHwiwGxv78Sm_ASD07omL_0QF91qbWo',
    titulo: 'Future4',
    paragrafo: 'Desenvolvedor desde um dia quem sabe!'
  }

  const trampo2 = {
    imagem: 'https://scontent.fstu3-1.fna.fbcdn.net/v/t1.0-9/36321479_1867602393297514_1279050606597636096_n.png?_nc_cat=109&_nc_oc=AQmIS1PnqcTXtSNhKA7J2gyiQfv5pUgWA4Qz5fQqKfFJXiOaNPtDPmtebJ7c61tKYMY&_nc_ht=scontent.fstu3-1.fna&oh=6a0e16a472141484246c6baaeeb3f06d&oe=5E2CE696',
    titulo: 'Lojas Trevo',
    paragrafo: 'Fundador e Proprietario'
  }

  const trampo3 = {
    imagem: 'https://pbs.twimg.com/profile_images/585937648348454913/Kz8LsnkB_400x400.png',
    titulo: 'AboaVR',
    paragrafo: 'Co-Fundador e Ceo'
  }

  const botaoMais = {
    imagem: require('./img/expand.svg'),
    paragrafo: 'Ver Mais'
  }

  const botaoFB = {
    imagem: require('./img/facebook.png'),
    paragrafo: 'Facebook'
  }

  const titulo1 = {
    titulo: 'Dados Pessoais'
  }

  const titulo2 = {
    titulo: 'Experiencias Profissionais'
  }

  const titulo3 = {
    titulo: 'Minhas Redes Sociais'
  }

  
  return (
    <div className="App">
      <Container titulo={titulo1.titulo}>
        <BigCard imagem={principal.imagem} titulo={principal.titulo} paragrafo={principal.paragrafo} />
        <SmallCard imagem={email.imagem} titulo={email.titulo} paragrafo={email.paragrafo} />
        <SmallCard imagem={endereco.imagem} titulo={endereco.titulo} paragrafo={endereco.paragrafo} />
        <ImageButton imagem={botaoMais.imagem} paragrafo={botaoMais.paragrafo} />
      </Container>
      <Container titulo={titulo2.titulo}>
        <BigCard imagem={trampo1.imagem} titulo={trampo1.titulo} paragrafo={trampo1.paragrafo} />
        <BigCard imagem={trampo2.imagem} titulo={trampo2.titulo} paragrafo={trampo2.paragrafo} />
        <BigCard imagem={trampo3.imagem} titulo={trampo3.titulo} paragrafo={trampo3.paragrafo} />
      </Container>
      <Container titulo={titulo3.titulo}>
        <ImageButton imagem={botaoFB.imagem} paragrafo={botaoFB.paragrafo} />
      </Container>
      </div>
  );
}


export default App;
