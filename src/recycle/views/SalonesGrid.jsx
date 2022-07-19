import { Grid, IconButton, Link, Typography } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom';
import React from "react"

export const SalonesGrid = ({ data }) => {

    console.log({ data })

    return (

        <Grid
            container
            direction="row"
            alignItems="center"
        >

            {data.map(Prod => (
                <Grid container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ height: '200px', width: '300px', backgroundColor: 'primary.main', margin: '50px', borderRadius: '15px', color: 'whitesmoke'}}>
                    <Typography variant='h5' sx={{margin: '3px'}}> {Prod.id}</Typography>
                    <Typography variant='h6' sx={{margin: '3px'}}> {Prod.nombreDirector}</Typography>
                    <Typography variant='h6' sx={{margin: '3px'}}> {Prod.numEstudiantes}</Typography>
                    <Link component={RouterLink} style={{ textDecoration: 'none' }} variant='h6' color='inherit' to={`/registrarReciclaje/${Prod.id}/${Prod.nombreDirector}/${Prod.numEstudiantes}`}>
                        <IconButton size='large' style={{ backgroundColor: 'green', color: 'white', borderRadius: '80px',':hover': { backgroundColor: 'green', opacity: 0.9 }, fontSize: '18px' }}> Registrar Reciclaje </IconButton>
                    </Link>
                </Grid>
            ))}



        </Grid>

    )
}
