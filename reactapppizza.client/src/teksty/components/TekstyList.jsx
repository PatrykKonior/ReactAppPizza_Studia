import React, { useState, useEffect } from 'react';
import {
    Box, Card, CardContent, Typography, Grid, TextField, IconButton, Button
} from '@mui/material';
import { Edit, Save, Cancel } from '@mui/icons-material';

const API_TEKSTY_URL = 'http://localhost:5178/api/Teksty';
const API_OPINIE_URL = 'http://localhost:5178/api/Opinie';

const TekstyList = () => {
    const [teksty, setTeksty] = useState([]);
    const [opinie, setOpinie] = useState([]);
    const [editingTekstId, setEditingTekstId] = useState(null);
    const [editingOpiniaId, setEditingOpiniaId] = useState(null);

    useEffect(() => {
        fetchTeksty();
        fetchOpinie();
    }, []);

    // Pobierz teksty
    const fetchTeksty = async () => {
        try {
            const response = await fetch(API_TEKSTY_URL);
            const data = await response.json();
            setTeksty(data);
        } catch (error) {
            console.error('Błąd podczas pobierania tekstów:', error);
        }
    };

    // Pobierz opinie
    const fetchOpinie = async () => {
        try {
            const response = await fetch(API_OPINIE_URL);
            const data = await response.json();
            setOpinie(data);
        } catch (error) {
            console.error('Błąd podczas pobierania opinii:', error);
        }
    };

    // Aktualizacja tekstów
    const handleUpdateTekst = async (id, updatedTekst) => {
        try {
            const response = await fetch(`${API_TEKSTY_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedTekst),
            });
            if (response.ok) {
                fetchTeksty();
                setEditingTekstId(null);
            }
        } catch (error) {
            console.error('Błąd podczas aktualizacji tekstu:', error);
        }
    };

    // Aktualizacja opinii
    const handleUpdateOpinia = async (id, updatedOpinia) => {
        try {
            const response = await fetch(`${API_OPINIE_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedOpinia),
            });
            if (response.ok) {
                fetchOpinie();
                setEditingOpiniaId(null);
            }
        } catch (error) {
            console.error('Błąd podczas aktualizacji opinii:', error);
        }
    };

    // Anulowanie edycji
    const handleCancelTekstEdit = () => setEditingTekstId(null);
    const handleCancelOpiniaEdit = () => setEditingOpiniaId(null);

    return (
        <Grid container spacing={3}>
            {/* Teksty */}
            <Grid item xs={12} md={6}>
                <Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Teksty
                    </Typography>

                    {teksty.map((tekst) => (
                        <Card key={tekst.id} elevation={3} sx={{ mb: 2, padding: 2, minHeight: '200px' }}>
                            <CardContent>
                                {editingTekstId === tekst.id ? (
                                    <>
                                        <TextField
                                            fullWidth
                                            label="Tytuł"
                                            value={tekst.title}
                                            onChange={(e) => {
                                                const updatedTekst = { ...tekst, title: e.target.value };
                                                setTeksty((prev) =>
                                                    prev.map((t) =>
                                                        t.id === tekst.id ? updatedTekst : t
                                                    )
                                                );
                                            }}
                                            sx={{ mb: 2 }}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Treść"
                                            value={tekst.content}
                                            onChange={(e) => {
                                                const updatedTekst = { ...tekst, content: e.target.value };
                                                setTeksty((prev) =>
                                                    prev.map((t) =>
                                                        t.id === tekst.id ? updatedTekst : t
                                                    )
                                                );
                                            }}
                                            multiline
                                            rows={4}
                                        />
                                        <Box sx={{ mt: 2, display: 'flex', gap: 36 }}>
                                            <Button
                                                variant="contained"
                                                startIcon={<Save />}
                                                onClick={() => handleUpdateTekst(tekst.id, tekst)}
                                            >
                                                Zapisz
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                startIcon={<Cancel />}
                                                onClick={handleCancelTekstEdit}
                                            >
                                                Anuluj
                                            </Button>
                                        </Box>
                                    </>
                                ) : (
                                    <>
                                        <Typography variant="h6">{tekst.title}</Typography>
                                        <Typography variant="body1" sx={{ mt: 1 }}>
                                            {tekst.content}
                                        </Typography>
                                        <Box sx={{ mt: 2 }}>
                                            <IconButton
                                                color="primary"
                                                onClick={() => setEditingTekstId(tekst.id)}
                                            >
                                                <Edit />
                                            </IconButton>
                                        </Box>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Grid>

            {/* Opinie */}
            <Grid item xs={12} md={6}>
                <Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                        Opinie
                    </Typography>

                    {opinie.map((opinia) => (
                        <Card key={opinia.id} elevation={3} sx={{ mb: 2, padding: 2, minHeight: '200px' }}>
                            <CardContent>
                                {editingOpiniaId === opinia.id ? (
                                    <>
                                        <TextField
                                            fullWidth
                                            label="Opinia"
                                            value={opinia.opinia}
                                            onChange={(e) => {
                                                const updatedOpinia = { ...opinia, opinia: e.target.value };
                                                setOpinie((prev) =>
                                                    prev.map((o) =>
                                                        o.id === opinia.id ? updatedOpinia : o
                                                    )
                                                );
                                            }}
                                            multiline
                                            rows={4}
                                            sx={{ mb: 2 }}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Klient"
                                            value={opinia.klient}
                                            onChange={(e) => {
                                                const updatedOpinia = { ...opinia, klient: e.target.value };
                                                setOpinie((prev) =>
                                                    prev.map((o) =>
                                                        o.id === opinia.id ? updatedOpinia : o
                                                    )
                                                );
                                            }}
                                        />
                                        <Box sx={{ mt: 2, display: 'flex', gap: 36 }}>
                                            <Button
                                                variant="contained"
                                                startIcon={<Save />}
                                                onClick={() => handleUpdateOpinia(opinia.id, opinia)}
                                            >
                                                Zapisz
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                startIcon={<Cancel />}
                                                onClick={handleCancelOpiniaEdit}
                                            >
                                                Anuluj
                                            </Button>
                                        </Box>
                                    </>
                                ) : (
                                    <>
                                        <Typography variant="body1" sx={{ mb: 1 }}>
                                            {opinia.opinia}
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary">
                                            - {opinia.klient}
                                        </Typography>
                                        <Box sx={{ mt: 2 }}>
                                            <IconButton
                                                color="primary"
                                                onClick={() => setEditingOpiniaId(opinia.id)}
                                            >
                                                <Edit />
                                            </IconButton>
                                        </Box>
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};

export default TekstyList;
