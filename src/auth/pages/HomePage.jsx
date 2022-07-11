import { Grid } from '@mui/material'
import React from 'react'
import { NavBar } from '../components'

export const HomePage = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
        >

        <NavBar/>

        {/* Aca va a trabajar Nia */}
        
        </Grid>
    )
}
