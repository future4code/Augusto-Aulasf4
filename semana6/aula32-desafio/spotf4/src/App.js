import React from 'react';
import styled from 'styled-components'
import { CreatePlaylist } from './Components/CreatePlaylist';
import { MyPlaylists } from './Components/MyPlaylists';
import { GetPlaylistMusics } from './Components/GetPlayListMusics';

const AppContainer = styled.div`
  display: flex;
  height:100vh;
  flex-direction:column;
  align-items:center;
  background: #fef9f3;
`

const FlexDiv = styled.div`
  display: flex;
  flex-grow:1;
  width:100%;
  background: linear-gradient(#0050a5, #35bae9);
`

const FormContainer = styled.div`
  display: flex;
  align-items:center;
  background:#fef9f3;
  color:#187922;
  width:80%;  
  margin-left:20%;
  padding:30px 0;
  border-bottom:5px solid #44ceb4;
`

const NonePlaylist = styled.div`
    background: linear-gradient(#0050a5, #35bae9);
    color:#187922;
    width:80%;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    align-items:center;
`


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlaylist: "",
      window: 0,
      refreshPlaylists: "",
    }
  }

  saveToState = (item) => {
    this.setState(item)
  }

  render() {
    let Render
    if (this.state.window === 1) {
      Render = <GetPlaylistMusics
        PlaylistName={this.state.currentPlaylist.name}
        PlaylistId={this.state.currentPlaylist.id}
      />
    } else {
      Render = <NonePlaylist />
    }
    return (
      <AppContainer>
        <FormContainer>
          <CreatePlaylist
            SaveToState={this.saveToState}
          />
        </FormContainer>
        <FlexDiv>
          <MyPlaylists
            RefreshPlaylists={this.state.refreshPlaylists}
            SaveToState={this.saveToState}
          />
          {Render}
        </FlexDiv>
      </AppContainer>
    );
  }
}
export default App;