import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, IconButton, Modal, TextField, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import RemoveTwoToneIcon from '@mui/icons-material/RemoveTwoTone';

import { closeModalEdit } from '../pages/EditModalSlice/EditModalSlice';
import Image from "../assets/Images/Img1.jpg";

export default function CustomModal() {
    const dispatch = useDispatch();
    const editedData = useSelector((state) => state?.editOrder.editedData)
    const [formData, setFormData] = useState(editedData);

    const isEditModalOpen = useSelector(state => state?.editModal.isEditModalOpen);
    console.log(isEditModalOpen, "isModalOpen");
    const handleClose = () => {
        dispatch(closeModalEdit());
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    console.log(formData, "formData");
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
        height: "410px"
    };
    return (
        <Modal
            open={isEditModalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style}>
                <div onClick={handleClose} style={{ display: "flex", justifyContent: "end" }}>
                    <ClearIcon cursor="pointer" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ marginLeft: "5px" }}>
                        <Typography id="modal-modal-description" sx={{ fontWeight: "700" }}>
                            Chicken Breast Fillet ,Boneless Matu MaMarineted 6 Ounce Raw,Invaid
                        </Typography>
                    </div>

                </div>
                <Box >
                    <Typography id="modal-modal-description" sx={{ mt: 1, mb: 1, marginLeft: "5px" }}>
                        American Roland
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <img src={Image} alt="" style={{ width: "120px", height: "120px" }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>Price ($)</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </div>
                    <div style={{
                        display: 'flex', flexDirection: 'column', justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <TextField type="number" value={formData?.Quantity} onChange={handleInputChange} name="Quantity" sx={{ mt: 1, mb: 1 }}
                                className="input-style" />
                            <span style={{ paddingTop: "10px" }}>x 6 + 1LB</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <IconButton>
                                <ControlPointTwoToneIcon />
                            </IconButton>

                            <TextField type="number" value={formData?.Price} onChange={handleInputChange} name="Price" className="input-style"
                            />

                            <IconButton>
                                <RemoveTwoToneIcon />

                            </IconButton>

                            <span style={{ paddingTop: "10px" }}>x 6 + 1LB</span>
                        </div>
                        <p>
                            $999.9999.000
                        </p>
                    </div>
                </Box>
                <Box >
                    <Typography variant="h6" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                        Choose Reason <span style={{ fontSize: "10px", fontWeight: "300", color: "gray" }}>(optional)</span>
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{
                            fontSize: "14px", padding: "8px 8px ",
                            borderRadius: "20px", border: "1px solid grey", margin: "0px 3px"
                        }} >
                            Missing Product
                        </Typography>
                        <Typography sx={{
                            fontSize: "14px", padding: "8px 8px ",
                            borderRadius: "20px", border: "1px solid grey", margin: "0px 3px"
                        }} >
                            Quantity is not the same
                        </Typography>
                        <Typography sx={{
                            fontSize: "14px", padding: "8px 8px ",
                            borderRadius: "20px", border: "1px solid grey", margin: "0px 3px"
                        }} >
                            Price is not the same
                        </Typography>
                        <Typography sx={{
                            fontSize: "14px", padding: "8px 8px ",
                            borderRadius: "20px", border: "1px solid grey", margin: "0px 3px"
                        }} >                            Other
                        </Typography>
                    </Box>
                </Box>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "15px" }}>
                    <Button
                        onClick={handleClose}
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

                    >
                        Back
                    </Button>
                    <Button sx={{
                        backgroundColor: '#1e633f', padding: "3px 28px",
                        borderRadius: "20px",
                        "&:hover": {
                            background: "#1e633f",
                        },
                    }} variant="contained">Send</Button>
                </div>
            </Box>
        </Modal>
    );
}
