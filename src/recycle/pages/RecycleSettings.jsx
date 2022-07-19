import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/UseFetch'
import { NavBar } from '../components'
import { TableEditRecycle } from '../components/TableEditRecycle'

export const RecycleSettings = () => {

    let { id, nombreDirector, numEstudiantes} = useParams();

    const { data, isLoading, hasError } = useFetch('http://localhost:80/reciclaje/list');

    console.log({ data, isLoading, hasError })
    
    return (
        <Grid container alignItems='center' className='animate__animated animate__fadeIn animate__faster'>
            <NavBar />

            <Grid container direction='row' justifyContent='space-evenly' style={{ marginTop: '200px' }}>
                <Typography variant='h4' noWrap component='div'> {id} </Typography>
                <Typography variant='h6' noWrap component='div'> {nombreDirector} </Typography>
                <Typography variant='h6' noWrap component='div'> {numEstudiantes} </Typography>
            </Grid>

            <TableEditRecycle data={data} grado={id}/>
        </Grid>
    )
}
