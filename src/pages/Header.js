import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

const StyledAppBar = styled(AppBar)`
  background-color: #1e633f;
`;
const Header = () => {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                {/* Left side of the header */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexGrow: 1,
                        padding: "0px 30px",

                    }}
                >
                    <Typography variant="h6" component="div">
                        Recoo
                    </Typography>


                    <Box sx={{ display: "flex", alignItems: "center", paddingLeft: "30px" }}>
                        <Typography variant="body1" color="inherit" sx={{ paddingRight: 2, paddingLeft: 4 }}>
                            Store
                        </Typography>
                        <Typography variant="body1" color="inherit" sx={{ paddingRight: 2, paddingLeft: 4 }}>
                            Order
                        </Typography>
                        <Typography variant="body1" color="inherit" sx={{ paddingRight: 2, paddingLeft: 4 }}>
                            Analytics
                        </Typography>
                    </Box>
                </Box>

                {/* Right side of the header */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: "0px 30px",
                    }}
                >
                    <Box sx={{ padding: "0px 30px" }}>
                        <IconButton color="inherit">
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="body1" color="inherit" sx={{ paddingRight: 1 }}>
                        Hello, James
                    </Typography>
                    <IconButton color="inherit">
                        <ArrowDropDownIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header