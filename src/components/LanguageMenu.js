import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ListItemText } from "@mui/material";
import MenuList from '@mui/material/MenuList';
import LanguageIcon from '@mui/icons-material/Language';

function LanguageMenu(){
    const [anchorElement, setAnchorElement] = useState(null)
    const open = Boolean(anchorElement)
    const handleClick = (event) => {
        setAnchorElement(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorElement(null)
    }
    
    const Languages = [
        "English",
        "French",
        "Tagalog",
        "Japanese"
    ]


    return <React.Fragment>
                <IconButton 
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                >
                    <LanguageIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                    'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorElement}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuList>
                        { Languages.map((language, index) => {
                            return <MenuItem key={index} onClick={handleClose}>
                                        <ListItemText>{language}</ListItemText>
                                    </MenuItem>

                        })}

                    </MenuList>
                </Menu>
                </React.Fragment>

}
export default LanguageMenu