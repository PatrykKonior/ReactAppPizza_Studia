import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const SalesTable = ({ sales = [] }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Produkt</TableCell>
                        <TableCell>Ilosc</TableCell>
                        <TableCell>Cena</TableCell>
                        <TableCell>Laczna kwota</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sales.map((sale, index) => (
                        <TableRow key={index}>
                            <TableCell>{sale.product}</TableCell>
                            <TableCell>{sale.quantity}</TableCell>
                            <TableCell>{sale.price} PLN</TableCell>
                            <TableCell>{sale.quantity * sale.price} PLN</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SalesTable;
