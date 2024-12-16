import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditEmployeeModal = ({ open, onClose, employee, onUpdate }) => {
    const [formData, setFormData] = useState({
        Imię: '',
        Nazwisko: '',
        Stanowisko: '',
        Telefon: '',
        Email: '',
        DataZatrudnienia: '',
        Wynagrodzenie: '',
    });

    useEffect(() => {
        if (employee) setFormData(employee);
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(formData);
        onClose();
    };

    if (!employee) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Pracownika</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Imię" name="Imię" value={formData.Imię} onChange={handleChange} />
                    <TextField label="Nazwisko" name="Nazwisko" value={formData.Nazwisko} onChange={handleChange} />
                    <TextField label="Stanowisko" name="Stanowisko" value={formData.Stanowisko} onChange={handleChange} />
                    <TextField label="Telefon" name="Telefon" value={formData.Telefon} onChange={handleChange} />
                    <TextField label="Email" name="Email" value={formData.Email} onChange={handleChange} />
                    <TextField
                        label="Data Zatrudnienia"
                        name="DataZatrudnienia"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formData.DataZatrudnienia}
                        onChange={handleChange}
                    />
                    <TextField label="Wynagrodzenie" name="Wynagrodzenie" value={formData.Wynagrodzenie} onChange={handleChange} />
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
