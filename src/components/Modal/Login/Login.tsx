import { CircularProgress, colors, Modal, TextField } from '@mui/material'
import * as S from './styled'
import ButtonContainer from '../../button/ButtonCont'
import CloseIcon from '@mui/icons-material/Close';
import { IUser } from '../../../Interface/UserModel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface props {
    open: boolean,
    handleClose: () => void,
}

function LoginModal({ open, handleClose }: props) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleLogin = (user: IUser) => {
        setLoading(true)
        fetch('https://apilogin-vtap.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: user.email,
                senha: user.senha
            })
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao cadastrar")
            }
            setLoading(false)
            navigate('/Tarefas')
            return response.status
        }).catch(error => {
            console.log('Error:', error)
            setLoading(false)
        })

    }

    return (
        <Modal open={open} style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <S.BodyLogin>
                <CloseIcon fontSize='large' onClick={handleClose} sx={{ position: 'absolute', top: '10px', right: '10px' }} />
                <h1 style={{ position: 'absolute', top: '30px' }}>LOGIN</h1>
                <CloseIcon fontSize='large' onClick={handleClose} sx={{ position: 'absolute', top: '10px', right: '10px' }} />
                <h1 style={{ position: 'absolute', top: '30px' }}>LOGIN</h1>
                <S.FormLogin>
                    <TextField type='email' label="E-mail" focused
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            sx: {
                                color: 'white',
                                '& input:-webkit-autofill': {
                                    WebkitTextFillColor: 'white', // Cor do texto preenchido automaticamente
                                    transition: 'background-color 5000s ease-in-out 0s',
                                },
                            },

                        }}
                    ></TextField>

                    <TextField type='password' label='Senha' focused
                        onChange={(e) => setSenha(e.target.value)}
                        InputProps={{
                            sx: {
                                color: 'white',
                                '& input:-webkit-autofill': {
                                    WebkitTextFillColor: 'white', // Cor do texto preenchido automaticamente
                                    transition: 'background-color 5000s ease-in-out 0s',
                                },
                            },
                        }}></TextField>

                    <ButtonContainer click={() => handleLogin({email:email, senha:senha})} variant='contained'>{loading ? <CircularProgress color="inherit" size={24}/> : 'Login'}</ButtonContainer>


                </S.FormLogin>

                <a>Esqueceu sua senha</a>

                <a style={{ position: 'absolute', bottom: '20px' }}>Não possui cadastro? <strong >Cadastre-se</strong></a>
            </S.BodyLogin>
        </Modal>
    )
}

export default LoginModal