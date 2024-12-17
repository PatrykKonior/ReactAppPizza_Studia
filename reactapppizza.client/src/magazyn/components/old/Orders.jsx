import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Orders = () => (
    <div>
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
);

export default Orders;
