import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { styled } from "@mui/styles"
import Divider from '@mui/material/Divider';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Typography } from "@mui/material";
import CONTENT_STRINGS from "../config/contentStrings";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    
  }));





function ProfileMenu(){
    const [anchorElement, setAnchorElement] = useState(null)
    const open = Boolean(anchorElement)
    const handleClick = (event) => {
        setAnchorElement(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorElement(null)
    }

    return <React.Fragment>
                <IconButton 
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                >
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar src={CONTENT_STRINGS.BODY.PROFILE_IMAGE_SRC} />
                    </StyledBadge>
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorElement}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          mt: 1.5,
                          '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <Avatar src={CONTENT_STRINGS.BODY.PROFILE_IMAGE_SRC}  />  {CONTENT_STRINGS.BODY.PROFILE_OPTIONS[0]}
                    </MenuItem>
                    <MenuItem>
                        <PersonOutlineOutlinedIcon /> {CONTENT_STRINGS.BODY.PROFILE_OPTIONS[1]}
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <SettingsOutlinedIcon />  
                        </ListItemIcon>
                        <Typography variant="h6">{CONTENT_STRINGS.BODY.PROFILE_OPTIONS[2]}</Typography>
                        
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <CreditCardOutlinedIcon  /> 
                        </ListItemIcon>
                        <Typography variant="h6">{CONTENT_STRINGS.BODY.PROFILE_OPTIONS[3]}</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <ContactSupportOutlinedIcon /> 
                        </ListItemIcon>
                        <Typography variant="h6">{CONTENT_STRINGS.BODY.PROFILE_OPTIONS[4]}</Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <AttachMoneyOutlinedIcon  /> 
                        </ListItemIcon>
                        <Typography variant="h6">{CONTENT_STRINGS.BODY.PROFILE_OPTIONS[5]}</Typography>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>
                        <ListItemIcon>
                                <PowerSettingsNewOutlinedIcon  /> 
                        </ListItemIcon>
                        <Typography variant="h6">{CONTENT_STRINGS.BODY.PROFILE_OPTIONS[6]}</Typography>
                    </MenuItem>
                </Menu>
                </React.Fragment>

}
export default ProfileMenu