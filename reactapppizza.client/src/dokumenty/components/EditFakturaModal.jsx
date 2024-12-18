import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditFakturaModal = ({ open, onClose, faktura, onUpdate }) => {
    const [formData, setFormData] = useState({
        fakturaID: '',
        zamówienieID: '',
        dataWystawienia: '',
        wystawionaNa: '',
        opisDotyczy: '',
        kwotaNetto: '',
        vat: '',
        kwotaBrutto: '',
    });

    // Load initial data when faktura is passed
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

    if (!faktura) return null; // Do not render if there's no faktura data

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Fakturę</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Faktura ID"
                        name="fakturaID"
                        value={formData.fakturaID}
                        onChange={handleChange}
                        disabled
                    />
                    <TextField
                        label="Zamówienie ID"
                        name="zamówienieID"
                        type="number"
                        value={formData.zamówienieID}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Data Wystawienia"
                        name="dataWystawienia"
                        type="date"
                        value={formData.dataWystawienia}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        label="Wystawiona Na"
                        name="wystawionaNa"
                        value={formData.wystawionaNa}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Opis Dotyczy"
                        name="opisDotyczy"
                        value={formData.opisDotyczy}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Kwota Netto"
                        name="kwotaNetto"
                        type="number"
                        value={formData.kwotaNetto}
                        onChange={handleChange}
                    />
                    <TextField
                        label="VAT (%)"
                        name="vat"
                        type="number"
                        value={formData.vat}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Kwota Brutto"
                        name="kwotaBrutto"
                        type="number"
                        value={formData.kwotaBrutto}
                        onChange={handleChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">Anuluj</Button>
                <Button
                    onClick={handleUpdate}
                    variant="contained"
                    sx={{ backgroundColor: '#011a20', color: '#fff', '&:hover': { backgroundColor: '#c7a42f', color: '#011a20' } }}
                >
                    Zapisz
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditFakturaModal;
