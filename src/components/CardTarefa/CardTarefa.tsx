import { CardActionArea, Chip, } from '@mui/material'
import * as S from './styled'
import { ApiModel } from '../../Interface/Model'
import { useState } from 'react';
import CardList from '../Modal/cardTarefas/Card';

interface props extends ApiModel{
    click: () => void;
}

function CardTarefa({ name, description, _id, completed, click }: props) {
    return (

        <CardActionArea sx={{width: 'fit-content', height: 'fit-content'}} onClick={click} >
            <S.BodyCard>
                <Chip
                    label={completed ? 'Concluído' : 'Pendente'}
                    className="Chip"
                    sx={{
                        color: "white", backgroundColor: completed ? 'rgba(0, 255, 0, 0.2)' : 'rgba(175, 3, 0, 0.5)',                        
                    }}
                    variant={completed ? 'outlined' : 'filled'}
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