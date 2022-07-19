import { Grid, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from '../../hooks';
import Modal from 'react-modal';
import './styleModal.css'
import { Cancel, Save } from '@mui/icons-material';
import { useUiStore } from '../../hooks/UseUIStore';
import { PeticionPost } from '../../servicios/PeticionPost';


Modal.setAppElement('#root');

export const ModalEditarReciclaje = ({id}) => {

    const { isEditModalOpen, closeEditModal } = useUiStore();

    const { papel, carton, plastico, onInputChange } = useForm({
        papel: '',
        carton: '',
        plastico: '',
    });

    const onSubmit = ( event ) => {
        event.preventDefault();
        PeticionPost(`http://localhost:80/reciclaje/edit?id=${id}`, {pesoPlastico: plastico, pesoPapel: papel, pesoCarton: carton} );
        console.log("Petición Post a la API ", id);
      }

      const onCloseModal = () => {
        console.log('Cerrando modal');
        closeEditModal();
    }

  return (
    <Modal
    isOpen={isEditModalOpen}
    onRequestClose={onCloseModal}
    // style={customStyles}
    className="modal"
    overlayClassName="modal-fondo"
    closeTimeoutMS={200}
>
    <Typography variant='h4' noWrap component='div'> Editar registro </Typography>
    <hr />
    <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
        <Grid container direction='column' justifyContent='center'>
            <Grid >
                <Grid style={{ width: '100%', padding: '10px' }}>
                    <TextField
                        label="Papel"
                        type="text"
                        placeholder='30'
                        fullWidth
                        name="papel"
                        value={papel}
                        onChange={onInputChange}
                    />
                </Grid>
            </Grid>
            <Grid >
                <Grid style={{ width: '100%', padding: '10px' }}>
                    <TextField
                        label="Cartón"
                        type="text"
                        placeholder='20'
                        fullWidth
                        name="carton"
                        value={carton}
                        onChange={onInputChange}
                    />
                </Grid>
            </Grid>
            <Grid >
                <Grid style={{ width: '100%', padding: '10px' }}>
                    <TextField
                        label="Plástico"
                        type="number"
                        placeholder='30'
                        fullWidth
                        name="plastico"
                        value={plastico}
                        onChange={onInputChange}
                    />
                </Grid>
            </Grid>
            <Grid >
                <Grid container direction='row' justifyContent='center'>
                    <IconButton
                        size='large'
                        sx={{
                            color: 'white',
                            backgroundColor: 'red',
                            ':hover': { backgroundColor: 'red', opacity: 0.8 },
                            borderRadius: '10px',
                            margin: '10px',
                            fontSize: '18px',
                        }}
                        onClick={onCloseModal}
                    >
                        Cancelar &nbsp;
                        <Cancel />
                    </IconButton>
                    <IconButton
                        size='large'
                        sx={{
                            color: 'white',
                            backgroundColor: 'green',
                            ':hover': { backgroundColor: 'green', opacity: 0.8 },
                            borderRadius: '10px',
                            margin: '10px',
                            fontSize: '18px',
                        }}
                        type="submit"
                        onClick={onCloseModal}
                    >
                        Editar &nbsp;
                        <Save />
                    </IconButton>
                </Grid>
            </Grid>

        </Grid>
    </form>
</Modal>
  )
}
