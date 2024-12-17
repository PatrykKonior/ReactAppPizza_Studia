import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, IconButton, TextField, Typography, Box, Button
} from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import AddMagazynModal from './AddMagazynModal';
import EditMagazynModal from './EditMagazynModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const MagazynList = () => {
    const [filter, setFilter] = useState('');
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [currentMagazyn, setCurrentMagazyn] = useState(null);

    const handleFilterChange = (e) => setFilter(e.target.value);

    const magazynData = [
        { MagazynID: 1, TowarID: 101, Nazwa: 'Towar A', Opis: 'Opis A', Ilosc: 50, Lokalizacja: 'A1' },
        { MagazynID: 2, TowarID: 102, Nazwa: 'Towar B', Opis: 'Opis B', Ilosc: 20, Lokalizacja: 'B2' },
    ];

    const filteredMagazyn = magazynData.filter((item) =>
        item.Nazwa.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Lista Produktów w Magazynie
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <TextField
                    variant="outlined"
                    label="Szukaj towaru..."
                    value={filter}
                    onChange={handleFilterChange}
                    sx={{ width: '75%' }}
                />
                <Button
                    variant="contained"
                    onClick={() => setOpenAdd(true)}
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#c7a42f',
                            color: '#011a20',
                        },
                    }}
                >
                    Dodaj produkt do magazynu
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Magazyn ID</TableCell>
                            <TableCell align="center">Towar ID</TableCell>
                            <TableCell align="center">Nazwa</TableCell>
                            <TableCell align="center">Opis</TableCell>
                            <TableCell align="center">Ilość</TableCell>
                            <TableCell align="center">Lokalizacja</TableCell>
                            <TableCell align="center">Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredMagazyn.map((item) => (
                            <TableRow key={item.MagazynID}>
                                <TableCell align="center">{item.MagazynID}</TableCell>
                                <TableCell align="center">{item.TowarID}</TableCell>
                                <TableCell align="center">{item.Nazwa}</TableCell>
                                <TableCell align="center">{item.Opis}</TableCell>
                                <TableCell align="center">{item.Ilosc}</TableCell>
                                <TableCell align="center">{item.Lokalizacja}</TableCell>
                                <TableCell align="center">
                                    <IconButton color="primary" onClick={() => {
                                        setCurrentMagazyn(item);
                                        setOpenEdit(true);
                                    }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => setOpenDelete(true)}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modale */}
            <AddMagazynModal open={openAdd} onClose={() => setOpenAdd(false)} />
            <EditMagazynModal
                open={openEdit}
                onClose={() => {
                    setOpenEdit(false);
                    setCurrentMagazyn(null);
                }}
                magazyn={currentMagazyn}
            />
            <DeleteConfirmModal open={openDelete} onClose={() => setOpenDelete(false)} />
        </Box>
    );
};

export default MagazynList;
