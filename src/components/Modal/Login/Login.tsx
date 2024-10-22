import { colors, Modal, TextField } from '@mui/material'
import * as S from './styled'
import ButtonContainer from '../../button/ButtonCont'
import CloseIcon from '@mui/icons-material/Close';

interface props {
    open: boolean,
    handleClose: () => void,
}

function LoginModal({open, handleClose} : props) {
    return (
        <Modal open={open} style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <S.BodyLogin>
                <CloseIcon fontSize='large' onClick={handleClose} sx={{position: 'absolute', top: '10px', right: '10px'}} />
                <h1 style={{position: 'absolute', top: '30px'}}>LOGIN</h1>
                <S.FormLogin>
                    <TextField type='email' label="E-mail" focused InputProps={{
                        sx: {
                            color: 'white',
                            '& input:-webkit-autofill': {
                                WebkitTextFillColor: 'white', // Cor do texto preenchido automaticamente
                                transition: 'background-color 5000s ease-in-out 0s',
                            },
                        },

                    }}
                    ></TextField>

                    <TextField type='password' label='Senha' focused InputProps={{
                        sx: {
                            color: 'white',
                            '& input:-webkit-autofill': {
                                WebkitTextFillColor: 'white', // Cor do texto preenchido automaticamente
                                transition: 'background-color 5000s ease-in-out 0s',
                            },
                        },
                    }}></TextField>

                    <ButtonContainer variant='contained'>Login</ButtonContainer>


                </S.FormLogin>

                <a>Esqueceu sua senha</a>

                <a style={{ position: 'absolute', bottom: '20px' }}>Não possui cadastro? <strong >Cadastre-se</strong></a>
            </S.BodyLogin>
        </Modal>
    )
}

export default LoginModal