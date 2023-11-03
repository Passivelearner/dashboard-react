import { Card, CardContent, CardHeader} from "@mui/material"
import CONTENT_STRINGS from "../config/contentStrings";


import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import DUMMY_DATA from "../data/dummyData";



function Sessions(){
    return <Card sx={{height : '100%'}}>
            <CardHeader
                title={CONTENT_STRINGS.BODY.SESSIONS_LABEL}
                titleTypographyProps={{variant:'body1'}}
                subheader="2,845"
            >
            </CardHeader>
            <CardContent sx={{padding : 0, margin: 0}}>
            <ResponsiveContainer height={147}>
                <AreaChart data={DUMMY_DATA.TINYLINECHART_DATA}>
                    <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    </defs>
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <CartesianGrid stroke="#ffffff" strokeOpacity={0} /> {/* Set stroke and strokeOpacity */}
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
            </CardContent>
        </Card>
}


export default Sessions