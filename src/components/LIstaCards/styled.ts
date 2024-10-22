import styled from "styled-components";

export const ListaBody = styled.div`
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

export const ConteudosBody = styled.div`
overflow: hidden;
width: 33%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const CardsDiv = styled.section`
padding: 10px;
display: flex;
flex-direction: column;
overflow: overlay;
gap: 10px;
height: 100%;
scrollbar-width: none;
`

export const Separacao = styled.div`
height: 100%;
width: 1px;
background-color: rgba(21, 106, 235, 0.5);
`

export const Titulo = styled.div`
height: fit-content;
color: white;
text-align: center;
margin: .5rem;
`