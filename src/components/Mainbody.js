import { Card, CardHeader, Grid } from "@mui/material"
import Customerratings from "./Customerratings";
import Sales from "./Sales";
import CONTENT_STRINGS from "../config/contentStrings";
import TopVolume from "./TopVolume";
import TopSales from "./TopSales";
import Earningreport from "./Earningreport";
import Sessions from "./Sessions";
import SalesStats from "./SalesStats";
import CustomerGrid from "./CustomerGrid";
import CountrySales from "./CountrySales";
import TeamGrid from "./TeamGrid";
import Order from "./Order";
import { makeStyles } from "@mui/styles";
  

const useStyles = makeStyles({
    gridStyle : {
        height : '500px'
    }, 
    nestedGridStyle : {
        height : '230px'
    }
})


export default function Mainbody(){
    const classes = useStyles()

    return <Grid container spacing={3}>
            {/* Search Bar */}
            <Grid item xs={12}>
            </Grid>
            {/* Customer Ratings  */}
            <Grid item xs={12} md={6} lg={4}  className={classes.gridStyle}>
                <Customerratings/>
            </Grid>
            {/* Sales */}
            <Grid item xs={12} md={6} lg={4} className={classes.gridStyle}>
                <Sales/>
            </Grid>
            {/* Nested Grid */}
            <Grid container item spacing={2} xs={12} lg={4} className={classes.gridStyle}>
                <Grid item xs={6} md={3} lg={6} className={classes.nestedGridStyle}>
                    <Sessions/>
                </Grid>
                <Grid item xs={6} md={3} lg={6} className={classes.nestedGridStyle}>
                    <Order/>
                </Grid>
                <Grid item xs={12} md={6} lg={12} className={classes.nestedGridStyle}>
                <Card>
                    <CardHeader
                        title={CONTENT_STRINGS.BODY.GENERATED_LEADS_LABEL}
                        subheader={CONTENT_STRINGS.BODY.MONTHLY_REPORT_LABEL}
                    >
                    </CardHeader>
                </Card>
                </Grid>     
            </Grid>
            {/* Top product by sales */}
            <Grid item xs={12} md={6} lg={4} className={classes.gridStyle}>
                    <TopSales/>
            </Grid>
            <Grid item xs={12} md={6} lg={4} className={classes.gridStyle}>
                    <TopVolume/>
            </Grid>
            {/* Earning reports */}
            <Grid item xs={12} md={6} lg={4} className={classes.gridStyle}>
                <Earningreport/>
            </Grid>
            
            {/* Sales Analytics */}
            <Grid item xs={12} md={6} lg={4} className={classes.gridStyle}>
                <Sales/>
            </Grid>

            {/* Sales by Countries */}
            <Grid item xs={12} md={6} lg={4} className={classes.gridStyle}>
                <CountrySales/>
            </Grid>

            {/* Sales Stats */}
            <Grid item xs={12} md={6} lg={4} className={classes.gridStyle}>
                <SalesStats/>
            </Grid>

            {/* Team Members */}
            <Grid item xs={12} md={6} lg={4} className={classes.gridStyle} sx={{my : 1}}>
                <TeamGrid/>
            </Grid>

            {/* Data Grid */}
            <Grid item xs={12} md={6} lg={8} className={classes.gridStyle}>
                <CustomerGrid/>
            </Grid>


        </Grid>
}