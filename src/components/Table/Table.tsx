import { Chip, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useState } from 'react';
import { ApiModel } from "../../Interface/Model";
import ButtonContainer from "../button/ButtonCont";
import CardList from '../Modal/cardTarefas/Card';
import * as S from './styled';

interface dataProps {
    data: ApiModel[];
}

function TableList({ data }: dataProps) {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [idSelected, setIdSelected] = useState<string | null>();

    const handleOpenModal = (id: string) => {
        setIdSelected(id)
        setIsModalOpen(true)
    };
    const handleCloseModal = () => {
        setIdSelected(null);
        setIsModalOpen(false);
    }
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const currentRows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    return (
        <S.DivTable>
            <TableContainer sx={{ maxWidth: "90vw", borderRadius: "3px" }}>
                <Table>
                    <TableHead >
                        <TableRow
                            sx={{
                                backgroundColor: "#2F333F",
                            }}>
                            <TableCell sx={{ color: "white", textAlign: "left", height: '31px' }}>Título</TableCell>
                            <TableCell sx={{ color: "white", textAlign: "left", height: '31px' }}>Descrição</TableCell>
                            <TableCell sx={{ color: "white", textAlign: "center", height: '31px' }}>Completo</TableCell>
                            <TableCell sx={{ display: "flex", justifyContent: "center", height: '31px' }}></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {currentRows.map((lista) => {
                            let label;
                            let backgroundColor;
                            let borderColor;

                            switch (lista.completed) {
                                case 0:
                                    label = 'Pendente';
                                    backgroundColor = 'rgba(175, 3, 0, 0.3)';
                                    borderColor = '#AF0300';
                                    break;
                                case 1:
                                    label = 'Fazendo';
                                    backgroundColor = 'rgba(255, 255, 0, 0.2)';
                                    borderColor = 'yellow';
                                    break;
                                case 2:
                                    label = 'Concluído';
                                    backgroundColor = 'rgba(0, 255, 0, 0.1)';
                                    borderColor = '#00FF00';
                                    break;
                                default:
                                    label = 'Indefinido';
                                    backgroundColor = 'gray';
                                    borderColor = 'gray';
                                    break;
                            }

                            return (
                                <TableRow
                                    key={lista._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell
                                        sx={{
                                            color: "white",
                                            width: "15vw",
                                            maxWidth: "15vw",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            textAlign: "left",
                                        }}
                                    >
                                        {lista.name}
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            color: "white",
                                            width: "20vw",
                                            maxWidth: "20vw",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            textAlign: "left",
                                        }}
                                    >
                                        {lista.description}
                                    </TableCell>

                                    <TableCell sx={{ color: "white", textAlign: "center" }}>
                                        <Chip
                                            label={label}
                                            sx={{
                                                color: "white",
                                                backgroundColor: backgroundColor,
                                                border: `2px solid ${borderColor}`,
                                            }}
                                            variant={lista.completed ? 'outlined' : 'filled'}
                                            size="small"
                                        />
                                    </TableCell>

                                    <TableCell sx={{ display: "flex" }}>
                                        <ButtonContainer
                                            id={lista._id}
                                            colorS="primary"
                                            variant="contained"
                                            click={() => handleOpenModal(lista._id || "")}
                                            children="Abrir"
                                        />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <TablePagination sx={{ color: "White", display: 'flex', justifyContent: 'start', marginX: 0 }}
                    rowsPerPageOptions={[3, 5, 7]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>

            {idSelected &&
                <CardList
                    id={idSelected}
                    ativo={false}
                    open={isModalOpen}
                    handleClose={handleCloseModal}
                />
            }
        </S.DivTable>
    )
}

export default TableList