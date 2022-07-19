import { Save } from '@mui/icons-material'
import { Grid, IconButton, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useForm } from '../../hooks'
import { NavBar } from '../components'
import SettingsIcon from '@mui/icons-material/Settings';
import { PeticionPost } from '../../servicios/PeticionPost';

export const RegistrarReciclaje = () => {

  let { id, nombreDirector, numEstudiantes} = useParams();
  

  const { papel, carton, plastico, onInputChange } = useForm({
    papel: '',
    carton: '',
    plastico: '',
  });


  const onSubmit = (event) => {
    event.preventDefault();
    PeticionPost(`http://localhost:80/reciclaje/add`, {pesoPlastico: plastico, pesoPapel: papel, pesoCarton: carton, grado: id} );
    console.log(papel, carton, plastico);
  }

  return (
    <Grid container alignItems='center' className='animate__animated animate__fadeIn animate__faster'>

      <NavBar />

      <Grid container direction='row' justifyContent='space-evenly' style={{ marginTop: '200px' }}>
        <Typography variant='h4' noWrap component='div'> {id} </Typography>
        <Typography variant='h6' noWrap component='div'> {nombreDirector} </Typography>
        <Typography variant='h6' noWrap component='div'> {numEstudiantes} </Typography>
      </Grid>

      <form onSubmit={onSubmit}>
        <Grid container direction='column' className="Formulario" alignItems='center' style={{ margin: '160px', maxHeight: '620px', maxWidth: '500px', borderRadius: '20px' }} >
          <Grid container direction='row' justifyContent='space-evenly' style={{ marginTop: '30px' }}>
            <Typography variant='h4' noWrap component='div' > Registrar reciclaje </Typography>
            <Link component={RouterLink} style={{ textDecoration: 'none' }} variant='h6' color='inherit' to={`/registrarReciclaje/Configuracion/${id}/${nombreDirector}/${numEstudiantes}`}>
              <IconButton>
                <SettingsIcon/>
              </IconButton>

            </Link>
          </Grid>
          <hr />

          <Grid style={{ width: '100%', padding: '20px' }}>
            <TextField id="standard-basic" variant="standard"
              label="Registrar peso del papel (kg) :"
              type="number"
              placeholder='20'
              fullWidth
              name="papel"
              value={papel}
              onChange={onInputChange}
            />
          </Grid>
          <Grid style={{ width: '100%', padding: '20px' }}>
            <TextField id="standard-basic" variant="standard"
              label="Registrar peso del cartón (kg) :"
              type="number"
              placeholder='30'
              fullWidth
              name="carton"
              value={carton}
              onChange={onInputChange}
            />
          </Grid>
          <Grid style={{ width: '100%', padding: '20px' }}>
            <TextField id="standard-basic" variant="standard"
              label="Registrar peso del plástico (kg) :"
              type="number"
              placeholder='10'
              fullWidth
              name="plastico"
              value={plastico}
              onChange={onInputChange}
            />
          </Grid>

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
          >
            Guardar &nbsp;
            <Save />
          </IconButton>
        </Grid>
      </form>

    </Grid >
  )
}
