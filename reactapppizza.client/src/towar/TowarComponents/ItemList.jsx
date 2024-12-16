import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    TextField,
    Typography,
    Box,
    Button
} from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import AddItemModal from './AddItemModal';
import EditItemModal from './EditItemModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('');
    const [currentItem, setCurrentItem] = useState(null);
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    // Pobieranie listy z backendu
    const fetchItems = async () => {
        try {
            const response = await fetch('http://localhost:5178/api/Towary');
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Błąd podczas pobierania danych:', error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    // Dodanie nowego towaru
    const handleAdd = async (newItem) => {
        try {
            await fetch('http://localhost:5178/api/Towary', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newItem),
            });
            fetchItems();
        } catch (error) {
            console.error('Błąd podczas dodawania towaru:', error);
        }
    };

    // Edycja istniejącego towaru
    const handleEdit = async (updatedItem) => {
        console.log('Wysyłanie danych do aktualizacji:', updatedItem);
        try {
            await fetch(`http://localhost:5178/api/Towary/${updatedItem.TowarID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedItem),
            });
            fetchItems();
        } catch (error) {
            console.error('Błąd podczas aktualizowania towaru:', error);
        }
    };

    // Usunięcie towaru
    const handleDelete = async () => {
        if (!currentItem?.TowarID) {
            console.error('Niepoprawne ID towaru');
            return;
        }
        console.log('Usuwanie towaru o ID:', currentItem.TowarID);
        try {
                await fetch(`http://localhost:5178/api/Towary/${currentItem.TowarID}`, {
                    method: 'DELETE',
                });
                fetchItems();
                setOpenDelete(false);
        } catch (error) {
            console.error('Błąd podczas usuwania towaru:', error);
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredItems = items.filter((item) =>
        item.nazwa.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Lista Towarów
            </Typography>

            {/* Wyszukiwanie */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <TextField
                    variant="outlined"
                    label="Szukaj towaru..."
                    value={filter}
                    onChange={handleFilterChange}
                    sx={{ width: '80%' }}
                />
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#c7a42f',
                            color: '#011a20',
                        },
                    }}
                    onClick={() => setOpenAdd(true)}
                >
                    Dodaj Towar
                </Button>
            </Box>

            {/* Tabela */}
            <TableContainer component={Paper} elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Nazwa</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Opis</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Cena Zakupu</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Cena Sprzedaży</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Data Dodania</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredItems.map((item) => (
                            <TableRow key={item.TowarID}>
                                <TableCell align="center">{item.nazwa}</TableCell>
                                <TableCell align="center">{item.opis}</TableCell>
                                <TableCell align="center">{item.cenaZakupu} zł</TableCell>
                                <TableCell align="center">{item.cenaSprzedaży} zł</TableCell>
                                <TableCell align="center">{item.dataDodania.split('T')[0]}</TableCell>
                                <TableCell align="center">
                                    <IconButton color="primary" onClick={() => { setCurrentItem(item); setOpenEdit(true); }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => {
                                        console.log('Ustawiony currentItem:', item); // Logowanie obiektu
                                        setCurrentItem(item);
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
            <AddItemModal open={openAdd} onClose={() => setOpenAdd(false)} onAdd={handleAdd} />
            <EditItemModal open={openEdit} onClose={() => setOpenEdit(false)} item={currentItem} onUpdate={handleEdit} />
            <DeleteConfirmModal open={openDelete} onClose={() => setOpenDelete(false)} onDelete={handleDelete} />
        </Box>
    );
};

export default ItemList;
