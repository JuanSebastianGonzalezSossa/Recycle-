import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import Modal from 'react-modal';
import { useUiStore } from '../../hooks/UseUIStore';


const customStyles = {
    content: {
        background: 'white',
        color: 'rgb(51, 51, 51)',
        display: 'inline',
        height: '150px',
        width: '700px',
        outline: 'none',
        padding: '10px',
        top: '35%',
        left: '30%',
    },
};

Modal.setAppElement('#root');

export const ModalDeleteReciclaje = () => {

    const { isDeleteModalOpen, closeDeleteModal } = useUiStore();


    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Petición Post a la API ");
    }

    const onCloseModal = () => {
        console.log('Cerrando modal');
        closeDeleteModal();
    }

    return (
        <Modal
            isOpen={isDeleteModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            closeTimeoutMS={200}
        >
            <Typography variant='h4' noWrap component='div'> Seguro que desea eliminar este registro ? </Typography>
            <hr />
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container direction='column' justifyContent='center' >
                    <Grid container direction='row' justifyContent='center'>
                        <IconButton
                            size='large'
                            sx={{
                                color: 'white',
                                backgroundColor: 'red',
                                ':hover': { backgroundColor: 'purple', opacity: 0.8 },
                                borderRadius: '10px',
                                margin: '10px',
                                fontSize: '18px',
                            }}
                            onClick={onCloseModal}
                        >
                            Si
                        </IconButton>
                        <IconButton
                            size='large'
                            sx={{
                                color: 'white',
                                backgroundColor: 'purple',
                                ':hover': { backgroundColor: 'purple', opacity: 0.8 },
                                borderRadius: '10px',
                                margin: '10px',
                                fontSize: '18px',
                            }}
                            type="submit"
                            onClick={onCloseModal}
                        >
                            No
                        </IconButton>
                    </Grid>
                </Grid>
            </form>
        </Modal >
    )
}
