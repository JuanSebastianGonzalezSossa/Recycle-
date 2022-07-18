import { Grid, Typography } from '@mui/material'
import React from 'react'
import { NavBar } from '../components'
import { TableEditRecycle } from '../components/TableEditRecycle'

export const RecycleSettings = () => {


    return (
        <Grid container alignItems='center' className='animate__animated animate__fadeIn animate__faster'>
            <NavBar />

            <Grid container direction='row' justifyContent='space-evenly' style={{ marginTop: '200px' }}>
                <Typography variant='h4' noWrap component='div'> Grado </Typography>
                <Typography variant='h6' noWrap component='div'> Director de grupo </Typography>
                <Typography variant='h6' noWrap component='div'> Cantidad de estudiantes </Typography>
            </Grid>

        <TableEditRecycle/>
        </Grid>
    )
}
