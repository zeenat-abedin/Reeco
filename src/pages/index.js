import React from 'react';

import { Box } from '@mui/material';

import OrderTable from './OrderTable';
import Header from './Header';
import OrderDetailHeader from './OrderDetailHeader';

const MainView = () => {
    return (
        <div className='scroll-container'>
            <Header />
            <OrderDetailHeader />

            <Box sx={{ marginTop: 5, marginBottom: 5, marginLeft: 6, marginRight: 6 }}>
                <OrderTable />
            </Box>
        </div>
    );
};

export default MainView;
