import React, { useEffect, useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, IconButton, TextField, Typography, Box, Button
} from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import AddDostawcyModal from './AddDostawcyModal';
import EditDostawcyModal from './EditDostawcyModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const DostawcyList = () => {
    const [dostawcy, setDostawcy] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [currentDostawca, setCurrentDostawca] = useState(null);

    const API_URL = 'http://localhost:5178/api/Dostawcy';

    // Pobieranie danych dostawców
    const fetchDostawcy = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Nie udało się pobrać danych dostawców');
            const data = await response.json();
            setDostawcy(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDostawcy();
    }, []);

    // Dodawanie nowego dostawcy
    const handleAdd = async (newDostawca) => {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newDostawca),
            });
            fetchDostawcy(); // Odświeżenie listy
        } catch (err) {
            console.error('Błąd dodawania:', err);
        }
    };

    // Aktualizacja dostawcy
    const handleUpdate = async (updatedDostawca) => {
        try {
            await fetch(`${API_URL}/${updatedDostawca.dostawcaID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedDostawca),
            });
            fetchDostawcy(); // Odświeżenie listy
        } catch (err) {
            console.error('Błąd edycji:', err);
        }
    };

    // Usuwanie dostawcy
    const handleDelete = async () => {
        try {
            await fetch(`${API_URL}/${currentDostawca.dostawcaID}`, {
                method: 'DELETE',
            });
            fetchDostawcy(); // Odświeżenie listy
            setOpenDelete(false);
        } catch (err) {
            console.error('Błąd usuwania:', err);
        }
    };

    const handleFilterChange = (e) => setFilter(e.target.value);

    const filteredDostawcy = dostawcy.filter((item) =>
        item.nazwa && item.nazwa.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Lista Dostawców
            </Typography>

            {/* Filtr wyszukiwania */}
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
                    startIcon={<AddCircleOutline />}
                >
                    Dodaj Dostawcę
                </Button>
            </Box>

            {/* Obsługa błędów i ładowania */}
            {loading && <Typography>Ładowanie danych...</Typography>}
            {error && <Typography color="error">{error}</Typography>}

            {/* Tabela dostawców */}
            {!loading && !error && (
                <TableContainer component={Paper} elevation={3}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Nazwa</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Telefon</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Adres</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Miasto</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Kod Pocztowy</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Kraj</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Akcje</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredDostawcy.map((dostawca) => (
                                <TableRow key={dostawca.dostawcaID}>
                                    <TableCell align="center">{dostawca.dostawcaID}</TableCell>
                                    <TableCell align="center">{dostawca.nazwa}</TableCell>
                                    <TableCell align="center">{dostawca.kontaktEmail}</TableCell>
                                    <TableCell align="center">{dostawca.kontaktTelefon}</TableCell>
                                    <TableCell align="center">{dostawca.adres}</TableCell>
                                    <TableCell align="center">{dostawca.miasto}</TableCell>
                                    <TableCell align="center">{dostawca.kodPocztowy}</TableCell>
                                    <TableCell align="center">{dostawca.kraj}</TableCell>
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
            )}

            {/* Modale */}
            <AddDostawcyModal open={openAdd} onClose={() => setOpenAdd(false)} onAdd={handleAdd} />
            <EditDostawcyModal open={openEdit} onClose={() => setOpenEdit(false)} dostawca={currentDostawca} onUpdate={handleUpdate} />
            <DeleteConfirmModal open={openDelete} onClose={() => setOpenDelete(false)} onDelete={handleDelete} />
        </Box>
    );
};

export default DostawcyList;
