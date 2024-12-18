import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, IconButton, TextField, Typography, Box, Button
} from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import AddMagazynModal from './AddMagazynModal';
import EditMagazynModal from './EditMagazynModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const API_URL = 'http://localhost:5178/api/Magazyn';

const MagazynList = () => {
    const [magazynData, setMagazynData] = useState([]);
    const [filter, setFilter] = useState('');
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [currentMagazyn, setCurrentMagazyn] = useState(null);

    // Pobieranie danych
    const fetchMagazyn = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setMagazynData(data);
        } catch (error) {
            console.error('Błąd podczas pobierania magazynu:', error);
        }
    };

    useEffect(() => {
        fetchMagazyn();
    }, []);

    // Dodawanie magazynu
    const handleAdd = async (newMagazyn) => {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newMagazyn),
            });
            fetchMagazyn();
            setOpenAdd(false);
        } catch (error) {
            console.error('Błąd podczas dodawania magazynu:', error);
        }
    };

    // Edytowanie magazynu
    const handleEdit = async (updatedMagazyn) => {
        try {
            await fetch(`${API_URL}/${updatedMagazyn.magazynID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedMagazyn),
            });
            fetchMagazyn();
            setOpenEdit(false);
        } catch (error) {
            console.error('Błąd podczas edytowania magazynu:', error);
        }
    };

    // Usuwanie magazynu
    const handleDelete = async () => {
        try {
            await fetch(`${API_URL}/${currentMagazyn.magazynID}`, {
                method: 'DELETE',
            });
            fetchMagazyn();
            setOpenDelete(false);
        } catch (error) {
            console.error('Błąd podczas usuwania magazynu:', error);
        }
    };

    const filteredMagazyn = magazynData.filter((item) =>
        item.nazwaTowaru.toLowerCase().includes(filter.toLowerCase())
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
                    onChange={(e) => setFilter(e.target.value)}
                    sx={{ width: '75%' }}
                />
                <Button
                    variant="contained"
                    startIcon={<AddCircleOutline />}
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
                            <TableCell align="center">Nazwa Towaru</TableCell>
                            <TableCell align="center">Opis Towaru</TableCell>
                            <TableCell align="center">Ilość</TableCell>
                            <TableCell align="center">Lokalizacja</TableCell>
                            <TableCell align="center">Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredMagazyn.map((item) => (
                            <TableRow key={item.magazynID}>
                                <TableCell align="center">{item.magazynID}</TableCell>
                                <TableCell align="center">{item.towarID}</TableCell>
                                <TableCell align="center">{item.nazwaTowaru}</TableCell>
                                <TableCell align="center">{item.opisTowaru}</TableCell>
                                <TableCell align="center">{item.ilość}</TableCell>
                                <TableCell align="center">{item.lokalizacja}</TableCell>
                                <TableCell align="center">
                                    <IconButton color="primary" onClick={() => {
                                        setCurrentMagazyn(item);
                                        setOpenEdit(true);
                                    }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => {
                                        setCurrentMagazyn(item);
                                        setOpenDelete(true);
                                    }}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modale */}
            <AddMagazynModal open={openAdd} onClose={() => setOpenAdd(false)} onAdd={handleAdd} />
            <EditMagazynModal
                open={openEdit}
                onClose={() => {
                    setOpenEdit(false);
                    setCurrentMagazyn(null);
                }}
                magazyn={currentMagazyn}
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

export default MagazynList;
