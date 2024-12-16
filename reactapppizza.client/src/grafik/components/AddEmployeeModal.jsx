import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddEmployeeModal = ({ open, onClose, onAdd }) => {
    const [newEmployee, setNewEmployee] = useState({
        Imię: '',
        Nazwisko: '',
        Stanowisko: '',
        Telefon: '',
        Email: '',
        DataZatrudnienia: '',
        Wynagrodzenie: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleAdd = () => {
        onAdd(newEmployee);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nowego Pracownika</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Imię" name="Imię" onChange={handleChange} />
                    <TextField label="Nazwisko" name="Nazwisko" onChange={handleChange} />
                    <TextField label="Stanowisko" name="Stanowisko" onChange={handleChange} />
                    <TextField label="Telefon" name="Telefon" onChange={handleChange} />
                    <TextField label="Email" name="Email" onChange={handleChange} />
                    <TextField
                        label="Data Zatrudnienia"
                        name="DataZatrudnienia"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        onChange={handleChange}
                    />
                    <TextField label="Wynagrodzenie" name="Wynagrodzenie" onChange={handleChange} />
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
