import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, Typography, Box, Button } from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import HeadLine from './components/HeadLine';
import AddUserModal from './components/AddUserModal';
import EditUserModal from './components/EditUserModal';
import DeleteConfirmModal from './components/DeleteConfirmModal';

// Pełny link do API backendu
const API_URL = 'http://localhost:5178/api/Użytkownicy';

const User = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    // Pobieranie listy pracowników
    const fetchEmployees = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Błąd podczas pobierania pracowników:', error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    // Dodawanie nowego pracownika
    const handleAdd = async (newUser) => {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser),
            });
            fetchEmployees();
            setOpenAdd(false);
        } catch (error) {
            console.error('Błąd podczas dodawania pracownika:', error);
        }
    };

    // Edytowanie pracownika
    const handleEdit = async (updatedUser) => {
        try {
            await fetch(`${API_URL}/${updatedUser.UżytkownikID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedUser),
            });
            fetchEmployees();
            setOpenEdit(false);
        } catch (error) {
            console.error('Błąd podczas aktualizacji pracownika:', error);
        }
    };

    // Usuwanie pracownika
    const handleDelete = async () => {
        try {
            await fetch(`${API_URL}/${currentUser.UżytkownikID}`, {
                method: 'DELETE',
            });
            fetchEmployees();
            setOpenDelete(false);
        } catch (error) {
            console.error('Błąd podczas usuwania pracownika:', error);
        }
    };

    // Filtracja pracowników
    const filteredUsers = users.filter(emp =>
        `${emp.Imię} ${emp.Nazwisko}`.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Box sx={{
            width: '100%',
            padding: '1rem',
            margin: '0 auto',
            boxSizing: 'border-box',
            marginRight: '150px',
        }}>
            <HeadLine />
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Lista Użytkowników
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <TextField
                    variant="outlined"
                    label="Szukaj użytkownika..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
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
                    Dodaj Użytkownika
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {['Imię', 'Nazwisko', 'Login', 'HasłoHash', 'Email', 'PoziomDostępu', 'DataRejestracji'].map((col) => (
                                <TableCell key={col} align="center" sx={{ fontWeight: 'bold' }}>
                                    {col}
                                </TableCell>
                            ))}
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUsers.map((user) => (
                            <TableRow key={user.UżytkownikID}>
                                <TableCell align="center">{user.Imię}</TableCell>
                                <TableCell align="center">{user.Nazwisko}</TableCell>
                                <TableCell align="center">{user.Login}</TableCell>
                                <TableCell align="center">{user.HasłoHash}</TableCell>
                                <TableCell align="center">{user.Email}</TableCell>
                                <TableCell align="center">{user.PoziomDostępu}</TableCell>
                                <TableCell align="center">{user.DataRejestracji}</TableCell>
                                <TableCell align="center">
                                    <IconButton color="primary" onClick={() => { setCurrentUser(user); setOpenEdit(true); }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => { setCurrentUser(user); setOpenDelete(true); }}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modale */}
            <AddUserModal open={openAdd} onClose={() => setOpenAdd(false)} onAdd={handleAdd} />
            <EditUserModal open={openEdit} onClose={() => setOpenEdit(false)} employee={currentUser} onUpdate={handleEdit} />
            <DeleteConfirmModal open={openDelete} onClose={() => setOpenDelete(false)} onDelete={handleDelete} />
        </Box>
    );
};

export { User };
