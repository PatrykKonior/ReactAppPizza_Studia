﻿import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddItemModal = ({ open, onClose, onAdd }) => {
    const [newItem, setNewItem] = useState({
        nazwa: '',
        opis: '',
        cenaZakupu: '',
        cenaSprzedaży: '',
        dataDodania: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    };

    const handleAdd = () => {
        onAdd(newItem);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nowy Towar</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Nazwa" name="nazwa" onChange={handleChange} />
                    <TextField label="Opis" name="opis" onChange={handleChange} />
                    <TextField label="Cena Zakupu" name="cenaZakupu" onChange={handleChange} />
                    <TextField label="Cena Sprzedaży" name="cenaSprzedaży" onChange={handleChange} />
                    <TextField
                        label="Data Dodania"
                        name="dataDodania"
                        type="date"
                        InputLabelProps={{ shrink: true }}
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

export default AddItemModal;