import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material"
import DUMMY_DATA from "../data/dummyData";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CONTENT_STRINGS from "../config/contentStrings";
import React from "react";
import textColorChanger from "../helper/textColorChanger.helper";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import MenuOptions from "./MenuOptions";


function CountrySales(){
    return <Card sx={{height : '100%'}}>
        <CardHeader
            action={<MenuOptions/>}
            title={CONTENT_STRINGS.BODY.COUNTRY_SALES_TITLE}
            subheader={CONTENT_STRINGS.BODY.COUNTRY_SALES_SUBHEADER}
        >
        </CardHeader>
        <CardContent>
                <List>
                    {DUMMY_DATA.SALES_BY_COUNTRY.map((country, index) => {

                        return <ListItem 
                                    key={index}
                                    secondaryAction={
                                        <Typography variant="body2">
                                                {country.No2}
                                        </Typography>
                                        }>
                                    <ListItemAvatar>
                                        <Avatar alt={country.Country} src={country.avatarSrc}/>
                                    </ListItemAvatar>
                                    <ListItemText primary={
                                                            <Typography variant="body2">
                                                                {country.No1} 
                                                                <Box sx={{color : index % 2 === 0 ? textColorChanger('+') : textColorChanger('-'), 
                                                                        display : 'inline'}}>
                                                                                {index % 2 === 0 ? <KeyboardArrowUpOutlinedIcon/> : <ExpandMoreOutlinedIcon/>}
                                                                                {country.Percent} 
                                                                </Box>
                                                            </Typography>} 
                                                    secondary={country.Country} />
                                </ListItem>

                    })}
                </List>
        </CardContent>
    </Card>
}

export default CountrySales