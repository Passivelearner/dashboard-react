import { Card, CardHeader } from "@mui/material"
import CONTENT_STRINGS from "../config/contentStrings"

import CardContent from '@mui/material/CardContent'
import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import DUMMY_DATA from "../data/dummyData";

function Sales(){
    return <Card sx={{'height' : '100%'}}>
                    <CardHeader
                        title={CONTENT_STRINGS.BODY.OVERVIEW_SALES_ACTIVITY_LABEL}
                        subheader={CONTENT_STRINGS.BODY.OVERVIEW_SALES_ACTIVITY_INSTRUCTION}
                        titleTypographyProps={{variant:'body1'}}
                    >
                    </CardHeader>
                    <CardContent sx={{padding : 0}}>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: DUMMY_DATA.SALES_ACTIVITY.Labels }]}
                            series={[{ ...DUMMY_DATA.SALES_ACTIVITY.SeriesA }, { ...DUMMY_DATA.SALES_ACTIVITY.SeriesB }]}
                            leftAxis={null}
                            height={350}
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





export default Sales