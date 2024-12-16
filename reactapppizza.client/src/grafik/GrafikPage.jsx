import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, Typography, Box, Button } from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import HeadLine from './components/HeadLine';
import AddEmployeeModal from './components/AddEmployeeModal';
import EditEmployeeModal from './components/EditEmployeeModal';
import DeleteConfirmModal from './components/DeleteConfirmModal';

// Pełny link do API backendu
const API_URL = 'http://localhost:5178/api/Pracownicy';

const Grafik = () => {
    const [employees, setEmployees] = useState([]);
    const [filter, setFilter] = useState('');
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    // Pobieranie listy pracowników
    const fetchEmployees = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setEmployees(data);
        } catch (error) {
            console.error('Błąd podczas pobierania pracowników:', error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    // Dodawanie nowego pracownika
    const handleAdd = async (newEmployee) => {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEmployee),
            });
            fetchEmployees();
            setOpenAdd(false);
        } catch (error) {
            console.error('Błąd podczas dodawania pracownika:', error);
        }
    };

    // Edytowanie pracownika
    const handleEdit = async (updatedEmployee) => {
        try {
            await fetch(`${API_URL}/${updatedEmployee.PracownikID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedEmployee),
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
            await fetch(`${API_URL}/${currentEmployee.PracownikID}`, {
                method: 'DELETE',
            });
            fetchEmployees();
            setOpenDelete(false);
        } catch (error) {
            console.error('Błąd podczas usuwania pracownika:', error);
        }
    };

    // Filtracja pracowników
    const filteredEmployees = employees.filter(emp =>
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
                Lista Pracowników
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <TextField
                    variant="outlined"
                    label="Szukaj pracownika..."
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
                    Dodaj Pracownika
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {['Imię', 'Nazwisko', 'Stanowisko', 'Telefon', 'Email', 'Data Zatrudnienia', 'Wynagrodzenie', 'Akcje'].map((col) => (
                                <TableCell key={col} align="center" sx={{ fontWeight: 'bold' }}>{col}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredEmployees.map((emp) => (
                            <TableRow key={emp.pracownikID}>
                                <TableCell align="center">{emp.imię}</TableCell>
                                <TableCell align="center">{emp.nazwisko}</TableCell>
                                <TableCell align="center">{emp.stanowisko}</TableCell>
                                <TableCell align="center">{emp.telefon}</TableCell>
                                <TableCell align="center">{emp.email}</TableCell>
                                <TableCell align="center">{emp.dataZatrudnienia}</TableCell>
                                <TableCell align="center">{emp.wynagrodzenie} zł</TableCell>
                                <TableCell align="center">
                                    <IconButton color="primary" onClick={() => { setCurrentEmployee(emp); setOpenEdit(true); }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => { setCurrentEmployee(emp); setOpenDelete(true); }}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modale */}
            <AddEmployeeModal open={openAdd} onClose={() => setOpenAdd(false)} onAdd={handleAdd} />
            <EditEmployeeModal open={openEdit} onClose={() => setOpenEdit(false)} employee={currentEmployee} onUpdate={handleEdit} />
            <DeleteConfirmModal open={openDelete} onClose={() => setOpenDelete(false)} onDelete={handleDelete} />
        </Box>
    );
};

export { Grafik };
