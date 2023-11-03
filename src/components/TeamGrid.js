import { Box, Typography, CircularProgress, Chip  } from "@mui/material"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import DUMMY_DATA from "../data/dummyData";
import CONTENT_STRINGS from "../config/contentStrings";


function TeamGrid(){
    return <TableContainer component={Paper} sx={{height : '500px'}}>
            <Table>
              <TableHead>
                <TableRow>
                  {CONTENT_STRINGS.BODY.TEAM_GRID_HEADERS.map((header, index) => {
                    return <TableCell>{header}</TableCell>
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {DUMMY_DATA.PROJECT_PROGRESS.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar
                          alt={row.Name}
                          src={`https://i.pravatar.cc/40?u=${row.Name}`} // Replace with your avatar source
                          sx={{ width: 40, height: 40, marginRight: 1 }}
                        />
                        <Box>
                          <Typography variant="body1">{row.Name}</Typography>
                          <Typography variant="body2" color="textSecondary">
                            {row.Position}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell> 
                      <Chip label={row.Project} color={DUMMY_DATA.COLOR_LOOKUP[row.Project]}/>
                    </TableCell>
                    <TableCell>{row.TasksCompleted + '/100'}</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <CircularProgress
                          variant="determinate"
                          value={row.TasksCompleted}
                          size={40}
                          thickness={4}
                          color={DUMMY_DATA.COLOR_LOOKUP[row.Project]}
                          sx={{ marginRight: 1 }}
                        />
                        <Typography variant="body2">{row.tasksCompleted}</Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
}
export default TeamGrid