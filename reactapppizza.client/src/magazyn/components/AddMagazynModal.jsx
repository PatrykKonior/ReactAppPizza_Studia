import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddMagazynModal = ({ open, onClose, onAdd }) => {
    const [newMagazyn, setNewMagazyn] = useState({
        TowarID: '',
        Nazwa: '',
        Opis: '',
        Ilosc: '',
        Lokalizacja: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMagazyn((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        onAdd(newMagazyn);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nowy Magazyn</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Towar ID" name="TowarID" onChange={handleChange} />
                    <TextField label="Nazwa" name="Nazwa" onChange={handleChange} />
                    <TextField label="Opis" name="Opis" onChange={handleChange} />
                    <TextField label="Ilość" name="Ilosc" type="number" onChange={handleChange} />
                    <TextField label="Lokalizacja" name="Lokalizacja" onChange={handleChange} />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">Anuluj</Button>
                <Button
                    onClick={handleAdd}
                    variant="contained"
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#c7a42f',
                            color: '#011a20',
                        },
                    }}
                >
                    Dodaj
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddMagazynModal;
