import React from 'react'
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material';
import { useUiStore } from '../../hooks/UseUIStore';
import { ModalEditarReciclaje } from '../views/ModalEditarReciclaje';
import { ModalDeleteReciclaje } from '../views/ModalDeleteReciclaje';

export const TableEditRecycle = ({data}) => {

    const { openEditModal, openDeleteModal, isDeleteModalOpen } = useUiStore();

    const onOpenEditModal = () => {
        console.log('Abriendo edit modal');
        openEditModal();
    }

    const onOpenDeleteModal = () => {
        console.log('Abriendo Delete modal');
        openDeleteModal();
        console.log(isDeleteModalOpen)
    }



    return (
        <TableContainer component={Paper} sx={{ margin: 20 }} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Papel (kg)</TableCell>
                        <TableCell align="center">Cartón (kg)</TableCell>
                        <TableCell align="center">Plástico (kg)</TableCell>
                        <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!data ? null :data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.pesoPapel}</TableCell>
                            <TableCell align="center">{row.pesoCarton}</TableCell>
                            <TableCell align="center">{row.pesoPlastico}</TableCell>
                            <TableCell align="center">

                            <ModalEditarReciclaje id={row.id} />
                            <ModalDeleteReciclaje id={row.id} />
                                <IconButton
                                    onClick={onOpenEditModal}
                                >
                                    <Edit></Edit>
                                </IconButton>
                                <IconButton
                                    onClick={onOpenDeleteModal}
                                >
                                    <Delete></Delete>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
        </TableContainer>
    )
}
