import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';

const OrderDetailHeader = () => {
    return (
        <div style={{ padding: "10px 55px", backgroundColor: "#fff", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ display: "flex", padding: "10px 0px" }}>
                <div>
                    <p style={{ margin: "0px" }}>Order Detail</p>
                </div>
                <div>
                    <p style={{ margin: "0px" }}>
                        <ChevronRightIcon />
                    </p>
                </div>
                <div>
                    <p style={{ margin: "0px", textDecoration: "underline" }}>Order 32567ABFG</p>
                </div>
            </div>
            <div style={{ display: "flex", padding: "10px 0px", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                    <p style={{ margin: "0px", fontWeight: "700", fontSize: "20px" }}>Order 32567ABFG</p>
                </div>
                <div >
                    <Button
                        sx={{
                            borderColor: "#1e633f",
                            color: "#1e633f",
                            padding: "2px 25px",
                            borderRadius: "20px",
                            "&:hover": {
                                borderColor: "#1e633f",
                            },
                            margin: "0px 5px"
                        }}
                        variant="outlined"
                    >
                        Back
                    </Button>
                    <Button sx={{
                        backgroundColor: '#1e633f', padding: "3px 28px",
                        borderRadius: "20px",
                        "&:hover": {
                            background: "#1e633f",
                        },
                    }} variant="contained">Approve Order</Button>
                </div>
            </div>
        </div >

    )
}

export default OrderDetailHeader