import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, IconButton, TextField, Typography, Box, Button
} from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import AddPrzepisModal from './AddPrzepisModal';
import EditPrzepisModal from './EditPrzepisModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const API_URL = 'http://localhost:5178/api/PrzepisyKulinarne';

const PrzepisList = () => {
    const [przepisy, setPrzepisy] = useState([]);
    const [filter, setFilter] = useState('');
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [currentPrzepis, setCurrentPrzepis] = useState(null);

    const fetchPrzepisy = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setPrzepisy(data);
        } catch (error) {
            console.error('Błąd podczas pobierania przepisów:', error);
        }
    };

    useEffect(() => {
        fetchPrzepisy();
    }, []);

    const handleAdd = async (newPrzepis) => {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPrzepis),
            });
            fetchPrzepisy();
            setOpenAdd(false);
        } catch (error) {
            console.error('Błąd podczas dodawania przepisu:', error);
        }
    };

    const handleEdit = async (updatedPrzepis) => {
        try {
            await fetch(`${API_URL}/${updatedPrzepis.przepisID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedPrzepis),
            });
            fetchPrzepisy();
            setOpenEdit(false);
        } catch (error) {
            console.error('Błąd podczas edytowania przepisu:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await fetch(`${API_URL}/${currentPrzepis.przepisID}`, {
                method: 'DELETE',
            });
            fetchPrzepisy();
            setOpenDelete(false);
        } catch (error) {
            console.error('Błąd podczas usuwania przepisu:', error);
        }
    };

    const filteredPrzepisy = przepisy.filter(przepis =>
        przepis.nazwaPrzepisu.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Lista Przepisów Kulinarnych
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <TextField
                    variant="outlined"
                    label="Szukaj przepisu..."
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
                    Dodaj Przepis
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {['Nazwa Przepisu', 'Składniki', 'Instrukcja Przygotowania', 'Czas Przygotowania'].map((col) => (
                                <TableCell key={col} align="center" sx={{ fontWeight: 'bold' }}>
                                    {col}
                                </TableCell>
                            ))}
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredPrzepisy.map((przepis) => (
                            <TableRow key={przepis.przepisID}>
                                <TableCell align="center">{przepis.nazwaPrzepisu}</TableCell>
                                <TableCell align="center">{przepis.składniki}</TableCell>
                                <TableCell align="center">{przepis.instrukcjaPrzygotowania}</TableCell>
                                <TableCell align="center">{przepis.czasPrzygotowania} min</TableCell>
                                <TableCell align="center">
                                    <IconButton color="primary" onClick={() => { setCurrentPrzepis(przepis); setOpenEdit(true); }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => { setCurrentPrzepis(przepis); setOpenDelete(true); }}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modale */}
            <AddPrzepisModal open={openAdd} onClose={() => setOpenAdd(false)} onAdd={handleAdd} />
            <EditPrzepisModal open={openEdit} onClose={() => setOpenEdit(false)} przepis={currentPrzepis} onUpdate={handleEdit} />
            <DeleteConfirmModal open={openDelete} onClose={() => setOpenDelete(false)} onDelete={handleDelete} />
        </Box>
    );
};

export default PrzepisList;
