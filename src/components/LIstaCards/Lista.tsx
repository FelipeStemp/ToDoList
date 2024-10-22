import * as S from './styled';
import CardTarefa from '../../components/CardTarefa/CardTarefa';
import { ApiModel } from '../../Interface/Model';
import { useState } from 'react';
import CardList from '../Modal/cardTarefas/Card';

interface conteudo {
    data: ApiModel[];
}

function ListaTarefas({ data }: conteudo) {
    const [openModal, setOpenModal] = useState(false)
    const [idSelected, setIdSelected] = useState<string | null>()
    const filterPendente = data.filter((item) => item.completed == false)
    const filterComplete = data.filter((item) => item.completed == true)

    const handleOpenModal = (id: string) => {
        setIdSelected(id)
        setOpenModal(true)
    };
    const handleCloseModal = () => {
        setIdSelected(null)
        setOpenModal(false);
    };

    return (
        <S.ListaBody>
            <S.ConteudosBody>
                <S.Titulo>Pendente</S.Titulo>
                <S.CardsDiv>
                    {filterPendente.map((tarefas) => (
                        <CardTarefa
                            key={tarefas._id}
                            name={tarefas.name}
                            _id={tarefas._id}
                            description={tarefas.description}
                            completed={tarefas.completed}
                            click={() => handleOpenModal(tarefas._id || "")}
                        />
                    ))}
                </S.CardsDiv>
            </S.ConteudosBody>

            <S.Separacao />

            <S.ConteudosBody>
                <S.Titulo>Fazendo</S.Titulo>
                <S.CardsDiv>
                    {filterComplete.map((tarefas) => (
                        <CardTarefa
                            key={tarefas._id}
                            name={tarefas.name}
                            _id={tarefas._id}
                            description={tarefas.description}
                            completed={tarefas.completed}
                            click={() => handleOpenModal(tarefas._id || "")}
                        />
                    ))}
                </S.CardsDiv>
            </S.ConteudosBody>

            <S.Separacao />

            <S.ConteudosBody>
                <S.Titulo>Concluído</S.Titulo>
                <S.CardsDiv>
                    {filterComplete.map((tarefas) => (
                        <CardTarefa
                            key={tarefas._id}
                            name={tarefas.name}
                            _id={tarefas._id}
                            description={tarefas.description}
                            completed={tarefas.completed}
                            click={() => handleOpenModal(tarefas._id || "")}
                        />
                    ))}
                </S.CardsDiv>
            </S.ConteudosBody>

            {idSelected &&
                <CardList
                    id={idSelected}
                    ativo={false}
                    open={openModal}
                    handleClose={handleCloseModal}          
                />
            }
        </S.ListaBody>
    )
}

export default ListaTarefas