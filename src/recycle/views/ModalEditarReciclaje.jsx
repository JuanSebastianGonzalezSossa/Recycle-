import { Grid, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from '../../hooks';
import Modal from 'react-modal';
import './styleModal.css'
import { Cancel, Save } from '@mui/icons-material';
import { useUiStore } from '../../hooks/UseUIStore';


Modal.setAppElement('#root');

export const ModalEditarReciclaje = () => {

    const { isEditModalOpen, closeEditModal } = useUiStore();

    const { grado, dirGrado, cantEstudiantes, onInputChange } = useForm({
        grupo: '',
        dirGrupo: '',
        cantEstudiantes: '',
    });

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log("Petición Post a la API ", grado, dirGrado, cantEstudiantes);
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
    <Typography variant='h4' noWrap component='div'> Registrar salón </Typography>
    <hr />
    <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
        <Grid container direction='column' justifyContent='center'>
            <Grid >
                <Grid style={{ width: '100%', padding: '10px' }}>
                    <TextField
                        label="Grado"
                        type="text"
                        placeholder='10-B'
                        fullWidth
                        name="grado"
                        value={grado}
                        onChange={onInputChange}
                    />
                </Grid>
            </Grid>
            <Grid >
                <Grid style={{ width: '100%', padding: '10px' }}>
                    <TextField
                        label="Director de grado"
                        type="text"
                        placeholder='Juan Fernando Restrepo'
                        fullWidth
                        name="dirGrado"
                        value={dirGrado}
                        onChange={onInputChange}
                    />
                </Grid>
            </Grid>
            <Grid >
                <Grid style={{ width: '100%', padding: '10px' }}>
                    <TextField
                        label="Cantidad de estudiantes"
                        type="number"
                        placeholder='30'
                        fullWidth
                        name="cantEstudiantes"
                        value={cantEstudiantes}
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
                            backgroundColor: 'purple',
                            ':hover': { backgroundColor: 'purple', opacity: 0.8 },
                            borderRadius: '50px',
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
                            backgroundColor: 'purple',
                            ':hover': { backgroundColor: 'purple', opacity: 0.8 },
                            borderRadius: '50px',
                            margin: '10px',
                            fontSize: '18px',
                        }}
                        type="submit"
                        onClick={onCloseModal}
                    >
                        Guardar &nbsp;
                        <Save />
                    </IconButton>
                </Grid>
            </Grid>

        </Grid>
    </form>
</Modal>
  )
}
