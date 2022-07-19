import React from 'react'
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material';
import { useUiStore } from '../../hooks/UseUIStore';

export const TableEditRecycle = () => {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

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
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{row.calories}</TableCell>
                            <TableCell align="center">{row.fat}</TableCell>
                            <TableCell align="center">{row.carbs}</TableCell>
                            <TableCell align="center">
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
