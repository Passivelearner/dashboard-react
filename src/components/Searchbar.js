import { Card, CardContent, Container, TextField } from "@mui/material"
import { makeStyles  } from "@mui/styles"
import CONTENT_STRINGS from "../config/contentStrings"
import SearchIcon from '@mui/icons-material/Search';
import DarkModeButton from "./DarkModeButton";
import LanguageMenu from "./LanguageMenu";
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";
import ShortcutMenu from "./ShortcutMenu";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
    root : {
        position : 'sticky', 
        top : 0,
        zIndex : 1100
    }
})


function Searchbar(){
    const classes = useStyles()
    
    const [isSearchFocused, setIsSearchFocused] = useState(false)

    const handleOnFocus = () => {
        setIsSearchFocused(true)
    }

    const handleOnBlur = () => {
        setIsSearchFocused(false)
    }


    return <Card elevation={2} className={classes.root}> 
        <CardContent>
            <Container sx={{display : 'flex', alignItems: 'space-between', placeItems : 'center', height : '40px'}}>
                <TextField 
                    fullWidth
                    variant="standard"
                    InputProps={{
                        startAdornment: !isSearchFocused && <SearchIcon />,
                        endAdornment: isSearchFocused && <CloseIcon/>, 
                        disableUnderline: true, 
                    }}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    placeholder={!isSearchFocused ? CONTENT_STRINGS.BODY.SEARCH_BAR_HINT : CONTENT_STRINGS.BODY.SEARCH_BAR_HINT_ON_FOCUS}
                />
                {!isSearchFocused && <Stack direction="row" spacing={1}>
                    <ShortcutMenu/>
                    <LanguageMenu/>
                    <DarkModeButton/>
                    <NotificationMenu/>
                    <ProfileMenu/>
                </Stack>}
            </Container>
        </CardContent>
    </Card>
}

export default Searchbar