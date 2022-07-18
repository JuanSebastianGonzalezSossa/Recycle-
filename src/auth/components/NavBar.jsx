import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Grid, Link, IconButton, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbar = () => {
    return (
        <AppBar
            position='fixed'
            sx={12}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Link component={RouterLink} style={{ textDecoration: 'none' }} color='inherit' to="/auth" >
                        <Typography variant='h6' className='Logo' noWrap component='div' > RecycleApp </Typography>
                    </Link>

                    <Link component={RouterLink} style={{ textDecoration: 'none' }} color='inherit' to="/auth/login">
                        <IconButton >
                            <AccountCircleIcon />
                        </IconButton>
                    </Link>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}