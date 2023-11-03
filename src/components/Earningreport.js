import { Card, CardContent, CardHeader, Typography, Container, Box } from "@mui/material"
import DUMMY_DATA from "../data/dummyData";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { BarChart } from '@mui/x-charts/BarChart'
import CONTENT_STRINGS from "../config/contentStrings";
import React from "react";
import textColorChanger from "../helper/textColorChanger.helper";
import MenuOptions from "./MenuOptions";

function Earningreport(){
    return <Card sx={{height : '100%'}}>
        <CardHeader
            action={<MenuOptions/>}
            title={CONTENT_STRINGS.BODY.EARNING_REPORT.TITLE}
            subheader={CONTENT_STRINGS.BODY.EARNING_REPORT.SUBHEADER}
        >
        </CardHeader>
        <CardContent>
                <List>
                    {DUMMY_DATA.EARNING_REPORT_DATA.map((info, index) => {
                        return <ListItem 
                                    key={info.name}
                                    secondaryAction={
                                        <React.Fragment>
                                            <Container>
                                                <Box>
                                                    <Typography variant="body2" color={textColorChanger('+')}>
                                                            {' ^ ' + info.percent2}
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2">
                                                    {info.percent1}
                                                </Typography>
                                            </Container>
                                        </React.Fragment>
                                        }>
                                    <ListItemAvatar>
                                        <Avatar variant="rounded">
                                            {info.icon}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={info.name} secondary={info.subheader} />
                                </ListItem>
                    })}
                </List>
                <BarChart
                            xAxis={[{ scaleType: 'band', data: DUMMY_DATA.SALES_ACTIVITY.Labels }]}
                            series={[{ ...DUMMY_DATA.SALES_ACTIVITY.SeriesA }]}
                            leftAxis={null}
                            height={150}
                            sx={{
                                '.MuiChartsLegend-root' : {
                                    display : 'none'
                                }, 
                                '.MuiChartsAxis-line' : {
                                    display : 'none'
                                },
                                '.MuiChartsAxis-tick' : {
                                    display : 'none'
                                }, 
                                '.MuiBarElement-series-auto-generated-id-0' : {
                                    borderRadius : '20px'
                                }
                            }}
                            />
                    
        </CardContent>
    </Card>
}

export default Earningreport