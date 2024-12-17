import React, { useState } from 'react';
import {
    Box, Card, CardContent, Typography, Button, IconButton, Grid, Paper
} from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import AddTekstModal from './AddTekstModal';
import EditTekstModal from './EditTekstModal';
import DeleteConfirmTekstModal from './DeleteConfirmTekstModal';

const TekstyList = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [currentTekst, setCurrentTekst] = useState(null);

    const tekstyData = [
        { id: 1, title: 'Hero Section', content: 'Witamy w Pizza 365 - Najlepsze pizze w mieście!' },
        { id: 2, title: 'About Section', content: 'Pizza 365 to miejsce, gdzie pasja do gotowania spotyka się z jakością.' },
        { id: 3, title: 'CTA Section', content: 'Gotowy na kulinarną podróż? Zobacz nasze menu!' },
    ];

    const [teksty, setTeksty] = useState(tekstyData);

    const handleAdd = (newTekst) => {
        setTeksty([...teksty, { id: teksty.length + 1, ...newTekst }]);
        setOpenAdd(false);
    };

    const handleEdit = (updatedTekst) => {
        setTeksty(teksty.map((t) => (t.id === updatedTekst.id ? updatedTekst : t)));
        setOpenEdit(false);
    };

    const handleDelete = () => {
        setTeksty(teksty.filter((t) => t.id !== currentTekst.id));
        setOpenDelete(false);
    };

    return (
        <Box>
            {/* Przycisk dodawania */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <Button
                    variant="contained"
                    startIcon={<AddCircleOutline />}
                    onClick={() => setOpenAdd(true)}
                    sx={{
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#1565c0' },
                    }}
                >
                    Dodaj Sekcję Tekstu
                </Button>
            </Box>

            {/* Lista tekstów */}
            <Grid container spacing={3}>
                {teksty.map((tekst) => (
                    <Grid item xs={12} sm={6} key={tekst.id}>
                        <Card elevation={3} sx={{ borderRadius: '10px', backgroundColor: '#fff' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                                    {tekst.title}
                                </Typography>
                                <Typography variant="body2" sx={{ marginY: 2, color: '#555' }}>
                                    {tekst.content}
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                                    <IconButton color="primary" onClick={() => { setCurrentTekst(tekst); setOpenEdit(true); }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => { setCurrentTekst(tekst); setOpenDelete(true); }}>
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Modale */}
            <AddTekstModal open={openAdd} onClose={() => setOpenAdd(false)} onAdd={handleAdd} />
            <EditTekstModal open={openEdit} onClose={() => setOpenEdit(false)} tekst={currentTekst} onUpdate={handleEdit} />
            <DeleteConfirmTekstModal open={openDelete} onClose={() => setOpenDelete(false)} onDelete={handleDelete} />
        </Box>
    );
};

export default TekstyList;
