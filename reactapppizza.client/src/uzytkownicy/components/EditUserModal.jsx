import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditUserModal = ({ open, onClose, user, onUpdate }) => {
    const [formData, setFormData] = useState({
        Imię: '',
        Nazwisko: '',
        Login: '',
        HasłoHash: '',
        Email: '',
        PoziomDostępu: '',
        DataRejestracji: '',
    });

    useEffect(() => {
        if (user) setFormData(user);
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = () => {
        onUpdate(formData);
        onClose();
    };

    if (!user) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Użytkownika</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField label="Imię" name="Imię" value={formData.Imię} onChange={handleChange} />
                    <TextField label="Nazwisko" name="Nazwisko" value={formData.Nazwisko} onChange={handleChange} />
                    <TextField label="Stanowisko" name="Login" value={formData.Login} onChange={handleChange} />
                    <TextField label="Telefon" name="HasłoHash" value={formData.HasłoHash} onChange={handleChange} />
                    <TextField label="Email" name="Email" value={formData.Email} onChange={handleChange} />
                    <TextField label="Email" name="PoziomDostępu" value={formData.PoziomDostępu} onChange={handleChange} />
                    <TextField
                        label="Data Rejestracji"
                        name="DataRejestracji"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={formData.DataRejestracji}
                        onChange={handleChange}
                    />
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

export default EditUserModal;
