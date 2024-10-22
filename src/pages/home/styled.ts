import styled from "styled-components";

export const HomeBody = styled.div`
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
align-items:center;
background-color: #2F333F;
color: white;
.buttonGroup{
    @media(max-width: 768px){
        display: contents;
    }
    
}
`


export const HomeConteudo = styled.div`
width: 95vw;
height: 80vh;
background-color: #00000078;
margin-top: 5%;
padding: .5vw;
box-shadow: 5px 5px rgba(21, 106, 235, 0.2);
border: solid 1px rgba(21, 106, 235, 0.5);
border-radius: .5rem;
display: flex;
justify-content: space-around;
`
