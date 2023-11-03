import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Card,  CardContent, CardHeader, Avatar, Typography } from "@mui/material";
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ListSubheader from '@mui/material/ListSubheader';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import DUMMY_DATA from "../data/dummyData";

function NotificationMenu(){
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
                    <Badge badgeContent={5} color="error">
                            <NotificationsNoneOutlinedIcon/>
                    </Badge>
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
                                                avatar={<DraftsOutlinedIcon/>}
                                                title="Notifications"
                                            >
                        </CardHeader>
                        </Card>
                    </ListSubheader>
                        {DUMMY_DATA.NOTIFICATION_DATA.map((notification, index) => {
                            return <MenuItem key={index} onClick={handleClose}>
                                        <Card sx={{width : '500px'}}>
                                            <CardHeader
                                                avatar={<Avatar/>}
                                                title="New Message from Zyrill!"
                                                subheader="You have your message from Zyrill"
                                            >
                                            </CardHeader>
                                            <CardContent>
                                                <Typography variant="body1">
                                                {notification}    
                                                </Typography> 
                                                <Typography variant="caption">
                                                {DUMMY_DATA.NOTIFICATION_DATA_CONTENT}    
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </MenuItem>
                        })}
                </Menu>
                </React.Fragment>

}
export default NotificationMenu