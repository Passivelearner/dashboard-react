import { Box, Chip } from "@mui/material"
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Avatar, Typography } from '@mui/material';
import DUMMY_DATA from "../data/dummyData";
import CONTENT_STRINGS from "../config/contentStrings";
import MenuOptions from "./MenuOptions";

function CustomerGrid(){

    function setChipStatus(status){
      const lookupTable = {
        "PAID" : "success",
        "PENDING" : "warning",
        "FAILED" : "error"
      }
      return lookupTable[status]
    }



    return ( <TableContainer component={Paper} sx={{height : '500px'}}>
              <Table>
                <TableHead>
                  <TableRow>
                    {CONTENT_STRINGS.BODY.CUSTOMER_TABLE_HEADERS.map(header => <TableCell key={header}>{header}</TableCell>)}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {DUMMY_DATA.CUSTOMER_TRANSACTIONS.map((row, index) => (
                    <TableRow key={row.name}>
                      <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar alt={row.name} 
                                src={`https://i.pravatar.cc/40?u=${row.name}`} 
                                sx={{ width: 40, height: 40, marginRight: 1 }} />
                        <Box>
                          <Typography variant="h6">{row.name}</Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                              {row.email}
                            </Typography>
                        </Box>   
                      </Box>
                      </TableCell>
                      <TableCell>{'$' + row.amount}</TableCell>
                      <TableCell>
                        <Chip label={row.status} color={setChipStatus(row.status)}/>
                        </TableCell>
                      <TableCell>
                        <Avatar variant="rounded" src={index % 2 === 0 ? "../assets/cards/mastercard.png" : "../assets/cards/paypal.png"}/>
                      </TableCell>
                      <TableCell>
                        <MenuOptions/>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>);
}
export default CustomerGrid