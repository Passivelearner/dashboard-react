import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CONTENT_STRINGS from "../config/contentStrings"

function MenuOptions(){
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
                    <MoreVertIcon />
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
                    {CONTENT_STRINGS.BODY.DATE_OPTIONS.map((option, index) => {
                        return <MenuItem key={index} onClick={handleClose}>{option}</MenuItem>
                    })}
                </Menu>
                </React.Fragment>
}

export default MenuOptions