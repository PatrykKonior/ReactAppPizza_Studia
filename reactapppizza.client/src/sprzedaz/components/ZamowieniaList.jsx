import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, IconButton, TextField, Typography, Box, Button
} from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import AddZamowienieModal from './AddZamowienieModal'
import EditZamowienieModal from './EditZamowienieModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const ZamowieniaList = () => {
    const [filter, setFilter] = useState('');
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [currentZamowienie, setCurrentZamowienie] = useState(null);

    const handleFilterChange = (e) => setFilter(e.target.value);

    const zamowienia = [
        { ZamowienieID: 1, UzytkownikID: 101, DataZamowienia: '2024-06-10', Status: 'W trakcie', Kwota: 500 },
        { ZamowienieID: 2, UzytkownikID: 102, DataZamowienia: '2024-06-12', Status: 'Zakończone', Kwota: 1500 },
    ];

    const filteredZamowienia = zamowienia.filter((zamowienie) =>
        zamowienie.Status.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Lista Zamówień
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <TextField
                    variant="outlined"
                    label="Szukaj zamówienia..."
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
                        '&:hover': {
                            backgroundColor: '#c7a42f',
                            color: '#011a20',
                        },
                    }}
                >
                    Dodaj Zamówienie
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID Zamówienia</TableCell>
                            <TableCell align="center">ID Użytkownika</TableCell>
                            <TableCell align="center">Data Zamówienia</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Kwota Całkowita</TableCell>
                            <TableCell align="center">Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredZamowienia.map((zamowienie) => (
                            <TableRow key={zamowienie.ZamowienieID}>
                                <TableCell align="center">{zamowienie.ZamowienieID}</TableCell>
                                <TableCell align="center">{zamowienie.UzytkownikID}</TableCell>
                                <TableCell align="center">{zamowienie.DataZamowienia}</TableCell>
                                <TableCell align="center">{zamowienie.Status}</TableCell>
                                <TableCell align="center">{zamowienie.Kwota} zł</TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        color="primary"
                                        onClick={() => {
                                            setCurrentZamowienie(zamowienie);
                                            setOpenEdit(true);
                                        }}
                                    >
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
            <AddZamowienieModal open={openAdd} onClose={() => setOpenAdd(false)} />
            <EditZamowienieModal
                open={openEdit}
                onClose={() => {
                    setOpenEdit(false);
                    setCurrentZamowienie(null);
                }}
                zamowienie={currentZamowienie}
            />

            <DeleteConfirmModal open={openDelete} onClose={() => setOpenDelete(false)} />
        </Box>
    );
};

export default ZamowieniaList;
