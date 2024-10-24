import { CircularProgress, Modal, TextField } from "@mui/material";
import * as S from './styled'
import CloseIcon from '@mui/icons-material/Close';
import ButtonContainer from "../../button/ButtonCont";
import { useState } from "react";
import { IUser } from "../../../Interface/UserModel";

interface props {
    open: boolean,
    handleClose: () => void,
}

function CadastroModal({ open, handleClose }: props) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false)

    const handleCadastro = (user: IUser) => {
        setLoading(true)
        fetch('https://apilogin-vtap.onrender.com/createLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                senha: user.senha
            })
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao cadastrar")
            }
            setLoading(false)
            return response.status
        }).catch(error => {
            console.log('Error:', error)
            setLoading(false)
        })

    }

    return (
        <Modal open={open} style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <S.BodyCadastro>
                <CloseIcon fontSize='large' onClick={handleClose} sx={{ position: 'absolute', top: '10px', right: '10px' }} />
                <h1 style={{ position: 'absolute', top: '30px' }}>CADASTRO</h1>
                <S.FormCadastro>

                    <TextField label="Nome" focused
                        onChange={(e) => setNome(e.target.value)}
                        InputProps={{
                            sx: {
                                color: 'white',
                                '& input:-webkit-autofill': {
                                    WebkitTextFillColor: 'white', // Cor do texto preenchido automaticamente
                                    transition: 'background-color 5000s ease-in-out 0s',
                                },
                            },
                        }}
                    />

                    <TextField type='email' label="E-mail" focused
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            sx: {
                                color: 'white',
                                '& input:-webkit-autofill': {
                                    WebkitTextFillColor: 'white',
                                    transition: 'background-color 5000s ease-in-out 0s',
                                },
                            },

                        }}
                    />

                    <TextField type='password' label='Senha' focused
                        onChange={(e) => setSenha(e.target.value)}
                        InputProps={{
                            sx: {
                                color: 'white',
                                '& input:-webkit-autofill': {
                                    WebkitTextFillColor: 'white',
                                    transition: 'background-color 5000s ease-in-out 0s',
                                },
                            },
                        }} />

                    <ButtonContainer click={() => handleCadastro({ name: nome, email: email, senha: senha })}
                        variant='contained'>
                        {loading ? <CircularProgress color="inherit" size={24}/> : 'Cadastrar'}
                    </ButtonContainer>
                </S.FormCadastro>
                <a style={{ position: 'absolute', bottom: '20px' }}>Já possui login? <strong >Entrar</strong></a>
            </S.BodyCadastro>
        </Modal>
    )


}

export default CadastroModal