import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box } from '@mui/material';

const EditTekstModal = ({ open, onClose, tekst, onUpdate }) => {
    const [formData, setFormData] = useState({ title: '', content: '' });

    useEffect(() => {
        if (tekst) {
            setFormData({ title: tekst.title, content: tekst.content });
        }
    }, [tekst]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        if (formData.title && formData.content) {
            onUpdate({ ...tekst, ...formData });
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edytuj Sekcję Tekstu</DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Tytuł Sekcji"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Treść Sekcji"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error" variant="outlined">
                    Anuluj
                </Button>
                <Button onClick={handleUpdate} variant="contained" color="primary">
                    Zapisz
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditTekstModal;
