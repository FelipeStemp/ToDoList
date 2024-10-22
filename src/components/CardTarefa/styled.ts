import styled from "styled-components";

export const BodyCard = styled.div`
width: 15vw;
padding: 1rem;
height: 5vw;
overflow: hidden;
display: block;
border-radius: .3rem;
border: solid 1px rgba(21, 106, 235, 0.5);
color: white;
background-color: rgba(21, 106, 235, 0.1);
backdrop-filter: blur(20px);  
font-size: smaller;
.Chip {
  position: absolute;
  left: 5px;
  top: 5px;
  border: none;
  border-radius: 0.3rem;
  padding: 0;
  font-size: 1vw;
  @media(max-width: 768px){
    font-size: 15px;
  }
}
    
@media(max-width: 768px){
    width: 70vw;
    height: 20vw;
    font-size: 200px;
}
`

export const HeaderCard = styled.div`
justify-content: center;
height: 100%;
display: flex;
align-items: center;
`


export const Titulo = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.5vw;
    @media(max-width: 768px){
    font-size: 15px;
  }
`;