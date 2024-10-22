import { useState } from "react";
import LoginModal from "../../components/Modal/Login/Login";
import * as S from './styled'
import Header from "../../components/HeaderDiv/header";
import ButtonContainer from "../../components/button/ButtonCont";
import { ButtonGroup } from "@mui/material";
import CadastroModal from "../../components/Modal/Cadastro/Cadastro";

function InicioPage() {
    const [openModalLogin, setOpenModalLogin] = useState(false)
    const [openModalCadastro, setOpenModalCadastro] = useState(false)

    const handleOpenLogin = () => { setOpenModalLogin(true) }
    const handleCloseLogin = () => { setOpenModalLogin(false) }

    const handleOpenCadastro = () => { setOpenModalCadastro(true)}
    const handleCloseCadastro = () => { setOpenModalCadastro(false)}

    return (
        <S.BodyLogin>
            <Header justify="center">
                <ButtonGroup sx={{ width: '200px', position: 'absolute', right:'10px' }}>
                    <ButtonContainer click={() => handleOpenLogin()} variant="contained">Login</ButtonContainer>
                    <ButtonContainer click={() => handleOpenCadastro()} variant="outlined">Cadastro</ButtonContainer>
                </ButtonGroup>
            </Header>
            <LoginModal open={openModalLogin} handleClose={handleCloseLogin}></LoginModal>
            <CadastroModal open={openModalCadastro} handleClose={handleCloseCadastro}></CadastroModal>
        </S.BodyLogin>
    )
}

export default InicioPage