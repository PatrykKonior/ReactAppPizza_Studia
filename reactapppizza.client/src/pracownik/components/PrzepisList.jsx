import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Paper, IconButton, TextField, Typography, Box, Button
} from '@mui/material';
import { Edit, Delete, AddCircleOutline } from '@mui/icons-material';
import AddPrzepisModal from './AddPrzepisModal';
import EditPrzepisModal from './EditPrzepisModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const PrzepisList = () => {
    const [filter, setFilter] = useState('');
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [currentPrzepis, setCurrentPrzepis] = useState(null);

    const handleFilterChange = (e) => setFilter(e.target.value);

    const przepisyData = [
        {
            PrzepisID: 1,
            NazwaPrzepisu: 'Spaghetti Bolognese',
            Składniki: 'Makaron, mięso mielone, pomidory, cebula, czosnek',
            InstrukcjaPrzygotowania: 'Ugotuj makaron, podsmaż mięso z cebulą i dodaj pomidory.',
            CzasPrzygotowania: 45,
        },
    ];

    const filteredPrzepisy = przepisyData.filter((item) =>
        item.NazwaPrzepisu.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                Lista Przepisów Kulinarnych
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <TextField
                    variant="outlined"
                    label="Szukaj przepisu..."
                    value={filter}
                    onChange={handleFilterChange}
                    sx={{ width: '80%' }}
                />
                <Button
                    variant="contained"
                    startIcon={<AddCircleOutline />}
                    onClick={() => setOpenAdd(true)}
                    sx={{
                        backgroundColor: '#011a20',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#c7a42f', color: '#011a20' },
                    }}
                >
                    Dodaj Przepis
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {['PrzepisID', 'Nazwa Przepisu', 'Składniki', 'Instrukcja Przygotowania', 'Czas Przygotowania'].map((col) => (
                                <TableCell key={col} align="center" sx={{ fontWeight: 'bold' }}>
                                    {col}
                                </TableCell>
                            ))}
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredPrzepisy.map((przepis) => (
                            <TableRow key={przepis.PrzepisID}>
                                <TableCell align="center">{przepis.PrzepisID}</TableCell>
                                <TableCell align="center">{przepis.NazwaPrzepisu}</TableCell>
                                <TableCell align="center">{przepis.Składniki}</TableCell>
                                <TableCell align="center">{przepis.InstrukcjaPrzygotowania}</TableCell>
                                <TableCell align="center">{przepis.CzasPrzygotowania} min</TableCell>
                                <TableCell align="center">
                                    <IconButton color="primary" onClick={() => { setCurrentPrzepis(przepis); setOpenEdit(true); }}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => { setCurrentPrzepis(przepis); setOpenDelete(true); }}>
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modale */}
            <AddPrzepisModal open={openAdd} onClose={() => setOpenAdd(false)} />
            <EditPrzepisModal open={openEdit} onClose={() => setOpenEdit(false)} przepis={currentPrzepis} />
            <DeleteConfirmModal open={openDelete} onClose={() => setOpenDelete(false)} />
        </Box>
    );
};

export default PrzepisList;
