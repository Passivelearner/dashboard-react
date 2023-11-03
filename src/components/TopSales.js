import { Card, CardContent, CardHeader, Typography } from "@mui/material"
import CONTENT_STRINGS from "../config/contentStrings";
import DUMMY_DATA from "../data/dummyData";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MenuOptions from "./MenuOptions";



function TopSales(){
    return <Card>
                    <CardHeader
                        title={CONTENT_STRINGS.BODY.TOP_PRODUCTS_BY_SALES_LABEL}
                        action={<MenuOptions/>}
                    >
                    </CardHeader>
                    <CardContent>
                        <List>
                            {DUMMY_DATA.TOP_PRODUCTS_BY_SALE.map((item, index) => 
                                <ListItem 
                                    key={item.Name}
                                    secondaryAction={
                                        <Typography variant="body2">
                                                {item.Sale}
                                        </Typography>
                                        }>
                                    <ListItemAvatar>
                                        <Avatar variant="rounded" sx={{ bgcolor: DUMMY_DATA.COLOR_LOTTERY[((index + 3) % DUMMY_DATA.COLOR_LOTTERY.length)]}}>
                                            {DUMMY_DATA.ICON_LOTTERY[(index + 2) % DUMMY_DATA.ICON_LOTTERY.length]}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={item.Name} secondary={item.Company} />
                                </ListItem>
                            )}
                        </List>
                    </CardContent>
                </Card>
}
export default TopSales