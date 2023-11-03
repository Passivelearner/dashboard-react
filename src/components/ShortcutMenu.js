import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { Card, CardContent, CardHeader, Avatar, Box, Grid, Typography } from "@mui/material";
import ListSubheader from '@mui/material/ListSubheader';
import GridViewIcon from '@mui/icons-material/GridView';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CONTENT_STRINGS from "../config/contentStrings";


function ShortcutMenu(){
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
                <GridViewIcon/>
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                    'aria-labelledby': 'long-button',
                    }}
                    sx={{height : '600px'}}
                    
                    anchorEl={anchorElement}
                    open={open}
                    onClose={handleClose}
                >
                    <ListSubheader>
                        <Card>
                        <CardHeader
                                                avatar={<AddCircleOutlineOutlinedIcon/>}
                                                title={CONTENT_STRINGS.BODY.SHORTCUTS_TITLE}
                                            >
                        </CardHeader>
                        </Card>
                    </ListSubheader>
                    <Grid container spacing={0} sx={{width : '450px'}}>
                        {CONTENT_STRINGS.BODY.SHORTCUTS.map((shortcut, index) => {
                            return <Grid item xs={6} key={index}>
                                <Card sx={{textAlign : 'center'}}>
                                    <CardContent>
                                    <Box sx={{display : 'flex', alignItems : 'center', justifyContent: 'center'}}>
                                        <Avatar>
                                            {shortcut.component}
                                        </Avatar>
                                    </Box>
                                    <Typography variant="body2" component="div">
                                        {shortcut.shortCutTitle}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {shortcut.shortCutSub}
                                    </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        })}
                    </Grid>
                        
                </Menu>
                </React.Fragment>

}
export default ShortcutMenu