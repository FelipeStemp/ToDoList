import * as S from './styled'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Filtros() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <S.BodyFiltros>
            <TextField InputProps={{
                sx: {
                    color: 'white',
                    height: '40px',
                    border:'1px solid white',
                    '& input:-webkit-autofill': {
                        WebkitTextFillColor: 'white',
                        transition: 'background-color 5000s ease-in-out 0s',
                    },
                },

            }} 
            />
            
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon sx={{ color: 'white', fontSize: '50px', margin: '0px' }} />
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: 'transparent',
                        color: 'white',
                        backdropFilter: 'blur(40px)'
                    }
                }}
            >
                <MenuItem onClick={handleClose}>Pendete</MenuItem>
                <MenuItem onClick={handleClose}>Fazendo</MenuItem>
                <MenuItem onClick={handleClose}>Concluído</MenuItem>
            </Menu>

        </S.BodyFiltros>
    )
}

export default Filtros