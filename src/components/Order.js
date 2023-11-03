import { Card, CardContent, CardHeader, Container,Typography } from "@mui/material"
import CONTENT_STRINGS from "../config/contentStrings";
import textColorChanger from "../helper/textColorChanger.helper";
import MenuOptions from "./MenuOptions";
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';


function Order(){

    

    return <Card sx={{height : '100%'}}>
            <CardHeader
                avatar={<ViewInArOutlinedIcon color="primary"/>}
                action={<MenuOptions/>}
                titleTypographyProps={{variant:'body1'}}
            >
            </CardHeader>
            <CardContent>
                <Container>
                    <Typography variant="body1">
                        {CONTENT_STRINGS.BODY.ORDER_LABEL}
                    </Typography>
                    <Typography variant="h5">
                        {CONTENT_STRINGS.BODY.ORDER_AMOUNT}
                    </Typography>
                    <Typography variant="body2" sx={{color : textColorChanger(CONTENT_STRINGS.BODY.ORDER_PERCENT)}}>
                        {CONTENT_STRINGS.BODY.ORDER_PERCENT}
                    </Typography>
                </Container>
            </CardContent>
        </Card>
}

export default Order