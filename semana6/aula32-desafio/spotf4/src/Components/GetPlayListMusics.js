import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { red } from 'ansi-colors';

const GetPlaylistMusicsContainer = styled.div`
    background: linear-gradient(#0050a5, #35bae9);
    color:#fef9f3;
    width:80%;
    flex-grow:1;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const FlexDiv = styled.div`
  display: flex;
  width:100%;
  flex-wrap:wrap;
`

const DivMusic = styled.div`
    border:5px #187922 dashed;
    display:flex;
    flex-direction:column;
    align-items:center;
    align-self:flex-start;
    margin:20px;
`

const InputForm = styled.input`
    background:transparent;
    margin:0 10px;
    color:#fef9f3;
    border:none;
    border-bottom:#fef9f3 solid 2px;
    ::placeholder{
        color:#fef9f3
    }
    :focus{
        outline:none;
    }
`

const ImgAdd = styled.img`
    width:20px;
    box-shadow:0 2px 5px black;
    border-radius:50%;
    margin-top: 20px;
    :active{
        position:relative;
        top:2px;
    }
`

export class GetPlaylistMusics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            musicUrl: "",
            musicName: "",
            musicAuthor: "",
            playlistMusics: [],
        }
    }

    componentDidMount = () => {
        this.getPlaylistMusics()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.PlaylistId !== this.props.PlaylistId) {
            this.getPlaylistMusics()
        }
    }

    changeInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    addMusicToPlaylist = async () => {
        const data = {
            "playlistId": this.props.PlaylistId,
            "music": {
                "name": this.state.musicName,
                "artist": this.state.musicAuthor,
                "url": this.state.musicUrl
            }
        }
        const res =
            await axios.put(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/addMusicToPlaylist`,
                data,
                {
                    headers: {
                        auth: '4a8d7ba3173a0beb026be31b82b0f2f4'
                    }
                })
        this.getPlaylistMusics()
        window.alert("Musica Adicionada com Sucesso!")
    }

    getPlaylistMusics = async () => {

        const res =
            await axios.get(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/getPlaylistMusics/${this.props.PlaylistId}`,
                {
                    headers: {
                        auth: '4a8d7ba3173a0beb026be31b82b0f2f4'
                    }
                })
        this.setState({ playlistMusics: res.data.result.musics })
    }

    render() {
        const listMusics = this.state.playlistMusics.map((Music, index) => {
            return <DivMusic key={index}><p>Nome: {Music.name}</p><p>Artista: {Music.artist}</p><audio controls src={Music.url}></audio></DivMusic>
        })
        return (
            <GetPlaylistMusicsContainer>
                <h1>{this.props.PlaylistName}</h1>
                <div>
                    <label htmlFor="musicName">Nome</label>
                    <InputForm
                        value={this.state.musicName}
                        onChange={this.changeInputValue}
                        id="musicName" />
                </div>
                <div>
                    <label htmlFor="musicAuthor">Artista</label>
                    <InputForm
                        value={this.state.musicAuthor}
                        onChange={this.changeInputValue}
                        id="musicAuthor" />
                </div>
                <div>
                    <label htmlFor="musicUrl">Url</label>
                    <InputForm
                        value={this.state.musicUrl}
                        onChange={this.changeInputValue}
                        id="musicUrl" />
                </div>
                <ImgAdd onClick={this.addMusicToPlaylist} src="https://image.flaticon.com/icons/svg/1665/1665731.svg" />
                <FlexDiv>
                    {listMusics}
                </FlexDiv>
            </GetPlaylistMusicsContainer>
        );
    }
}



