import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditEmployeeModal = ({ open, onClose, employee, onUpdate }) => {
    const [formData, setFormData] = useState({
        pracownikID: '',
        imię: '',
        nazwisko: '',
        stanowisko: '',
        telefon: '',
        email: '',
        dataZatrudnienia: '',
        wynagrodzenie: '',
    });

    useEffect(() => {
        if (employee) {
            setFormData(employee);
        }
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = () => {
        if (!formData.imię || !formData.nazwisko) {
            alert("Proszę wypełnić wymagane pola: Imię i Nazwisko.");
            return;
        }
        onUpdate(formData);
    };

    if (!employee) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Pracownika</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Imię" name="imię" value={formData.imię} onChange={handleChange} required />
                    <TextField label="Nazwisko" name="nazwisko" value={formData.nazwisko} onChange={handleChange} required />
                    <TextField label="Stanowisko" name="stanowisko" value={formData.stanowisko} onChange={handleChange} />
                    <TextField label="Telefon" name="telefon" value={formData.telefon} onChange={handleChange} />
                    <TextField label="Email" name="email" value={formData.email} onChange={handleChange} />
                    <TextField
                        label="Data Zatrudnienia"
                        name="dataZatrudnienia"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formData.dataZatrudnienia}
                        onChange={handleChange}
                    />
                    <TextField label="Wynagrodzenie" name="wynagrodzenie" type="number" value={formData.wynagrodzenie} onChange={handleChange} />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error">Anuluj</Button>
                <Button
                    onClick={handleUpdate}
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#c7a42f', color: '#011a20' },
                    }}
                    variant="contained"
                >
                    Zapisz
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditEmployeeModal;
