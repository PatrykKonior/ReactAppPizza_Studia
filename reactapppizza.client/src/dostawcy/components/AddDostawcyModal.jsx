import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddDostawcyModal = ({ open, onClose, onAdd }) => {
    const [newDostawca, setNewDostawca] = useState({
        Nazwa: '',
        KontaktEmail: '',
        KontaktTelefon: '',
        Adres: '',
        Miasto: '',
        KodPocztowy: '',
        Kraj: '',
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
                    <TextField label="Nazwa" name="Nazwa" onChange={handleChange} />
                    <TextField label="Kontakt Email" name="KontaktEmail" onChange={handleChange} />
                    <TextField label="Kontakt Telefon" name="KontaktTelefon" onChange={handleChange} />
                    <TextField label="Adres" name="Adres" onChange={handleChange} />
                    <TextField label="Miasto" name="Miasto" onChange={handleChange} />
                    <TextField label="Kod Pocztowy" name="KodPocztowy" onChange={handleChange} />
                    <TextField label="Kraj" name="Kraj" onChange={handleChange} />
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
