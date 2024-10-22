import { Chip, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { ApiModel } from "../../Interface/Model";
import ButtonContainer from "../button/ButtonCont";
import * as S from './styled';
import { useEffect, useState } from 'react';
import CardList from '../Modal/cardTarefas/Card';

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
                        {currentRows.map((lista) => (
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
                                        label={lista.completed ? 'Concluído' : 'Pendente'}
                                        sx={{ color: "white", backgroundColor: lista.completed ? 'rgba(0, 255, 0, 0.1)' : 'rgba(175, 3, 0, 0.3)', 
                                                border: lista.completed ? ' 2px solid #00FF00' : '2px solid #AF0300' 
                                            }}
                                        variant={lista.completed ? 'outlined' : 'filled'}
                                        size="small"
                                    />
                                </TableCell>

                                <TableCell sx={{ display: "flex" }}>
                                    <ButtonContainer id={lista._id} colorS="primary" variant="contained"
                                        click={() => handleOpenModal(lista._id || "")} 
                                        children="Abrir" 
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
                <TablePagination sx={{ color: "White", display: 'flex', justifyContent: 'start', marginX: 0}}
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