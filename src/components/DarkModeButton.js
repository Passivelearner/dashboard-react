import React, { useState, useContext } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { ListItemIcon, ListItemText } from "@mui/material";
import MenuList from '@mui/material/MenuList';
import { ColorModeContext } from "../context/ColorModeContext";


function DarkModeButton(){
    const [anchorElement, setAnchorElement] = useState(null)
    const open = Boolean(anchorElement)
    const setTheme = useContext(ColorModeContext)
    const handleClick = (event) => {
        setAnchorElement(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorElement(null)
    }
    const handleSwitch = (theme) => {
        setTheme(theme)
        setAnchorElement(null)
    }

    const MenuElementsWithIcon = [
        {
            option : "light",
            componentIcon : <LightModeOutlinedIcon/>
        },
        {
            option : "dark",
            componentIcon : <DarkModeOutlinedIcon/>
        }
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
                    <DarkModeOutlinedIcon />
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
                        { MenuElementsWithIcon.map((option, index) => {
                            return <MenuItem key={index} onClick={() => handleSwitch(option.option)}>
                                        <ListItemIcon>
                                            {option.componentIcon}
                                        </ListItemIcon>
                                        <ListItemText>{option.option}</ListItemText>
                                    </MenuItem>

                        })}

                    </MenuList>
                </Menu>
                </React.Fragment>

}
export default DarkModeButton