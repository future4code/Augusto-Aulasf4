import styled from 'styled-components'

export const HomeContainer = styled.div`
    font-family:"Comic Sans MS", cursive, sans-serif;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    min-height:100vh;
    background:url('https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5d7ebf13cb34e44fada5540c_estrelas_fundo4.png'), linear-gradient(360deg, #3068d0, #692b90 50%, #120f33 80%, #050505);
`

export const ButtonSpace = styled.button`
    color:white;
    font-weight:bold;
    padding:10px;
    font-size:25px;
    background: linear-gradient(#385FC6,#662A8D);
    border-radius:10px;
    border:3px solid black;
    cursor:pointer;

    :focus{
        outline:none;
    }

    :active{
        position:relative;
        top:2px;
    }
`

export const ContentContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:60%;
    min-height:70vh;
    background:rgba(255,255,255,0.8);
    border-radius:50px;
    border:5px solid black;
`

export const ImgLogo = styled.img`
    width:30%;
`

export const TextArea = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    width:30%;
    min-height:30vh;
`

export const ButtonArea = styled.div`
    display:flex;
    justify-content:space-between;
    width:90%;
`

