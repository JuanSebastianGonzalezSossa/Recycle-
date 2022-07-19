import { Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import Modal from 'react-modal';
import { useUiStore } from '../../hooks/UseUIStore';
import { PeticionDelete } from '../../servicios/PeticionDelete';


const customStyles = {
    content: {
        background: 'white',
        color: 'rgb(51, 51, 51)',
        display: 'inline',
        height: '150px',
        width: '400px',
        outline: 'none',
        padding: '10px',
        top: '40%',
        left: '40%',
    },
};

Modal.setAppElement('#root');

export const ModalDeleteReciclaje = ({id}) => {

    const { isDeleteModalOpen, closeDeleteModal } = useUiStore();


    const onSubmit = ( event ) => {
        event.preventDefault();
        PeticionDelete(`http://localhost:80/reciclaje/delete?id=${id}`);
        console.log("Petición Post a la API ", id);
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
            <Typography variant='h6' noWrap component='div'> Seguro que desea eliminar este registro ? </Typography>
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
                            type="submit"
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
