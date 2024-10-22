import { Modal, TextField } from "@mui/material";
import * as S from './styled'
import CloseIcon from '@mui/icons-material/Close';
import ButtonContainer from "../../button/ButtonCont";

interface props {
    open: boolean,
    handleClose: () => void,
}

function CadastroModal({ open, handleClose }: props) {
    return (
        <Modal open={open} style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <S.BodyCadastro>
                <CloseIcon fontSize='large' onClick={handleClose} sx={{ position: 'absolute', top: '10px', right: '10px' }} />
                <h1 style={{position: 'absolute', top: '30px'}}>CADASTRO</h1>
                <S.FormCadastro>

                    <TextField label="Nome" focused InputProps={{
                        sx: {
                            color: 'white',
                            '& input:-webkit-autofill': {
                                WebkitTextFillColor: 'white', // Cor do texto preenchido automaticamente
                                transition: 'background-color 5000s ease-in-out 0s',
                            },
                        },

                    }}
                    ></TextField>

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

                    <ButtonContainer variant='contained'>Cadastrar</ButtonContainer>
                </S.FormCadastro>
                <a style={{ position: 'absolute', bottom: '20px' }}>Já possui login? <strong >Entrar</strong></a>
            </S.BodyCadastro>
        </Modal>
    )
}

export default CadastroModal