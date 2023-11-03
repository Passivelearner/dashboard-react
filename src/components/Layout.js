import { makeStyles } from "@mui/styles"
import React from 'react';
import { Outlet } from "react-router-dom";
import Searchbar from "./Searchbar";
import Navigationbar from "./Navigationbar";

const drawerWidth = 240

const useStyles = makeStyles({
    mainPage : {
        background : '#f9f9f9',
        width : '100%',
        marginLeft : 5
    },
    drawer : {
        width : drawerWidth
    },
    drawerPaper : {
        width : drawerWidth
    },
    root : {
        display : 'flex'
    }
})

export default function Layout(){
    const classes = useStyles()

    return <React.Fragment>
            <div className={classes.root}>
                    <Navigationbar/>
                <div className={classes.mainPage}>
                    <Searchbar/>
                    <Outlet/>
                </div>
            </div> 
        </React.Fragment>
}