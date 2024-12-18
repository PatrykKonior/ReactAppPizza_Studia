import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, IconButton, TextField, Typography, Box, Button
} from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import AddFakturaModal from './AddFakturaModal';
import EditFakturaModal from './EditFakturaModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const API_URL = 'http://localhost:5178/api/Faktury';

const FakturyList = () => {
    const [fakturyData, setFakturyData] = useState([]);
    const [filter, setFilter] = useState('');
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [currentFaktura, setCurrentFaktura] = useState(null);

    // Fetch faktury data
    const fetchFaktury = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setFakturyData(data);
        } catch (error) {
            console.error('Błąd podczas pobierania faktur:', error);
        }
    };

    useEffect(() => {
        fetchFaktury();
    }, []);

    // Add Faktura
    const handleAdd = async (newFaktura) => {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newFaktura),
            });
            fetchFaktury();
            setOpenAdd(false);
        } catch (error) {
            console.error('Błąd podczas dodawania faktury:', error);
        }
    };

    // Edit Faktura
    const handleEdit = async (updatedFaktura) => {
        try {
            await fetch(`${API_URL}/${updatedFaktura.fakturaID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedFaktura),
            });
            fetchFaktury();
            setOpenEdit(false);
        } catch (error) {
            console.error('Błąd podczas edycji faktury:', error);
        }
    };

    // Delete Faktura
    const handleDelete = async () => {
        try {
            await fetch(`${API_URL}/${currentFaktura.fakturaID}`, {
                method: 'DELETE',
            });
            fetchFaktury();
            setOpenDelete(false);
        } catch (error) {
            console.error('Błąd podczas usuwania faktury:', error);
        }
    };

    const filteredFaktury = fakturyData.filter((item) =>
        item.wystawionaNa.toLowerCase().includes(filter.toLowerCase())
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
                    onChange={(e) => setFilter(e.target.value)}
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
                            {['FakturaID', 'ZamówienieID', 'Data Wystawienia', 'Wystawiona Na', 'Opis Dotyczy', 'Kwota Netto', 'VAT', 'Kwota Brutto'].map((col) => (
                                <TableCell key={col} align="center" sx={{ fontWeight: 'bold' }}>
                                    {col}
                                </TableCell>
                            ))}
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredFaktury.map((faktura) => (
                            <TableRow key={faktura.fakturaID}>
                                <TableCell align="center">{faktura.fakturaID}</TableCell>
                                <TableCell align="center">{faktura.zamówienieID}</TableCell>
                                <TableCell align="center">
                                    {new Date(faktura.dataWystawienia).toLocaleDateString('pl-PL')}
                                </TableCell>
                                <TableCell align="center">{faktura.wystawionaNa}</TableCell>
                                <TableCell align="center">{faktura.opisDotyczy}</TableCell>
                                <TableCell align="center">{faktura.kwotaNetto} zł</TableCell>
                                <TableCell align="center">{faktura.vat} %</TableCell>
                                <TableCell align="center">{faktura.kwotaBrutto} zł</TableCell>
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
            <AddFakturaModal open={openAdd} onClose={() => setOpenAdd(false)} onAdd={handleAdd} />
            <EditFakturaModal
                open={openEdit}
                onClose={() => {
                    setOpenEdit(false);
                    setCurrentFaktura(null);
                }}
                faktura={currentFaktura}
                onUpdate={handleEdit}
            />
            <DeleteConfirmModal
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                onDelete={handleDelete}
            />
        </Box>
    );
};

export default FakturyList;
