import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, IconButton, Button, Typography, List, ListItem, ListItemText, Grid, ListItemIcon, Box } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DescriptionIcon from '@mui/icons-material/Description';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import LockIcon from '@mui/icons-material/Lock';
import { green, red, blue } from '@mui/material/colors';
import '../App.css';

function Dokumenty() {
    const [searchTerm, setSearchTerm] = useState('');
    const dokumenty = [
        { id: 1, typ: 'Faktura', nazwa: 'Faktura_2023_01', data: '2023-01-15' },
        { id: 2, typ: 'Umowa', nazwa: 'Umowa_Dostawy_2023', data: '2023-02-20' },
        { id: 3, typ: 'Instrukcja', nazwa: 'Instrukcja_Obslugi_Piekarnika', data: '2023-03-05' },
    ];

    return (
        <div className="dokumenty-container">
            <Typography variant="h4" className="dokumenty-header">Zarządzanie dokumentami</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="dokumenty-search-container">
                        <TextField
                            label="Szukaj dokumentu"
                            variant="outlined"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                ),
                            }}
                            className="dokumenty-search-field"
                        />
                        <div className="dokumenty-icons">
                            <IconButton color="primary" aria-label="print">
                                <PrintIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="download">
                                <FileDownloadIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="export to Excel">
                                <DescriptionIcon />
                            </IconButton>
                        </div>
                    </div>
                    <TableContainer component={Paper} className="dokumenty-table-container">
                        <Table>
                            <TableHead className="dokumenty-table-header">
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Typ</TableCell>
                                    <TableCell>Nazwa</TableCell>
                                    <TableCell>Data</TableCell>
                                    <TableCell>Akcje</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dokumenty.filter(dok => dok.nazwa.toLowerCase().includes(searchTerm.toLowerCase())).map((dok, index) => (
                                    <TableRow key={dok.id} className={index % 2 === 0 ? 'dokumenty-table-row-even' : 'dokumenty-table-row-odd'}>
                                        <TableCell>{dok.id}</TableCell>
                                        <TableCell>{dok.typ}</TableCell>
                                        <TableCell>{dok.nazwa}</TableCell>
                                        <TableCell>{dok.data}</TableCell>
                                        <TableCell>
                                            <IconButton style={{ color: green[500] }}><AddIcon /></IconButton>
                                            <IconButton style={{ color: red[500] }}><LockIcon /></IconButton>
                                            <IconButton style={{ color: blue[500] }}><SearchIcon /></IconButton>
                                            <IconButton><EditIcon /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} md={4} className="dokumenty-left-panel">
                    <Typography variant="h6">Zarządzanie umowami</Typography>
                    <List className="dokumenty-left-panel-list">
                        <ListItem button>
                            <ListItemText primary="Przeglądaj umowy" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Dodaj nową umowę" />
                            <ListItemIcon>
                                <AddIcon />
                            </ListItemIcon>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Edytuj umowy" />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={8} className="dokumenty-right-panel">
                    <div className="dokumenty-przepisy-container">
                        <Typography variant="h6">Zarządzanie przepisami kulinarnymi</Typography>
                        <Typography variant="body2">
                            Tutaj można dodawać, edytować i udostępniać przepisy kulinarnie w restauracji.
                        </Typography>
                        <Button variant="contained" startIcon={<AddIcon />} sx={{ mt: 2 }}>
                            Dodaj przepis
                        </Button>
                        <Button variant="contained" startIcon={<EditIcon />} sx={{ mt: 2, ml: 2 }}>
                            Edytuj przepisy
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export { Dokumenty };
