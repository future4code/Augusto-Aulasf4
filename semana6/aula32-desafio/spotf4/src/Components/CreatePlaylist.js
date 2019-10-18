import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const CreatePlaylistContainer = styled.div`
    margin:0 5%;
    display: flex;
    align-items:center;
`

const InputForm = styled.input`
    background:transparent;
    margin:0 10px;
    color:#187922;
    border:none;
    border-bottom:#187922 solid 2px;
    :focus{
        outline:none;
    }
`

const ImgAdd = styled.img`
    width:20px;
    box-shadow:0 2px 5px black;
    border-radius:50%;
    :active{
        position:relative;
        top:2px;
    }
`

export class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CurrentPlaylistName: "",
        }
    }

    createPlaylist = async () => {
        const data = {
            'name': this.state.CurrentPlaylistName
        }
        try {
            const res =
                await axios.post('https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist',
                    data,
                    {
                        headers: {
                            auth: '4a8d7ba3173a0beb026be31b82b0f2f4'
                        }
                    })
            window.alert('Criada com sucesso!')
            this.props.SaveToState({ refreshPlaylists: Date.now() })
        } catch (error) {
            window.alert('Algum erro ocorreu, verifique se já não existe uma playlist com este nome.')
        }
    }

    changeInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {

        return (
            <CreatePlaylistContainer>
                <label htmlFor="CurrentPlaylistName">Criar Playlist: </label>
                <InputForm
                    value={this.state.CurrentPlaylistName}
                    onChange={this.changeInputValue}
                    placeholder="Nome da Playlist..."
                    id="CurrentPlaylistName"
                />
                <ImgAdd onClick={this.createPlaylist} src="https://image.flaticon.com/icons/svg/1665/1665731.svg" alt="Adicionar Musica" />
            </CreatePlaylistContainer>
        );
    }
}
