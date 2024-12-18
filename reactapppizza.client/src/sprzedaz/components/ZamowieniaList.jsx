import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, IconButton, TextField, Typography, Box, Button
} from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import AddZamowienieModal from './AddZamowienieModal';
import EditZamowienieModal from './EditZamowienieModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const API_URL_ZAMOWIENIA = 'http://localhost:5178/api/Zamówienia';
const API_URL_UZYTKOWNICY = 'http://localhost:5178/api/Użytkownicy';

const ZamowieniaList = () => {
    const [zamowienia, setZamowienia] = useState([]);
    const [uzytkownicy, setUzytkownicy] = useState([]);
    const [filter, setFilter] = useState('');
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [currentZamowienie, setCurrentZamowienie] = useState(null);

    const fetchZamowienia = async () => {
        try {
            const response = await fetch(API_URL_ZAMOWIENIA);
            const data = await response.json();
            setZamowienia(data);
        } catch (error) {
            console.error('Błąd podczas pobierania zamówień:', error);
        }
    };

    const fetchUzytkownicy = async () => {
        try {
            const response = await fetch(API_URL_UZYTKOWNICY);
            const data = await response.json();
            setUzytkownicy(data);
        } catch (error) {
            console.error('Błąd podczas pobierania użytkowników:', error);
        }
    };

    useEffect(() => {
        fetchZamowienia();
        fetchUzytkownicy();
    }, []);

    const handleAdd = async (newZamowienie) => {
        try {
            await fetch(API_URL_ZAMOWIENIA, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newZamowienie),
            });
            fetchZamowienia();
            setOpenAdd(false);
        } catch (error) {
            console.error('Błąd podczas dodawania zamówienia:', error);
        }
    };

    const handleEdit = async (updatedZamowienie) => {
        try {
            await fetch(`${API_URL_ZAMOWIENIA}/${updatedZamowienie.zamówienieID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedZamowienie),
            });
            fetchZamowienia();
            setOpenEdit(false);
        } catch (error) {
            console.error('Błąd podczas edytowania zamówienia:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await fetch(`${API_URL_ZAMOWIENIA}/${currentZamowienie.zamówienieID}`, {
                method: 'DELETE',
            });
            fetchZamowienia();
            setOpenDelete(false);
        } catch (error) {
            console.error('Błąd podczas usuwania zamówienia:', error);
        }
    };

    const filteredZamowienia = zamowienia.filter(zamowienie =>
        zamowienie.status.toLowerCase().includes(filter.toLowerCase())
    );

    const getUserNameById = (userId) => {
        const user = uzytkownicy.find(u => u.użytkownikID === userId);
        return user ? `${user.imię} ${user.nazwisko}` : 'Nieznany użytkownik';
    };

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
                    Dodaj Zamówienie
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {['ID Zamówienia', 'Użytkownik', 'Data Zamówienia', 'Status', 'Kwota Całkowita'].map((col) => (
                                <TableCell key={col} align="center" sx={{ fontWeight: 'bold' }}>
                                    {col}
                                </TableCell>
                            ))}
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredZamowienia.map((zamowienie) => (
                            <TableRow key={zamowienie.zamówienieID}>
                                <TableCell align="center">{zamowienie.zamówienieID}</TableCell>
                                <TableCell align="center">{getUserNameById(zamowienie.użytkownikID)}</TableCell>
                                <TableCell align="center">{zamowienie.dataZamówienia.split('T')[0]}</TableCell>
                                <TableCell align="center">{zamowienie.status}</TableCell>
                                <TableCell align="center">{zamowienie.kwotaCałkowita} zł</TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        color="primary"
                                        onClick={() => { setCurrentZamowienie(zamowienie); setOpenEdit(true); }}
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => { setCurrentZamowienie(zamowienie); setOpenDelete(true); }}
                                    >
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modale */}
            <AddZamowienieModal open={openAdd} onClose={() => setOpenAdd(false)} onAdd={handleAdd} uzytkownicy={uzytkownicy} />
            <EditZamowienieModal
                open={openEdit}
                onClose={() => setOpenEdit(false)}
                zamowienie={currentZamowienie}
                onUpdate={handleEdit}
                uzytkownicy={uzytkownicy} // Lista użytkowników
            />
            <DeleteConfirmModal open={openDelete} onClose={() => setOpenDelete(false)} onDelete={handleDelete} />
        </Box>
    );
};

export default ZamowieniaList;
