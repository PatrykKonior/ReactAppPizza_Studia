import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const AddFakturaModal = ({ open, onClose, onAdd }) => {
    const [newFaktura, setNewFaktura] = useState({
        ZamowienieID: '',
        WystawionaNa: '',
        OpisDotyczy: '',
        KwotaNetto: '',
        VAT: '',
        KwotaBrutto: '',
        DataWystawienia: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewFaktura((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        onAdd(newFaktura);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Dodaj Nową Fakturę</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Zamówienie ID" name="ZamowienieID" onChange={handleChange} />
                    <TextField label="Data Wystawienia" name="DataWystawienia" type="date" onChange={handleChange} InputLabelProps={{ shrink: true }} />
                    <TextField label="Wystawiona Na" name="WystawionaNa" onChange={handleChange} />
                    <TextField label="Opis Dotyczy" name="OpisDotyczy" onChange={handleChange} />
                    <TextField label="Kwota Netto" name="KwotaNetto" type="number" onChange={handleChange} />
                    <TextField label="VAT (%)" name="VAT" type="number" onChange={handleChange} />
                    <TextField label="Kwota Brutto" name="KwotaBrutto" type="number" onChange={handleChange} />
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

export default AddFakturaModal;
