import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import WarningIcon from '@mui/icons-material/Warning';
import PrintIcon from '@mui/icons-material/Print';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DescriptionIcon from '@mui/icons-material/Description'; // Ikona dla Excela
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

function Magazyn() {
    const [searchTerm, setSearchTerm] = useState('');
    const skladniki = [
        { id: 1, nazwa: 'M¹ka', ilosc: '50 kg', lowStock: false },
        { id: 2, nazwa: 'Ser', ilosc: '30 kg', lowStock: false },
        { id: 3, nazwa: 'Pomidory', ilosc: '20 kg', lowStock: true },
        { id: 4, nazwa: 'Pieczarki', ilosc: '10 kg', lowStock: false },
        { id: 5, nazwa: 'Szynka', ilosc: '15 kg', lowStock: false }
    ];

    const dataPie = [
        { name: 'M¹ka', value: 400 },
        { name: 'Ser', value: 300 },
        { name: 'Pomidory', value: 300 },
        { name: 'Pieczarki', value: 200 },
        { name: 'Szynka', value: 200 }
    ];

    const COLORS = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51']; // Nowa paleta kolorów

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '20%', padding: '20px' }}>
                <PieChart width={200} height={200}>
                    <Pie
                        data={dataPie}
                        cx={100}
                        cy={100}
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {dataPie.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <Card variant="outlined" sx={{ mb: 2, backgroundColor: '#f0f4f8', width: '100%' }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Zamówienie #001
                        </Typography>
                        <Typography color="text.secondary">
                            10 kg m¹ki - Zrealizowane
                        </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{ backgroundColor: '#f0f4f8', width: '100%' }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            Zamówienie #002
                        </Typography>
                        <Typography color="text.secondary">
                            20 kg sera - W trakcie realizacji
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div style={{ width: '75%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <TextField label="Szukaj sk³adnika" variant="outlined" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} style={{ width: '70%' }} />
                    <div>
                        <IconButton><PrintIcon /></IconButton>
                        <IconButton><FileDownloadIcon /></IconButton>
                        <IconButton><DescriptionIcon /></IconButton> 
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="prosta tabela">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Nazwa sk³adnika</TableCell>
                                <TableCell align="right">Iloœæ na magazynie</TableCell>
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
                <div style={{ marginTop: '20px' }}>
                    <Button variant="contained" color="primary">PrzejdŸ do sk³adania zamówienia</Button>
                </div>
            </div>
        </div>
    );
}

export { Magazyn };
