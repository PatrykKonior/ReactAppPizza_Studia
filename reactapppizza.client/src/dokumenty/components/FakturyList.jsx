import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, IconButton, TextField, Typography, Box, Button
} from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import AddFakturaModal from './AddFakturaModal';
import EditFakturaModal from './EditFakturaModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const FakturyList = () => {
    const [filter, setFilter] = useState('');
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [currentFaktura, setCurrentFaktura] = useState(null);

    const handleFilterChange = (e) => setFilter(e.target.value);

    const fakturyData = [
        {
            FakturaID: 1,
            ZamowienieID: 101,
            DataZamowienia: '2024-06-01',
            Status: 'W trakcie',
            Imie: 'Jan',
            Nazwisko: 'Kowalski',
            WystawionaNa: 'Firma X',
            OpisDotyczy: 'Zakup towaru',
            KwotaNetto: 1200.50,
            VAT: 23.00,
            KwotaBrutto: 1476.61,
        },
        // Przykładowe dane
    ];

    const filteredFaktury = fakturyData.filter((item) =>
        item.Imie.toLowerCase().includes(filter.toLowerCase()) ||
        item.Nazwisko.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Lista Faktur
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <TextField
                    variant="outlined"
                    label="Szukaj faktury..."
                    value={filter}
                    onChange={handleFilterChange}
                    sx={{ width: '80%' }}
                />
                <Button
                    variant="contained"
                    startIcon={<AddCircleOutline />}
                    onClick={() => setOpenAdd(true)}
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#c7a42f', color: '#011a20' },
                    }}
                >
                    Dodaj Fakturę
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {[
                                'FakturaID', 'ZamowienieID', 'Data Zamówienia', 'Status', 'Imię', 'Nazwisko',
                                'WystawionaNa', 'OpisDotyczy', 'KwotaNetto', 'VAT', 'KwotaBrutto'
                            ].map((col) => (
                                <TableCell key={col} align="center" sx={{ fontWeight: 'bold' }}>
                                    {col}
                                </TableCell>
                            ))}
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredFaktury.map((faktura) => (
                            <TableRow key={faktura.FakturaID}>
                                <TableCell align="center">{faktura.FakturaID}</TableCell>
                                <TableCell align="center">{faktura.ZamowienieID}</TableCell>
                                <TableCell align="center">{faktura.DataZamowienia}</TableCell>
                                <TableCell align="center">{faktura.Status}</TableCell>
                                <TableCell align="center">{faktura.Imie}</TableCell>
                                <TableCell align="center">{faktura.Nazwisko}</TableCell>
                                <TableCell align="center">{faktura.WystawionaNa}</TableCell>
                                <TableCell align="center">{faktura.OpisDotyczy}</TableCell>
                                <TableCell align="center">{faktura.KwotaNetto} zł</TableCell>
                                <TableCell align="center">{faktura.VAT} %</TableCell>
                                <TableCell align="center">{faktura.KwotaBrutto} zł</TableCell>
                                <TableCell align="center">
                                    <IconButton color="primary" onClick={() => { setCurrentFaktura(faktura); setOpenEdit(true); }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => { setCurrentFaktura(faktura); setOpenDelete(true); }}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modale */}
            <AddFakturaModal open={openAdd} onClose={() => setOpenAdd(false)} />
            <EditFakturaModal open={openEdit} onClose={() => setOpenEdit(false)} faktura={currentFaktura} />
            <DeleteConfirmModal open={openDelete} onClose={() => setOpenDelete(false)} />
        </Box>
    );
};

export default FakturyList;
