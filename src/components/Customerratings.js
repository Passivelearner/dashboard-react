import { Card, CardHeader, Typography } from "@mui/material"
import CONTENT_STRINGS from "../config/contentStrings"

import CardContent from '@mui/material/CardContent'
import Rating from '@mui/material/Rating';
import Container from '@mui/material/Container';
import React from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import DUMMY_DATA from "../data/dummyData";

import MenuOptions from "./MenuOptions";

function Customerratings(){
    return <Card elevation={2} sx={{'height' : '100%'}}>
                    <CardHeader
                        action={<MenuOptions/>}
                        title={CONTENT_STRINGS.BODY.CUSTOMER_RATINGS_LABEL}
                        titleTypographyProps={{variant:'body1'}}
                    >
                    </CardHeader>
                    <CardContent sx={{padding : '0'}}>
                        <Container>
                        <Typography variant="h3" color="text.secondary">
                            {CONTENT_STRINGS.BODY.CUSTOMER_RATING_SUMMARY}  <Rating name="read-only" value={4} readOnly />
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {CONTENT_STRINGS.BODY.CUSTOMER_RATINGS_MESSAGE}
                        </Typography>
                        </Container>
                        <LineChart
                        xAxis={[{ scaleType: 'point', data: DUMMY_DATA.CUSTOMER_REVIEW.Labels }]}
                        series={[
                            DUMMY_DATA.CUSTOMER_REVIEW.SeriesA,
                            DUMMY_DATA.CUSTOMER_REVIEW.SeriesB,
                        ]}
                        leftAxis={null}
                        height={300}
                        // replace by classnames later.
                        sx={{
                            '.MuiLineElement-root, .MuiMarkElement-root': {
                             strokeWidth: 1,
                            },
                            '.MuiLineElement-series-lastMonthId': {
                             strokeDasharray: '5 5',
                            },
                            '.MuiMarkElement-root:not(.MuiMarkElement-highlighted)': {
                             fill: '#fff',
                            },
                            '& .MuiMarkElement-highlighted': {
                             stroke: 'none',
                            },
                            '.MuiChartsLegend-root' : {
                                display : 'none'
                            }, 
                            '.MuiChartsAxis-line' : {
                                display : 'none'
                            },
                            '.MuiChartsAxis-tick' : {
                                display : 'none'
                            },
                          }}
                        />
                    </CardContent>
                </Card>
}


export default Customerratings