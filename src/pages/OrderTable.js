import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, IconButton, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import PrintIcon from '@mui/icons-material/Print';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from './ModalSlice/ModalSlice';
import { OrderListDataRecords } from '../Constant/OrderListdata';
import { addMissing, addMissingUrgent, addApprovedRow } from './StatusSlice/StatusSlice';
import { closeModal, selectIsModalOpen } from '../pages/ModalSlice/ModalSlice';
import { Modal } from '@mui/material';
import { addOrderList } from './OrderSlice/OrderSlice';
import { openModalEdit } from './EditModalSlice/EditModalSlice';
import { startEditing } from './EditOrderListSlice/EditOrderListSlice';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function OrderTable() {

    const [orderData, setOrderdata] = React.useState([])
    const [missingRowsData, setMissingRowsData] = React.useState(null); // Step 1: Track approved rows
    const dispatch = useDispatch();
    const Data = useSelector((state) => state?.modal)
    const StatusData = useSelector((state) => state?.status)
    const OrderListDataRecord = useSelector((state) => state?.orderList.OrderList)
    console.log(OrderListDataRecord, "OrderListDataRecords")
    console.log(Data, "Data")
    console.log(StatusData, 'StatusData')

    const handleEditClick = (id) => {
        console.log(id, "idMissing");
        setMissingRowsData(id);
        dispatch(openModal());


    };
    const HandleApproveStatus = (id) => {
        console.log("Approving row with ID:", id);
        dispatch(addApprovedRow(id));
    };

    const HandleMissing = (statusType) => {
        console.log("Marking as", statusType, "for row with ID:", missingRowsData);
        if (statusType === 'Missing') {
            dispatch(addMissing(missingRowsData));
        } else if (statusType === 'MissingUrgent') {
            dispatch(addMissingUrgent(missingRowsData));
        }
        dispatch(closeModal());
    };
    const isModalOpen = useSelector(selectIsModalOpen);
    console.log(isModalOpen, "isModalOpen");
    const handleClose = () => {
        dispatch(closeModal());
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    console.log("Missing Array:", StatusData.Missing);
    console.log("MissingUrgent Array:", StatusData.MissingUrgent);
    React.useEffect(() => {
        if (OrderListDataRecords) {
            dispatch(addOrderList(OrderListDataRecords));
        }
    }, [OrderListDataRecords])

    const HandleOpenEditModal = (data) => {
        console.log(data, 'data')
        dispatch(openModalEdit());
        dispatch(startEditing(data));
    }
    return (
        <>
            <Modal
                open={isModalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ marginLeft: "5px" }}>
                            <Typography id="modal-modal-description" sx={{ fontWeight: "700" }}>
                                Missing Product
                            </Typography>
                        </div>
                        <div>
                            <ClearIcon />
                        </div>
                    </div>
                    <Box >
                        <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, marginLeft: "5px" }}>
                            Chicken Breast Fillet ,Boneless Is....Urgent?
                        </Typography>
                    </Box>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="default" onClick={() => { handleClose(); HandleMissing('Missing') }} color="primary" style={{ marginRight: '10px' }}>
                            Yes
                        </Button>
                        <Button variant="default" onClick={() => { handleClose(); HandleMissing('MissingUrgent') }} color="secondary">
                            No
                        </Button>
                    </div>
                </Box>
            </Modal>
            <div style={{ padding: "20px 55px", backgroundColor: "#fff", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
                <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between ", padding: " 40px 0px" }}>
                    <div>
                        <TextField
                            sx={{ borderRadius: "40px" }}
                            variant="outlined"
                            fullWidth
                            placeholder="Search..."
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: 'center', }}>
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
                            Add Items
                        </Button>
                        <div style={{ padding: "0px 30px" }}>
                            <PrintIcon sx={{ color: "#1e633f" }} />
                        </div>
                    </div>
                </div>
                <TableContainer component={Paper} style={{ maxHeight: 400 }}>

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="right">Brands</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Total</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right"></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {OrderListDataRecords?.map((row) => (

                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <div style={{ display: "flex", alignItems: "start" }}>
                                            <img src={row.img} style={{ width: "40px", height: "40px" }} />
                                            <span style={{ padding: "0px 5px" }}>
                                                {row.Title}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.Brand.split(' ').slice(0, 2).join(' ')}
                                        <br />
                                        {row.Brand.split(' ').slice(2).join(' ')}
                                    </TableCell>
                                    <TableCell align="right">{row.Price}</TableCell>
                                    <TableCell align="right">{row.Quantity}</TableCell>
                                    <TableCell align="right">{row.Total}</TableCell>
                                    <TableCell align="right">
                                        {StatusData.approvedRows?.includes(row.id) ? (
                                            <span style={{
                                                backgroundColor: "green", padding: "5px 8px", color: "white",
                                                borderRadius: "10px"
                                            }}>Approved</span>
                                        ) : (
                                            StatusData.missing?.includes(row.id) ? (
                                                <span style={{
                                                    backgroundColor: "#f66d44", padding: "5px 8px", color: "white",
                                                    borderRadius: "10px"
                                                }}>Missing</span>
                                            ) : (
                                                StatusData.missingUrgent?.includes(row.id) ? (
                                                    <span style={{
                                                        backgroundColor: "#db2114", padding: "5px 8px", color: "white",
                                                        borderRadius: "10px"
                                                    }}>Missing Urgent</span>
                                                ) : (
                                                    <span></span>
                                                )
                                            )
                                        )}
                                    </TableCell>

                                    <TableCell align="right">
                                        <IconButton disabled={StatusData.missingUrgent?.includes(row.id) || StatusData.missing?.includes(row.id)} onClick={() => HandleApproveStatus(row?.id)}>
                                            <Box sx={{ padding: '0px 5px' }}>
                                                <CheckIcon sx={StatusData.approvedRows?.includes(row.id) ? { color: "green" } : { color: "gray" }} />
                                            </Box>
                                        </IconButton>
                                        <IconButton disabled={StatusData.approvedRows?.includes(row.id)} onClick={() => handleEditClick(row?.id)}>
                                            <Box sx={{ padding: '0px 5px' }}>
                                                <ClearIcon sx={StatusData.missingUrgent?.includes(row.id) ? { color: "#db2114" } : StatusData.missing.includes(row.id) ? { color: "#f66d44" } : { color: "gray" }} />
                                            </Box>
                                        </IconButton>
                                        <span
                                            onClick={() => HandleOpenEditModal(row)}
                                            style={{
                                                fontWeight: '300',
                                                padding: '0px 5px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Edit
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div></>
    );
}
