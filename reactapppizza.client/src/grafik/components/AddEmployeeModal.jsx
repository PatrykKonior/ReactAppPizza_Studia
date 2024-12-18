import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddEmployeeModal = ({ open, onClose, onAdd }) => {
    const [newEmployee, setNewEmployee] = useState({
        imię: '',
        nazwisko: '',
        stanowisko: '',
        telefon: '',
        email: '',
        dataZatrudnienia: '',
        wynagrodzenie: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleAdd = () => {
        if (!newEmployee.imię || !newEmployee.nazwisko) {
            alert("Proszę wypełnić wymagane pola: Imię i Nazwisko.");
            return;
        }
        onAdd(newEmployee);
        setNewEmployee({
            imię: '',
            nazwisko: '',
            stanowisko: '',
            telefon: '',
            email: '',
            dataZatrudnienia: '',
            wynagrodzenie: '',
        });
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nowego Pracownika</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Imię" name="imię" value={newEmployee.imię} onChange={handleChange} required />
                    <TextField label="Nazwisko" name="nazwisko" value={newEmployee.nazwisko} onChange={handleChange} required />
                    <TextField label="Stanowisko" name="stanowisko" value={newEmployee.stanowisko} onChange={handleChange} />
                    <TextField label="Telefon" name="telefon" value={newEmployee.telefon} onChange={handleChange} />
                    <TextField label="Email" name="email" value={newEmployee.email} onChange={handleChange} />
                    <TextField
                        label="Data Zatrudnienia"
                        name="dataZatrudnienia"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={newEmployee.dataZatrudnienia}
                        onChange={handleChange}
                    />
                    <TextField label="Wynagrodzenie" name="wynagrodzenie" type="number" value={newEmployee.wynagrodzenie} onChange={handleChange} />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">Anuluj</Button>
                <Button
                    onClick={handleAdd}
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#c7a42f', color: '#011a20' },
                    }}
                    variant="contained"
                >
                    Dodaj
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddEmployeeModal;
