import styled from 'styled-components'

export const SubscriberWrapper = styled.div`
    display:flex;
    font-family:"Comic Sans MS", cursive, sans-serif;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    width:100%;
    min-height:100vh;
    background:url('https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5d7ebf13cb34e44fada5540c_estrelas_fundo4.png'), linear-gradient(360deg, #3068d0, #692b90 50%, #120f33 80%, #050505);
`;

export const HeaderContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    height:80px;
    background: white;
    margin-top: 3%;
    border:2px solid black;
`;

export const BodyContent = styled.div`
    flex:1;
    width:100%;
    display:flex;
`;

export const CandidateContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:50%;
    height:80vh;
    position: relative;
`

export const ButtonContent = styled.div`
    display:flex;
    justify-content:space-evenly;
    width:100%;
    margin:10%;
`

export const SettingContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    width:50%;
    height:80vh;
`;

export const MenuTitle = styled.h2`
    display:flex;
    flex-direction:column;
    background:white;
    color:#7b1fa2;
    width:100%;
    text-align:center;
`;

export const MenuItems = styled.p`
    display:flex;
    flex-direction:column;
    color:white;
    width:100%;
    font-size:130%;
    text-align:center;
    padding:5px;
    margin:0;
    cursor:pointer;
    border-bottom:1px solid white;
`;

export const ButtonMenu = styled.button`
    color:#7b1fa2;
    font-weight:bold;
    padding:10px;
    font-size:25px;
    background: white;
    border-radius:10px;
    border:3px solid black;
    cursor:pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.5);
    margin-top:5%;
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
    flex-direction:column;
    align-items:center;
    width:95%;
    min-height:90vh;
    background:rgba(255,255,255,0.8);
    border-radius:30px;
    border:5px solid black;
`