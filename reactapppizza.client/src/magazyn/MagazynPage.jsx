import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import WarningIcon from '@mui/icons-material/Warning';
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DescriptionIcon from '@mui/icons-material/Description';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import '../App.css';

function Magazyn() {
    const [searchTerm, setSearchTerm] = useState('');
    const skladniki = [
        { id: 1, nazwa: 'Mąka', ilosc: '50 kg', lowStock: false },
        { id: 2, nazwa: 'Ser Grana Padano', ilosc: '30 kg', lowStock: false },
        { id: 3, nazwa: 'Passata', ilosc: '20 kg', lowStock: true },
        { id: 4, nazwa: 'Pieczarki', ilosc: '10 kg', lowStock: false },
        { id: 5, nazwa: 'Szynka Parmeńska', ilosc: '15 kg', lowStock: true },
        { id: 6, nazwa: 'Oliwa', ilosc: '50 l', lowStock: false }
    ];

    const dataBar = [
        { name: 'Mąka', value: 50 },
        { name: 'Ser', value: 30 },
        { name: 'Pomidory', value: 20 },
        { name: 'Pieczarki', value: 10 },
        { name: 'Szynka', value: 15 }
    ];

    const COLORS = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];

    return (
        <div id="content-container">
            <div id="left-container">
                <Typography id="title">Aktualny stan magazynu</Typography>
                <BarChart width={320} height={220} data={dataBar} style={{ marginLeft: '-10px' }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value">
                        {dataBar.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
                <Card variant="outlined" className="gradient-card gradient-green">
                    <CardContent className="card-inner">
                        <Typography variant="h6" component="div">
                            Zamówienie #001
                        </Typography>
                        <Typography color="text.secondary">
                            10 kg mąki - Zrealizowane
                        </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" className="gradient-card gradient-yellow">
                    <CardContent className="card-inner">
                        <Typography variant="h6" component="div">
                            Zamówienie #002
                        </Typography>
                        <Typography color="text.secondary">
                            20 kg sera - W trakcie realizacji
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div id="right-container">
                <div id="header-container" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <TextField
                        label="Szukaj składnika"
                        variant="outlined"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        id="search-bar"
                        style={{ width: '400px', height: '40px' }}
                    />
                    <div id="icon-container">
                        <IconButton><PrintIcon /></IconButton>
                        <IconButton><FileDownloadIcon /></IconButton>
                        <IconButton><DescriptionIcon /></IconButton>
                    </div>
                </div>
                <TableContainer component={Paper} style={{ marginBottom: '20px', marginTop: '20px' }}>
                    <Table sx={{ minWidth: 650, maxHeight: 400 }} aria-label="prosta tabela">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Nazwa składnika</TableCell>
                                <TableCell align="right">Ilość na magazynie</TableCell>
                                <TableCell align="right">Akcje</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {skladniki.filter(item => item.nazwa.toLowerCase().includes(searchTerm.toLowerCase())).map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    style={{ backgroundColor: row.lowStock ? '#ffcccc' : '' }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>{row.nazwa}</TableCell>
                                    <TableCell align="right">{row.ilosc}</TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="edit">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                        {row.lowStock && (
                                            <IconButton aria-label="low stock">
                                                <WarningIcon color="error" />
                                            </IconButton>
                                        )}
                                        {row.lowStock && <span style={{ color: 'red', marginLeft: '5px' }}>Niski stan!</span>}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div style={{ textAlign: 'right' }}>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: '#333',
                            color: '#fff',
                            textTransform: 'none',
                            height: '40px',
                            transition: 'background-color 0.3s, transform 0.3s',
                            marginTop: '20px',
                            marginRight: '10px'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#555'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#333'}
                    >
                        Przejdź do składania zamówienia
                    </Button>
                    <Button
                        variant="contained"
                        style={{
                            backgroundColor: '#333',
                            color: '#fff',
                            textTransform: 'none',
                            height: '40px',
                            transition: 'background-color 0.3s, transform 0.3s',
                            marginTop: '20px'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#555'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#333'}
                    >
                        Przejdź do śledzenia zamówień
                    </Button>
                </div>
            </div>
        </div>
    );
}

export { Magazyn };
