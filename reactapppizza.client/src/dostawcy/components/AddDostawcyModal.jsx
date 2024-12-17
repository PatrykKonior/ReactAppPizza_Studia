import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddDostawcyModal = ({ open, onClose, onAdd }) => {
    const [newDostawca, setNewDostawca] = useState({
        nazwa: '',
        kontaktEmail: '',
        kontaktTelefon: '',
        adres: '',
        miasto: '',
        kodPocztowy: '',
        kraj: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewDostawca((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        onAdd(newDostawca);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nowego Dostawcę</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Nazwa" name="nazwa" onChange={handleChange} />
                    <TextField label="Kontakt Email" name="kontaktEmail" onChange={handleChange} />
                    <TextField label="Kontakt Telefon" name="kontaktTelefon" onChange={handleChange} />
                    <TextField label="Adres" name="adres" onChange={handleChange} />
                    <TextField label="Miasto" name="miasto" onChange={handleChange} />
                    <TextField label="Kod Pocztowy" name="kodPocztowy" onChange={handleChange} />
                    <TextField label="Kraj" name="kraj" onChange={handleChange} />
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
                        '&:hover': { backgroundColor: '#c7a42f', color: '#011a20' },
                    }}
                >
                    Dodaj
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddDostawcyModal;
