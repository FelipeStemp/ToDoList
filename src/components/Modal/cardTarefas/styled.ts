import styled from "styled-components";

export const DivCard = styled.form`
color:white;
display: flex;
width: 40vw;
padding: 2vw;
align-items: left;
flex-direction: column;
border-radius: 10px;
border: solid 1px #156AEB;
box-shadow: 2px 2px 2px #156AEB;
backdrop-filter: blur(40px);  
justify-content: flex-end;

@media (max-width: 720px) {
  width: 90vw;
}
`

export const DivBtn = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
margin: 10px 0px;
gap: 5vw;
@media (max-width: 720px) {
  width: 100%;
  gap: 10%;
}
`

export const HeaderDiv = styled.div`
display: flex;
width: 100%;
justify-content: center;
margin-bottom: 80px;
`