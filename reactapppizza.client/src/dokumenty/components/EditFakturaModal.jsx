import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditFakturaModal = ({ open, onClose, faktura, onUpdate }) => {
    const [formData, setFormData] = useState({
        ZamowienieID: '',
        WystawionaNa: '',
        OpisDotyczy: '',
        KwotaNetto: '',
        VAT: '',
        KwotaBrutto: '',
        DataWystawienia: '',
    });

    useEffect(() => {
        if (faktura) {
            setFormData(faktura);
        }
    }, [faktura]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        onUpdate(formData);
        onClose();
    };

    if (!faktura) return null; // Jeśli brak danych, nie renderuj

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Fakturę</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Zamówienie ID"
                        name="ZamowienieID"
                        value={formData.ZamowienieID}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Data Wystawienia"
                        name="DataWystawienia"
                        type="date"
                        value={formData.DataWystawienia}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Wystawiona Na"
                        name="WystawionaNa"
                        value={formData.WystawionaNa}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Opis Dotyczy"
                        name="OpisDotyczy"
                        value={formData.OpisDotyczy}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Kwota Netto"
                        name="KwotaNetto"
                        type="number"
                        value={formData.KwotaNetto}
                        onChange={handleChange}
                    />
                    <TextField
                        label="VAT (%)"
                        name="VAT"
                        type="number"
                        value={formData.VAT}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Kwota Brutto"
                        name="KwotaBrutto"
                        type="number"
                        value={formData.KwotaBrutto}
                        onChange={handleChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">Anuluj</Button>
                <Button
                    onClick={handleUpdate}
                    variant="contained"
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#c7a42f', color: '#011a20' },
                    }}
                >
                    Zapisz
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditFakturaModal;
