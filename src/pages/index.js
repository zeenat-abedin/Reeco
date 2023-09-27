import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import OrderTable from './OrderTable';
import Header from './Header';
import OrderDetailHeader from './OrderDetailHeader';
import CategoriesBoxes from './CategoriesBoxes';

const StyledAppBar = styled(AppBar)`
  background-color: #1e633f;
`;

const MainView = () => {
    return (
        <div className='scroll-container'>
            <Header />
            <OrderDetailHeader />
            {/* <Box sx={{ marginTop: 10, marginBottom: 10, marginLeft: 6, marginRight: 6 }}>

                <CategoriesBoxes />
            </Box> */}
            <Box sx={{ marginTop: 5, marginBottom: 5, marginLeft: 6, marginRight: 6 }}>
                <OrderTable />
            </Box>
        </div>
    );
};

export default MainView;
