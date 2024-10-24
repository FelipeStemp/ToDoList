import { CardActionArea, Chip, } from '@mui/material';
import { ApiModel } from '../../Interface/Model';
import * as S from './styled';

interface props extends ApiModel {
    click: () => void;
}

function CardTarefa({ name, completed, click }: props) {
    let label;
    let backgroundColor;
    let borderColor;

    switch (completed) {
        case 0:
            label = 'Pendente';
            backgroundColor = 'rgba(175, 3, 0, 0.5)';
            borderColor = '#AF0300';
            break;
        case 1:
            label = 'Fazendo';
            backgroundColor = 'rgba(255, 255, 0, 0.5)';
            borderColor = 'yellow';
            break;
        case 2:
            label = 'Concluído';
            backgroundColor = 'rgba(0, 255, 0, 0.5)';
            borderColor = '#00FF00';
            break;
        default:
            label = 'Indefinido';
            backgroundColor = 'gray';
            borderColor = 'gray';
            break;
    }

    return (

        <CardActionArea sx={{ width: 'fit-content', height: 'fit-content' }} onClick={click} >
            <S.BodyCard>
                <Chip
                    label={label}
                    className="Chip"
                    sx={{
                        color: "white",
                        backgroundColor: backgroundColor,
                        border: `2px solid ${borderColor}`,
                    }}
                    size="small"
                />

                <S.HeaderCard>
                    <S.Titulo>{name}</S.Titulo>
                </S.HeaderCard>

            </S.BodyCard>


        </CardActionArea>

    )
}

export default CardTarefa