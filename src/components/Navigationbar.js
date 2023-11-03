import React from 'react';
import CONTENT_STRINGS from "../config/contentStrings";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { styled  } from '@mui/material/styles';
import { useState } from "react";
import MuiDrawer from '@mui/material/Drawer';
import ListItemText from '@mui/material/ListItemText';
import Fab from '@mui/material/Fab';

let drawerWidth = 240


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

export default function Sidenav(){
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open)
    }


    return  <React.Fragment> 
                <Drawer
                    variant="permanent" open={open} anchor="left"
                >

                <DrawerHeader> 
                        <Fab color="primary" aria-label="add" size="small" onClick={toggleDrawer}>
                            {open ?  <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </Fab>     
                </DrawerHeader>
                    <div>
                        <List>
                            {CONTENT_STRINGS.NAVIGATION.DASHBOARD_LABELS_AND_ICONS.map((component, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton>
                                <ListItemIcon>
                                    {component.component}
                                </ListItemIcon>
                                <ListItemText primary={component.name} />
                                </ListItemButton>
                            </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </React.Fragment>

}