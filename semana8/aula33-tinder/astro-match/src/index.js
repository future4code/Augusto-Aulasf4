import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import Router from './containers/Router'
import styled, { createGlobalStyle } from 'styled-components'
import ClearButton from './components/ClearButton'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  body {
    margin: 0;
    background-color: #D0D0D0;
    font-family: Roboto, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
`

const MainContainer = styled.div`
  width: 400px;
  height: 600px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px #0000000F;
`


function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

const App = () => {

const mobile = isMobileDevice()

  return (
    <DndProvider backend={mobile? TouchBackend : HTML5Backend}>
      <Provider store={store}>
        <GlobalStyle />
        
        <MainContainer>
          <Router />
        </MainContainer>
        <ClearButton />
      </Provider>
    </DndProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
