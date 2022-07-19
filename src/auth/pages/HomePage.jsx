import { Grid } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/NavBar'

export const HomePage = () => {
    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >

            <Navbar />

            {/* Aca va a trabajar Nia */}

        </Grid>
    )
}