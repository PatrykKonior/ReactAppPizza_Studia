import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, IconButton, TextField, Typography, Box, Button
} from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import AddDostawcyModal from './AddDostawcyModal';
import EditDostawcyModal from './EditDostawcyModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const DostawcyList = () => {
    const [filter, setFilter] = useState('');
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [currentDostawca, setCurrentDostawca] = useState(null);

    const handleFilterChange = (e) => setFilter(e.target.value);

    const dostawcyData = [
        { DostawcaID: 1, Nazwa: 'Dostawca A', KontaktEmail: 'a@firma.com', KontaktTelefon: '123456789', Adres: 'ul. 1', Miasto: 'Kraków', KodPocztowy: '30-001', Kraj: 'Polska' },
        { DostawcaID: 2, Nazwa: 'Dostawca B', KontaktEmail: 'b@firma.com', KontaktTelefon: '987654321', Adres: 'ul. 2', Miasto: 'Warszawa', KodPocztowy: '00-001', Kraj: 'Polska' },
    ];

    const filteredDostawcy = dostawcyData.filter((item) =>
        item.Nazwa.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Lista Dostawców
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <TextField
                    variant="outlined"
                    label="Szukaj dostawcy..."
                    value={filter}
                    onChange={handleFilterChange}
                    sx={{ width: '80%' }}
                />
                <Button
                    variant="contained"
                    onClick={() => setOpenAdd(true)}
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#c7a42f', color: '#011a20' },
                    }}
                >
                    Dodaj Dostawcę
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {['DostawcaID', 'Nazwa', 'KontaktEmail', 'KontaktTelefon', 'Adres', 'Miasto', 'KodPocztowy', 'Kraj'].map((col) => (
                                <TableCell key={col} align="center" sx={{ fontWeight: 'bold' }}>
                                    {col}
                                </TableCell>
                            ))}
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredDostawcy.map((dostawca) => (
                            <TableRow key={dostawca.DostawcaID}>
                                <TableCell align="center">{dostawca.DostawcaID}</TableCell>
                                <TableCell align="center">{dostawca.Nazwa}</TableCell>
                                <TableCell align="center">{dostawca.KontaktEmail}</TableCell>
                                <TableCell align="center">{dostawca.KontaktTelefon}</TableCell>
                                <TableCell align="center">{dostawca.Adres}</TableCell>
                                <TableCell align="center">{dostawca.Miasto}</TableCell>
                                <TableCell align="center">{dostawca.KodPocztowy}</TableCell>
                                <TableCell align="center">{dostawca.Kraj}</TableCell>
                                <TableCell align="center">
                                    <IconButton color="primary" onClick={() => { setCurrentDostawca(dostawca); setOpenEdit(true); }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => { setCurrentDostawca(dostawca); setOpenDelete(true); }}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modale */}
            <AddDostawcyModal open={openAdd} onClose={() => setOpenAdd(false)} />
            <EditDostawcyModal open={openEdit} onClose={() => setOpenEdit(false)} dostawca={currentDostawca} />
            <DeleteConfirmModal open={openDelete} onClose={() => setOpenDelete(false)} />
        </Box>
    );
};

export default DostawcyList;
