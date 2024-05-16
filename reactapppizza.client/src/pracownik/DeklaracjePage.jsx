// src/components/Declarations.js
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#BFB78F',
    backgroundColor: '#011a20',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
}));

const Deklaracje = () => {
    return (
        <Container maxWidth="lg" style={{ padding: '10px 0' }}>
            <Typography variant="h4" gutterBottom>
                Deklaracje Pracownicze i Polityki
            </Typography>
            <Grid container spacing={3}>
                {/* Deklaracje Pracownicze */}
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Kodeks Etyki</Typography>
                        <Typography variant="body1">
                            Tu znajduj¹ siê informacje o kodeksie etyki naszej firmy...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Procedury dotycz¹ce bezpieczeñstwa pracy</Typography>
                        <Typography variant="body1">
                            Tu znajduj¹ siê informacje o procedurach dotycz¹cych bezpieczeñstwa pracy...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Zasady rozwoju zawodowego</Typography>
                        <Typography variant="body1">
                            Tu znajduj¹ siê informacje o zasadach rozwoju zawodowego...
                        </Typography>
                    </Item>
                </Grid>

                {/* Polityki */}
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Zasady zatrudnienia</Typography>
                        <Typography variant="body1">
                            Tu znajduj¹ siê informacje o zasadach zatrudnienia...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka antydyskryminacyjna</Typography>
                        <Typography variant="body1">
                            Tu znajduj¹ siê informacje o polityce antydyskryminacyjnej...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka prywatnoœci pracowników</Typography>
                        <Typography variant="body1">
                            Tu znajduj¹ siê informacje o polityce prywatnoœci pracowników...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka równoœci i ró¿norodnoœci</Typography>
                        <Typography variant="body1">
                            Tu znajduj¹ siê informacje o polityce równoœci i ró¿norodnoœci...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka urlopowa</Typography>
                        <Typography variant="body1">
                            Tu znajduj¹ siê informacje o polityce urlopowej...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka wynagrodzeñ i œwiadczeñ</Typography>
                        <Typography variant="body1">
                            Tu znajduj¹ siê informacje o polityce wynagrodzeñ i œwiadczeñ...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka komunikacji wewnêtrznej</Typography>
                        <Typography variant="body1">
                            Tu znajduj¹ siê informacje o polityce komunikacji wewnêtrznej...
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    );
};

export { Deklaracje };
