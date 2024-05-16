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
                            Tu znajduj� si� informacje o kodeksie etyki naszej firmy...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Procedury dotycz�ce bezpiecze�stwa pracy</Typography>
                        <Typography variant="body1">
                            Tu znajduj� si� informacje o procedurach dotycz�cych bezpiecze�stwa pracy...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Zasady rozwoju zawodowego</Typography>
                        <Typography variant="body1">
                            Tu znajduj� si� informacje o zasadach rozwoju zawodowego...
                        </Typography>
                    </Item>
                </Grid>

                {/* Polityki */}
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Zasady zatrudnienia</Typography>
                        <Typography variant="body1">
                            Tu znajduj� si� informacje o zasadach zatrudnienia...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka antydyskryminacyjna</Typography>
                        <Typography variant="body1">
                            Tu znajduj� si� informacje o polityce antydyskryminacyjnej...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka prywatno�ci pracownik�w</Typography>
                        <Typography variant="body1">
                            Tu znajduj� si� informacje o polityce prywatno�ci pracownik�w...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka r�wno�ci i r�norodno�ci</Typography>
                        <Typography variant="body1">
                            Tu znajduj� si� informacje o polityce r�wno�ci i r�norodno�ci...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka urlopowa</Typography>
                        <Typography variant="body1">
                            Tu znajduj� si� informacje o polityce urlopowej...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka wynagrodze� i �wiadcze�</Typography>
                        <Typography variant="body1">
                            Tu znajduj� si� informacje o polityce wynagrodze� i �wiadcze�...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka komunikacji wewn�trznej</Typography>
                        <Typography variant="body1">
                            Tu znajduj� si� informacje o polityce komunikacji wewn�trznej...
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    );
};

export { Deklaracje };
