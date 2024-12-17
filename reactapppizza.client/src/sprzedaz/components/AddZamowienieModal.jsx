import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddZamowienieModal = ({ open, onClose, onAdd }) => {
    const [newZamowienie, setNewZamowienie] = useState({
        UzytkownikID: '',
        DataZamowienia: '',
        Status: '',
        KwotaCałkowita: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewZamowienie({ ...newZamowienie, [name]: value });
    };

    const handleAdd = () => {
        onAdd(newZamowienie);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nowe Zamówienie</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="ID Użytkownika"
                        name="UzytkownikID"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Data Zamówienia"
                        name="DataZamowienia"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Status"
                        name="Status"
                        onChange={handleChange}
                    />
                    <TextField
                        label="Kwota Całkowita"
                        name="KwotaCałkowita"
                        onChange={handleChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">Anuluj</Button>
                <Button
                    onClick={handleAdd}
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#c7a42f',
                            color: '#011a20',
                        },
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
