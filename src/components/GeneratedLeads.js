import { Card, CardContent, CardHeader, Container, Typography } from "@mui/material"
import CONTENT_STRINGS from "../config/contentStrings";

import {
  PieChart,
  Pie,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Category A', value: 200 },
  { name: 'Category B', value: 300 },
  { name: 'Category C', value: 150 },
  { name: 'Category D', value: 80 },
];


function GeneratedLeads(){
    return <Container  sx={{height : '100%'}}>
    <Card>
        <CardHeader
            title={CONTENT_STRINGS.BODY.GENERATED_LEADS_LABEL}
            subheader={CONTENT_STRINGS.BODY.MONTHLY_REPORT_LABEL}
        >
        </CardHeader>
        <CardContent sx={{display:'flex'}}>
            <Typography variant="h5">
                4,230 (+12.8%)
            </Typography>
            <ResponsiveContainer height={150}>
                <PieChart>
                    <Pie
                    data={data}
                    dataKey="value"
                    innerRadius={50} // Adjust the inner radius as needed
                    />
                </PieChart>
            </ResponsiveContainer>
        </CardContent>
        
    </Card>    
</Container>

}


export default GeneratedLeads