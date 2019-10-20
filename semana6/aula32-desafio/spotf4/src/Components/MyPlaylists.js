import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const CreatePlaylistContainer = styled.div`
    display: flex;
    flex-direction:column;
    flex-grow:1;
    height:100%;
    background:#fef9f3;
    align-items:center;
    align-self:flex-start;
    color:#187922;
    width:20%;
    border-right:5px #44ceb4 solid;
    overflow-y:scroll;
`

const ImgAdd = styled.img`
    width:20px;
    height:20px;
    box-shadow:0 2px 5px black;
    border-radius:50%;
    margin-right:20px;
    :active{
        position:relative;
        top:2px;
    }
`

const PlaylistDiv = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    justify-content:space-between;
`

const ListPlaylist = styled.h4`
    margin:10px;
    margin-left:20px;
`

export class MyPlaylists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            CurrentPlaylistName: "",
            myPlaylists: [],
        }
    }

    componentDidMount() {
        this.getPlaylists()
    }

    componentDidUpdate(prevProps, prev) {
        if (prevProps.RefreshPlaylists !== this.props.RefreshPlaylists) {
            this.getPlaylists()
        }
    }

    getPlaylists = async () => {
        const res =
            await axios.get('https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists',
                {
                    headers: {
                        auth: '4a8d7ba3173a0beb026be31b82b0f2f4'
                    }
                })
        this.setState({
            myPlaylists: res.data.result.list
        })
    }

    deletePlaylist = async (Id) => {
        if (window.confirm('Certeza que deseja deletar?')) {
            const res =
                await axios.delete(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/deletePlaylist?playlistId=${Id}`,
                    {
                        headers: {
                            auth: '4a8d7ba3173a0beb026be31b82b0f2f4'
                        }
                    })
        }
        this.getPlaylists()
    }

    detailPlaylist = (PlaylistId, PlaylistName) => {
        this.props.SaveToState({
            currentPlaylist: {
                id: PlaylistId,
                name: PlaylistName
            },
            window: 1
        })
    }

    render() {

        const myPlaylists = this.state.myPlaylists.map((Playlist, index) => {
            return <PlaylistDiv key={index}>
                <ListPlaylist
                    onClick={() => this.detailPlaylist(Playlist.id, Playlist.name)}>
                    {Playlist.name}
                </ListPlaylist>
                <ImgAdd
                    onClick={() => this.deletePlaylist(Playlist.id)}
                    src="https://image.flaticon.com/icons/svg/1665/1665765.svg"
                />
            </PlaylistDiv>
        })

        return (
            <CreatePlaylistContainer>
                <p>Playlists:</p>
                {myPlaylists}
            </CreatePlaylistContainer>
        );
    }
}