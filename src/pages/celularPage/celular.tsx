import { useState } from 'react';
import CardTarefa from '../../components/CardTarefa/CardTarefa';
import { ApiModel } from '../../Interface/Model';
import * as S from './styled'
import Filtros from '../../components/Filtrar/filtro';
import CardList from '../../components/Modal/cardTarefas/Card';



interface conteudo {
    data: ApiModel[];
}

function CelPage({ data }: conteudo) {
    const [openModal, setOpenModal] = useState(false)
    const [idSelected, setIdSelected] = useState<string | null>()
    const handleOpenModal = (id: string) => {
        setIdSelected(id)
        setOpenModal(true)
    };
    const handleCloseModal = () => {
        setIdSelected(null)
        setOpenModal(false);
    };

    return (
        <S.BodyCel>
            <Filtros/>
            
            <S.Cards>

                {data.map((tarefas) => (
                    <CardTarefa
                        key={tarefas._id}
                        name={tarefas.name}
                        _id={tarefas._id}
                        description={tarefas.description}
                        completed={tarefas.completed}
                        click={() => handleOpenModal(tarefas._id || "")}
                    />
                ))}
            </S.Cards>

            {idSelected &&
                <CardList
                    id={idSelected}
                    ativo={false}
                    open={openModal}
                    handleClose={handleCloseModal}          
                />
            }
        </S.BodyCel>
    )
}

export default CelPage