import { useState } from 'react';
import CardTarefa from '../../components/CardTarefa/CardTarefa';
import { ApiModel } from '../../Interface/Model';
import CardList from '../Modal/cardTarefas/Card';
import * as S from './styled';

interface conteudo {
    data: ApiModel[];
}

function ListaTarefas({ data }: conteudo) {
    const [openModal, setOpenModal] = useState(false)
    const [idSelected, setIdSelected] = useState<string | null>()
    const filtroNovo = data.filter((item) => item.completed == 0)
    const filterPFazendo = data.filter((item) => item.completed == 1)
    const filterComplete = data.filter((item) => item.completed == 2)

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
                    {filtroNovo.map((tarefas) => (
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
                    {filterPFazendo.map((tarefas) => (
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