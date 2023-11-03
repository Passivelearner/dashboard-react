import { Card, CardContent, CardHeader, Container,Typography, CircularProgress, Box, } from "@mui/material"
import React from "react";
import CONTENT_STRINGS from "../config/contentStrings";
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import MenuOptions from "./MenuOptions";

function SalesStats(){

    const spinnervalue = 90

    function CircularProgressWithLabel(props) {
      return (
        <Box sx={{ position: 'relative', display: 'inline-flex', height:'100%' }}>
          <CircularProgress variant="determinate" value={spinnervalue} size={350}/>
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            
            <Typography variant="h3" component="div" color="text.secondary">
              <Box>
                <TrendingUpOutlinedIcon color="success" fontSize='100px'/>
              </Box>
              {`${Math.round(props.value)}%` }
            </Typography>
          </Box>
        </Box>
      );
    }




    return <Card sx={{height : '100%'}}>
        <CardHeader
            action={<MenuOptions/>}
            title={CONTENT_STRINGS.BODY.SALES_STATS.TITLE}
        >
        </CardHeader>
        <CardContent>
          <Container sx={{textAlign : 'center'}}>
            <CircularProgressWithLabel value={spinnervalue} />
            <Typography variant="h5">
              {CONTENT_STRINGS.BODY.SALES_STATS.BOTTOM_LABELS[0]} {CONTENT_STRINGS.BODY.SALES_STATS.BOTTOM_LABELS[1]}
            </Typography>
          </Container>
        </CardContent>
    </Card>

}



export default SalesStats