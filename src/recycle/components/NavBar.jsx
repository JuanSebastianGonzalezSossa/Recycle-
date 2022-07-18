import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Grid, IconButton, Toolbar, Link, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { startLogout } from '../../store/auth';

export const NavBar = () => {

    const dispatch = useDispatch();

    const { displayName, photoURL } = useSelector(state => state.auth);

    const onLogout = () => {
        dispatch(startLogout());
    }

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
                    <Typography variant='h6' noWrap component='div'> RecycleApp</Typography>
                    {photoURL ? <img src={photoURL} style={{ width: '75px', height: '75px', backgroundSize: 'cover', borderRadius: '50%', margin: '10px'}} alt="imagen usuario"></img>: null}
                    {photoURL ? <Typography variant='h6' noWrap component='div'> {displayName}</Typography> : null}
                    <Typography variant='h6' noWrap component='div'> </Typography>
                    <Link component={RouterLink} style={{ textDecoration: 'none' }} variant='h6' color='inherit' to="/">
                        Salones
                    </Link>
                    <Link component={RouterLink} style={{ textDecoration: 'none' }} variant='h6' color='inherit' to="/">
                        Estadisticas
                    </Link>
                    
                    <IconButton
                        color='error'
                        onClick={onLogout}
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
