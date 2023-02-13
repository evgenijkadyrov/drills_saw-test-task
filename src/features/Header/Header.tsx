import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Header= () => (
    <Box sx={{flexGrow: 1}} >
        <AppBar position="static">
            <Toolbar sx={{backgroundColor:'tomato'}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <Link to={'/'}>Drills&saw</Link>
                </Typography>

                <Button color="inherit" endIcon={<ShoppingCartIcon/>}><Link to={'/cart'}>Cart</Link></Button>
            </Toolbar>
        </AppBar>
    </Box>
)
