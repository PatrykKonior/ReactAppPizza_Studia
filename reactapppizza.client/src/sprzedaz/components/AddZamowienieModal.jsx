import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, MenuItem } from '@mui/material';

const AddZamowienieModal = ({ open, onClose, onAdd, uzytkownicy }) => {
    const [newZamowienie, setNewZamowienie] = useState({
        użytkownikID: '',
        dataZamówienia: '',
        status: '',
        kwotaCałkowita: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewZamowienie((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        if (!newZamowienie.użytkownikID || !newZamowienie.dataZamówienia || !newZamowienie.status) {
            alert('Wszystkie pola muszą być wypełnione!');
            return;
        }
        onAdd(newZamowienie);
        setNewZamowienie({
            użytkownikID: '',
            dataZamówienia: '',
            status: '',
            kwotaCałkowita: '',
        });
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nowe Zamówienie</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Użytkownik"
                        name="użytkownikID"
                        select
                        value={newZamowienie.użytkownikID}
                        onChange={handleChange}
                    >
                        {uzytkownicy.map((user) => (
                            <MenuItem key={user.użytkownikID} value={user.użytkownikID}>
                                {`${user.imię} ${user.nazwisko}`}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="Data Zamówienia"
                        name="dataZamówienia"
                        type="date"
                        value={newZamowienie.dataZamówienia}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Status"
                        name="status"
                        value={newZamowienie.status}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Kwota Całkowita"
                        name="kwotaCałkowita"
                        type="number"
                        value={newZamowienie.kwotaCałkowita}
                        onChange={handleChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">
                    Anuluj
                </Button>
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

export default AddZamowienieModal;
