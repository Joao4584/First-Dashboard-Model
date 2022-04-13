import React, { useContext } from "react";
import { Profile } from "./style";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider'
import { BiExit } from 'react-icons/bi';
import { MdOutlineAccountBox, MdOutlineManageAccounts } from 'react-icons/md'

import { AuthContext } from '../../../Auth/AuthContext'

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));


export function PerfilNav(){
    const { handleLogout } = useContext(AuthContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const disconnect = () => {
    
       document.getElementById('BODY').style.transitionDuration = '0.5s';
        document.getElementById('BODY').style.opacity = 0;
        
        setTimeout(() => {
            handleLogout();
            document.getElementById('BODY').style.opacity = 1;

        },1000)

    }

    return(<>
            <Profile>
                <div>
                <Tooltip title="Configurações" placement="left-end">
                 <Stack direction="row" spacing={2}  aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
        
                        <Avatar alt="João" src="/static/images/avatar/1.jpg" />
    
                  </Stack></Tooltip>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <MdOutlineAccountBox fontSize="large" />
                    </ListItemIcon>
                        Minha Conta</MenuItem>
                    <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <MdOutlineManageAccounts fontSize="large" />
                    </ListItemIcon>
                        Gerenciar Usuarios</MenuItem>
                    <Divider />
                    <MenuItem onClick={()=>{handleClose(); disconnect()}}>
                    <ListItemIcon>
                        <BiExit fontSize="large" />
                    </ListItemIcon>

                        Desconectar

                    </MenuItem>
                </Menu>
                </div>
        </Profile>
    </>)
}
