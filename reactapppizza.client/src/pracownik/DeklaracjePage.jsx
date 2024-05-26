import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1.5),
    textAlign: 'center',
    color: '#BFB78F',
    backgroundColor: '#011a20',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    transform: 'scale(0.96)', 
    marginLeft: '25px', 
    '&:hover': {
        transform: 'scale(1)', 
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
}));

const Deklaracje = () => {
    return (
        <Container maxWidth="lg" style={{ padding: '10px 0' }}>
            <Typography variant="h4" gutterBottom style={{ marginLeft: '30px' }}>
                Deklaracje Pracownicze i Polityki
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Deklaracje urlopowe</Typography>
                        <Typography variant="body1">
                            Tu znajdują się informacje o deklaracjach urlopowych naszych pracowników...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Urlopy zdrowotne</Typography>
                        <Typography variant="body1">
                            Tu znajdują się informacje o urlopach zdrowotnych naszych pracowników...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Badania zdrowotne</Typography>
                        <Typography variant="body1">
                            Tu znajdują się informacje o badaniach zdrowotnych naszych pracowników...
                        </Typography>
                    </Item>
                </Grid>

                {/* Polityki */}
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Zasady zatrudnienia</Typography>
                        <Typography variant="body1">
                            Tu znajdują się informacje o wszelkich umowach naszych pracowników...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka godzin pracy i nadgodzin</Typography>
                        <Typography variant="body1">
                            Tu znajdują się informacje o godzinach pracy pracowników oraz ilości wyrobionych nadgodzin...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka wynagrodzeń oraz świadczeń</Typography>
                        <Typography variant="body1">
                            Tu znajdują się informacje o atualnych wynagrodzeniach pracowników oraz z jakich świadczeń korzystają...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Inicjatywy oraz integracja</Typography>
                        <Typography variant="body1">
                            Tu znajdują się informacje o Polityce dot. inicjatyw pracowników oraz planach integracyjnych...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Media społecznościowe oraz promocja</Typography>
                        <Typography variant="body1">
                            Tu znajdują się informacje o promocjach w mediach społecznoścowych...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka poziomu obsługi klienta</Typography>
                        <Typography variant="body1">
                            Tu znajdują się informacje o polityce standardów dot. obsługi klienta...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka bezpieczeństwa</Typography>
                        <Typography variant="body1">
                            Tu znajdują się informacje o BHP w miejscu pracy oraz dodatkowych zabezpieczeniach...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Listy obecności pracowników</Typography>
                        <Typography variant="body1">
                            Tu znajdują się wszystkie listy obecności pracowników z każdego miesiąca...
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Item>
                        <Typography variant="h5" gutterBottom>Polityka sanitarna firmy</Typography>
                        <Typography variant="body1">
                            Tu znajdują się informacje o polityce sanitarnej, która ma panować w lokalu...
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    );
};

export { Deklaracje };
